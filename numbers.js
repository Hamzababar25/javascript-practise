
//floating point precision is not always accurate
let x = 0.2 + 0.1;
console.log(x)


//

let xv = 100 / "Apple";

//NaN is a JavaScript reserved word indicating that a number is not a legal number.

//Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
console.log(xv)


//You can use the global JavaScript function isNaN() to find out if a value is a not a number:
let xx = 100 / "Apple";
isNaN(xx);
console.log(xx)


//Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
//

let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
  console.log(myNumber)
}




//Division by 0 (zero) also generates Infinity:




