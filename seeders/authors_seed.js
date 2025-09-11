import db from "../config/connDB.js";

db.serialize(()=>{
    db.run(`INSERT INTO authors (name, email) VALUES ('sahil', 'sahil@gmail.com')`, (err)=>{
        if(err){
            console.log('Error seeding author 1');
        }else{
            console.log('Author 1 seeded into the db');
        }
    });
    db.run(`INSERT INTO authors (name, email) VALUES ('sahil2', 'sahil2@gmail.com')`, (err)=>{
        if(err){
            console.log('Error seeding author 2');
        }else{
            console.log('Author 2 seeded into the db');
        }
    });
})