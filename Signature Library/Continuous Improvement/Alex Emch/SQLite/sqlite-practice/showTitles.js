const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db/signatures.db');

db.all(`SELECT DISTINCT title FROM signatures ORDER BY title`, (err, rows) => {
    if (err) {
        throw err;
    }

    rows.forEach((row) =>{
        console.log(row.title)
    })
})

// close the database connection
db.close();