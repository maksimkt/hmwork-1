let age = +prompt('how old are you?');
alert(age);

let year = +prompt('what your year of birth?');
alert( 2020 - year);

let a = +prompt('what is the length of the width of the rectangle?');
let b = +prompt('what is the length of the height of the rectangle?');
let total = a * 2 + b *2;
alert (total);

let r = +prompt('Enter circle radius');
let pi = 3.14;
let square = pi * r ** 2;
alert(square);

let time = +prompt('how long do we have to go');
let distance = time * 50;
alert(distance + 'km');

let mile = prompt('wright distance in km');
let convertorInToMile = mile * 0.621371;
alert(convertorInToMile);

let km = prompt('wright distance in mile');
let convertorInToKm = km * 1.60934;
alert(convertorInToKm);

let card = +prompt('Enter your debit card balance');
let gasPrice = +prompt('Enter the price for 1 liter of gase');
let gasNeed = +prompt('Enter the amount of gasoline (in liters) you would like to order');
let gasAmount = gasPrice * gasNeed ;
let remainder = card - gasAmount ;
alert(remainder);