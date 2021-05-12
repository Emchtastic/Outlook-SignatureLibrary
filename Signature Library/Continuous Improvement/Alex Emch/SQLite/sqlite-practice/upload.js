
const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db/signatures.db');

let sql = 
`SELECT title
FROM signatures
WHERE title  = ?`;

let title = "Darth"


db.get (sql, [title], function(err, row) {
        if (err) {
            console.log(err)
        }
            return row
            ? console.log(row.title)
    : console.log(`No playlist found with the id ${title}`);
        });


db.close();

