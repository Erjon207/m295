const fs = require('fs')  
const path = process.argv[2]
fs.readFile(path, 'utf8', function(err, data) {
    if (err) {console.log("error")};
    const myArray = data.split('\n');
    console.log(myArray.length - 1)
});