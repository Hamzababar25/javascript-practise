//When adding a number and a string, JavaScript will treat the number as a string.
let x = 16 + "Volvo";
console.log(x);


//JavaScript evaluates expressions from left to right. Different sequences can produce different results

let n = 16 + 4 + "Volvo";
console.log(n);


let z = "Volvo" + 16 + 4;
console.log(z);