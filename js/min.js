"use strict";

//first
let a = 0.1;
let b = 0.2;
let c = a+b;
console.log(c.toFixed(1) );

//second
let d = '1';
let f = 2;
let g = Number(d)+f;
console.log(g);
alert(g);

//third

let flash = prompt('how much memory on the flash drive?');
let file = 820;
let result = (flash/(file/1000));
alert (Math.floor(result));