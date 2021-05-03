const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/signatures.db');

db.run('CREATE TABLE signatures (title text PRIMARY KEY, message text NOT NULL)', function(err){
    if(err){
        return console.log(err.message)
    }
    console.log("Table created)")
});

db.close();