//!! Promise functioniert File lessen nicht !!


const fs = require('node:fs')

let myPromise = new Promise(function (myResolve, myReject) {
    read('./data.txt');
    
    function read(path) {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) { 
                myReject(err); 
            } else {myResolve(data.length);}
            
        });
    }
});

myPromise.then(
    function (value) { console.log(value); },
    function (error) { console.log(error); }
);