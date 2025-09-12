import { asyncHandler } from "../utils/asyncWrapper.js";
import {execute, fetchAll, fetchFirst} from "../utils/dbRunMethodWrapper.js";
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

export const getAllAuthors = asyncHandler(async(req,res)=>{
    let {name , order} = req.query;
    order = order && order.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';
    let sql = `
        SELECT authors.*, COUNT(books.id) AS books_count FROM authors 
        LEFT JOIN books
        ON authors.id = books.author_id
    `
    const params = []
    if(name){
        sql+= ` WHERE authors.name LIKE ?`;
        params.push(`%${name}%`)
    };
    sql += ` GROUP BY authors.id`;
    sql+= ` ORDER BY books_count ${order}`;
    const authors = await fetchAll(db, sql, params);
    if(!authors || authors.length==0){
        return res.status(204).json({msg:"No any authors in the list yet"});
    }
    return res.status(200).json({msg:'Authors retreiveed sucessfully', data : authors});
});