
const sqlite3 = require('sqlite3').verbose();

// open the database
showdb()

function showdb() {
let db = new sqlite3.Database('./db/signatures.db');


db.serialize(function() {

    db.each (
        "select signatures.title, signatures.message from signatures", function(err, row) {
            if (err) {
                console.log(err)
            }
            var signature = {
                title : row.title,
                message : row.message
            }
            console.log(signature)
            return signature;
        }
    )
})
// close the database connection
db.close();
}


module.exports = {
    showdb 
}