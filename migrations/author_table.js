import db from "../config/connDB.js";

db.run(`
        CREATE TABLE IF NOT EXISTS authors (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            cretated_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
    `,
(err)=>{
    if(err) console.log(err);
    else console.log('Authors table created');
})
