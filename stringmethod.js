//The length property returns the length of a string:
let x="abcdefgh";
console.log(x.length)

/*Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)*/


/*avaScript String slice()
slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).*/


let v= "pakistan,karachi,lahore"
let b= v.slice(7,10)
console.log(b)

//If you omit the second parameter, the method will slice out the rest of the string:
let w= "pakistan,karachi,lahore"
let m= w.slice(7)
console.log(m)

/*avaScript String substring()
substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().*/
let a= "pakistan,karachi,lahore"
let c= v.substring(7)
console.log(c)


/*JavaScript String substr()
substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.*/
let p= "pakistan,karachi,lahore"
let l= v.substr(7,9)
console.log(l)
//ye btata ha 2nd ma k kitne numbers slice honge mtlb kahan tk ar uper wale btate hain k ais value se le  ais tk




//Replacing String Content
//The replace() method replaces a specified value with another value in a string:
var la="welcome to microsoft"
var ll= la.replace("microsoft","bruhh")
console.log(ll)

//By default, the replace() method replaces only the first match:  mtlb k sirf aik pejla lfz

//To replace case insensitive, use a regular expression with an /i flag (insensitive):
var lal="welcome to microsoft!"
var lil=lal.replace(/microsoft/i,"bruhh")

//To replace all matches, use a regular expression with a /g flag (global match): 
// mtlb k agr aik lfz bhot bar sentence ma likha ha to us ko sb ko replace krne k liye

var lalo="welcome to microsoft microsoft "
var llb=lalo.replace(/microsoft/g,"broo")
console.log(llb)


///concat() joins two or more strings:
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

//The trim() method removes whitespace from both sides of a string:

let text4 = "      Hello World!      ";
let text5 = text4.trim();
console.log(text5)




//The padStart() method pads a string with another string:

let text = "5";
let padded = text.padStart(7," ");
console.log(padded)

//The padEnd() method pads a string with another string:
let text55 = "5";
let paddedd = text.padEnd(4,"x");
console.log(paddedd)

/*The padEnd() method is a string method.

To pad a number, convert the number to a string first.

See the example below.*/

let numb = 5;
let text88 = numb.toString();
let paddeded = text.padEnd(4,"0");



/*JavaScript String charAt()
The charAt() method returns the character at a specified index (position) in a string:*/

let text99 = "HELLO WORLD";
let char = text99.charAt(2);
console.log(char)


/*The charCodeAt() method returns the unicode of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).*/
let text899 = "HELLO WORLD";
let char11 = text899.charCodeAt(7);
console.log(char11)