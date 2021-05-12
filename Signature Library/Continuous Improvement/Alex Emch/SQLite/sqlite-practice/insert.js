const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/signatures.db');

var title = "Darth Vader"
var message = "I am become death"


db.run(`INSERT INTO signatures(title, message) VALUES('${title}', '${message}')`, function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row with title has been inserted with rowid ${this.lastID}`);
  });

db.close();


//db.run(`INSERT INTO signatures(title,message) values("Vader", "I am your death")`, function(err) {