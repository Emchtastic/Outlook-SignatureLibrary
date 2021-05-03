var signatures = [{
    title : "Oppenheimer",
    message : "I am become death"
}]

 signatures.push({title : "Orbus", message : "Now you know"});

 var json = JSON.stringify(signatures);

 var fs = require('fs');
 fs.writeFile('myjsonfile.json', json, function(err) {
     if (err) throw err;
     console.log("complete")
 });