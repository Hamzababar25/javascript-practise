
// ais ma ham ne aik array bnae haa na to us ko foreach k function ma dala ha ar for each ma bhi aik function call ki ha ar us function jis mo all ki ha us me ham ne brackets ma kafi kuch le skta hain mslan index values ye ar wo



const numbers=[1,2,3,4,5]
numbers.forEach(funct)
function funct(value,index,array)
{

  //console.log(value+'\n')
  //console.log(index+'\n')
  //console.log(array+'\n')


}




//The map() method creates a new array by performing a function on each array element.

//The map() method does not execute the function for array elements without values.

//The map() method does not change the original array.

const bruh=[1,3,6,8,10]
const boo=bruh.map(fun)
console.log(boo)

function fun(value)
{
    return(value*2)
}
// map hm tb lgate hain jb koi function perform krna ho



// foreach sirf dekhne k liye .... map function perform krne k liye ......filter compariosion krne k liye

const numm=[18,19,16,20,17]
const num2=numm.filter(func)
console.log(num2)
function func(value)
{
    return (value>18);
}



//reduce ham ais liye use krte agr ham ne one value ans lena ho jaise ham 5 values ka sum nikal k return krwana chahe to ais k liye ham ye use krte hain reduce jis ka mtlb hi km krna ha 

const num3=[33,66,77,44,88,99]
const num4=num3.reduce(funn,100)
var total=0
console.log(num4)

function funn(total,value)
{
    return total+value
}
// it can acept an initial vlue as well jaise mene uer function k sath 100 likha ha 



// every jo ha woo har value ko check krta ha for a cndition ar agr aik bhi value condition pass na kre to false ma jawab deta ha wrna true

const numbersf = [45, 4, 9, 16, 25];
let allOver18 = numbersf.every(myFunction);
console.log(allOver18)

function myFunction(value, index, array) {
  return value > 18;
}


// some btata ha k thore bhot bhi condition follow krte k nhi


const numbersff = [45, 4, 9, 16, 9];
let smme = numbersff.some(myFunction);
console.log(smme)

function myFunction(value, index, array) {
  return value > 18;
}






//The indexOf() method searches an array for an element value and returns its position.
//  plus 1 ais liye likhte hain kuin k pehla index 00 hota ha pr haamne usko fiest dikhana ha 
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple"+1) ;
console.log(position)


///The find() method returns the value of the first array element that passes a test function.

//This example finds (returns the value of) the first element that is larger than 18:

const numbersn = [4, 9, 16, 25, 29];
let first = numbersn.find(myFunction);
console.log(first)

function myFunction(value, index, array) {
  return value > 18;

}



//The findIndex() method returns the index of the first array element that passes a test function.

const numbersnm = [4, 9, 16, 25, 29];
let firstt = numbersnm.findIndex(myFunctionn);
console.log(firstt)

function myFunctionn(value, index, array) {
  return value > 18;

}