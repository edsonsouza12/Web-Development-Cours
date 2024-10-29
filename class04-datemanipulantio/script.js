console.log("test")

let concept = "prototype (chain)"
let myNome = "edson souza"

console.log(myNome.__proto__);
console.log(myNome.toLocaleLowerCase());
console.log(myNome.toLocaleLowerCase());

console.log(myNome.slice(2));
console.log(myNome.slice(-3));
console.log(myNome.slice(2, -3));


console.log(concept.length);
console.log(concept.indexOf("("));


// numbers
let num1 = 123456789
let num2 = 5.4234

console.log(String(num1).length);
console.log(num2);
console.log(num2.toFixed(2));

console.log(Math.sqrt(81));
console.log(Math.pow(2, 10));

console.log(Math.abs(num2));
console.log(Math.trunc(num2));

console.log(Math.round(5.5));// 0-4 5-9
console.log(Math.floor(5.001));
console.log(Math.floor(5.999));

console.log(Math.random());
console.log(Math.ceil(Math.random()* 100))
console.log(Math.round(Math.random()* 10));

const times = ["corinthians", "flamengo", "vasco", "fortaleza", "sao paulo"]

const randomNumber = Math.floor(Math.random()* times.length)

console.log(times[randomNumber]);


















