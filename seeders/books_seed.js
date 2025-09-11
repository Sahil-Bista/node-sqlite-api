import db from "../config/connDB.js";

db.serialize(()=>{
    db.run(`INSERT INTO books (title, isbn, published_year, author_id) VALUES ('Harry Potter', '1234567890', 1997, 1)`, (err)=>{
        if(err){
            console.log('Error seeding book 1');
        }else{
            console.log('Book 1 seeded into the db');
        }
    });

    db.run(`INSERT INTO books (title, isbn, published_year, author_id) VALUES ('Game of Thrones', '0123456789', 1996, 2)`, (err)=>{
        if(err){
            console.log('Error seeding book 2');
        }else{
            console.log('Book 2 seeded into the db');
        }
    });
});