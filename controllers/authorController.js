import { asyncHandler } from "../utils/asyncWrapper.js";
import {execute, fetchFirst} from "../utils/dbRunMethodWrapper.js";
import db from '../config/connDB.js';

export const createAuthor = asyncHandler(async(req , res) =>{
    const { name , email} = req.body;
    const checkSql = `SELECT * FROM authors WHERE email = ?`;
    const existing = await fetchFirst(db, checkSql, [email]);
    if (existing) {
        const error = new Error("Author with this email already exists");
        error.statusCode = 409; 
        throw error;
    }
    const sql = `INSERT INTO authors(name, email) VALUES (?,?)`;
    await execute(db, sql, [name, email]);
    return res.status(200).json({msg:'Author created successfully'})
});