import db from "../config/connDB.js";

db.run(`
        CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            isbn TEXT UNIQUE NOT NULL,
            published_year INTEGER,
            author_id INTEGER NOT NULL,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (author_id) REFERENCES authors(id)
        )
    `,
(err)=>{
    if(err) console.log(err);
    else console.log('Books table created');
})
