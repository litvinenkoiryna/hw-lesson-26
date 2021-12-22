"use strict";

//first
let sum = prompt('how much money do you have?');
let choco = 50.80;
let result = (sum/choco);
let oddMoney = (sum%choco);
alert ((Math.floor(result)) + ' ' + 'chocolates' +' '+ 'and' +' '+ (oddMoney.toFixed(2)) +' '+ 'will be your odd money');

//second
let a = prompt('say me a three-digit number?');
let b = a;
let reverse = 0;
while(b > 0)
{
    let digit = b % 10;
    reverse = (reverse*10) + digit;
    b = parseInt (b / 10);
}
alert ('reverse = '+ reverse);