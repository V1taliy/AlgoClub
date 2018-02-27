const readline = require('readline');

function first() {
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number! ', number => {
    evalNumber(+number)
    rl.close();
});
}

function evalNumber(value){
    var resultToArray = [];
    for (var i = 0; i < value; i++) {
    var tempVal = i, sumOfDigits = 0;
    while(tempVal) {
        sumOfDigits += tempVal % 10;
        tempVal = Math.floor(tempVal / 10);
    }
    var resultSum = i + sumOfDigits;
    if (resultSum === value) {
        resultToArray.push(i);
    }
    }
    console.log(resultToArray.length);
    console.log(resultToArray.toString().replace(',', ' '));
}

first();




