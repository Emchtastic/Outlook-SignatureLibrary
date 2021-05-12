var signatures = []
var fs = require('fs');
fs.readFile('myjsonfile.json',function(err,data){
    if (err) {
        console.log(err);
    }
   signatures = JSON.parse(data);

    console.log(signatures)

})