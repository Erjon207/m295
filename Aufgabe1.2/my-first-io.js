const fs = require('fs')  
const path = process.argv[2]
try {
    const data = fs.readFileSync(path, 'utf8');
    const myArray = data.split('\n');
    console.log(myArray.length - 1);
} catch (err) {
    console.log("Error:", err);
}
