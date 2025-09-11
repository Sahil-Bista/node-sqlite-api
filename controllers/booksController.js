import { asyncHandler } from "../utils/asyncWrapper.js";
import { execute, fetchFirst } from "../utils/dbRunMethodWrapper.js";
import db from '../config/connDB.js';

export const createBooks = asyncHandler(async(req, res)=>{
    const { title, isbn , published_year, author_id } = req.body;
    const checkSQL = `
        SELECT FROM books
        WHERE isbn = ?
    `;
    const duplicate = await fetchFirst(db, checkSQL, [isbn] );
    if(duplicate){
        const error = new Error("Book with this isbn already exists");
        error.statusCode = 409; 
        throw error;
    }
    const sql = `INSERT INTO books
    (title, isbn, published_year, author_id)
    VALUES
    (?,?,?,?)`
    await execute(db, sql, [title, isbn, published_year, author_id]);
    return res.status(200).json({msg:'Book created successfully'});

});