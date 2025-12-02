// split(): The split method splits a string at a specified place.
let string = '40 Days Of JavaScript'
console.log(string.split())     // ["40 Days Of JavaScript"]
console.log(string.split(' '))  // ["40", "Days", "Of", "JavaScript"]
let firstName = 'shubham'
console.log(firstName.split())  // ["shubham"]
console.log(firstName.split(''))  // ["A", "r", "j", "u", "n"]
let countries = 'Karnataka, Maharashtra, Tamil Nadu, Kerala, and Punjab'
console.log(countries.split(',')) // ["Karnataka", " Maharashtra", " Tamil Nadu", " Kerala", " and Punjab"]
console.log(countries.split(', '))   //  ["Karnataka", "Maharashtra", "Tamil Nadu", "Kerala", "and Punjab"]