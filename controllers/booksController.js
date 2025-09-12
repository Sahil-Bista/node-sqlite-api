import { asyncHandler } from "../utils/asyncWrapper.js";
import { execute, fetchFirst, fetchAll} from "../utils/dbRunMethodWrapper.js";
import db from '../config/connDB.js';

export const createBooks = asyncHandler(async(req, res)=>{
    const { title, isbn , published_year, author_id } = req.body;
    const checksDuplicacySQL = `
        SELECT * FROM books
        WHERE isbn = ?
    `;
    const duplicate = await fetchFirst(db, checksDuplicacySQL, [isbn] );
    if(duplicate){
        const error = new Error("Book with this isbn already exists");
        error.statusCode = 409; 
        throw error;
    }
    const checkAuthorSQL = `
        SELECT * FROM authors
        WHERE id = ?
    `
    const author = await fetchFirst(db, checkAuthorSQL, [author_id]);
    if(!author){
        const error = new Error(`No such author with id ${author_id} exists in the author table`);
        error.statusCode = 400; 
        throw error;
    }
    const sql = `INSERT INTO books
    (title, isbn, published_year, author_id)
    VALUES
    (?,?,?,?)`
    await execute(db, sql, [title, isbn, published_year, author_id]);
    return res.status(200).json({msg:'Book created successfully'});
});

export const getAllBooks = asyncHandler(async(req, res)=>{
    let { title , year , order, sort} = req.query;
    order = order && order.toUpperCase() === 'ASC' ? 'ASC' : 'DESC'; 
    let sql = `SELECT *FROM books`;
    const params = [];
    if(title){
        sql += ` WHERE books.title LIKE ?`;
        params.push(`%${title}%`);
    }
    if(sort == "byYear"){
        sql += ` ORDER BY published_year ${order}`;
    }
    const books = await fetchAll(db, sql, params);
    if(!books || books.length==0){
        return res.status(204).json({msg:"No any books in the list yet"});
    }
    return res.status(200).json({msg:'books retreiveed sucessfully', data : books});
})