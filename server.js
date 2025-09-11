import app from './app.js';
import db from "./config/connDB.js";

let server;

export const startServer = (PORT) =>{
    try{
        if (!db) {
            throw new Error("Database not initialized");
        }
        server = app.listen(PORT,()=>{
            console.log(`App is listening on PORT ${PORT}`);
        })
    }catch(err){
        console.log('Error creating server',err);
        process.exit(1);
    }
}

