
const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db/signatures.db');

db.serialize(function() {
    db.each (
        "select signatures.title, signatures.message from signatures", function(err, row) {
            if (err) {
                console.log(err)
            }
            console.log(row)
        }
    )
})

// close the database connection
db.close();
