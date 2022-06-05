let text = `He's often called "Johnny"`;

console.log(text);
// ain k andr double use kr skte


//Multiline Strings
//Template literals allows multiline strings:

let text1 =
`The quick
brown fox
jumps over
the lazy dog`;

console.log(text1);

//Variable Substitutions
//Template literals allow variables in strings:
let firstName = "John";
let lastName = "Doe";

let text2 = `Welcome ${firstName}, ${lastName}!`
console.log(text2)




//Expression Substitution
//Template literals allow expressions in strings:

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total)