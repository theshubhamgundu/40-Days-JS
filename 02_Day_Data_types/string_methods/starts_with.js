// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// string.startsWith(substring)
let string = 'Love is the best to in this world'
console.log(string.startsWith('Love')) // true
console.log(string.startsWith('love')) // false
console.log(string.startsWith('world')) // false

let country = 'Karnataka'
console.log(country.startsWith('Kar')) // true
console.log(country.startsWith('kar')) // false
console.log(country.startsWith('taka')) //  false
