function verdoppeln (num, callback){
    num += num;
    callback('Das Ergebnis ist: ' + num)
}

verdoppeln(5, console.log)
