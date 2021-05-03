const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/signatures.db');

var title = "Darth Vader"
var message = "I am become death"


db.run(`DELETE FROM signatures WHERE title=?`, title, function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row(s) deleted ${this.changes}`);
  });

db.close();
