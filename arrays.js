//      Array of objects//


// this is only one index
const arr={firstname:"john hamza humayun "}
   


console.log(arr.firstname)

//ye ham zyada indexes p aise krte hain
const array=[

    {firstname:"ssd j jksjc"},
    {firstname:"davav"}
]
console.log(array[1].firstname)





//............. aray propeties and methods      length and sort//

const numbers=[1,3,6,9,7,3,2];
numbers.sort()
console.log(numbers);
console.log(numbers.length)

//The length property is always one more than the highest array index.

console.log(numbers.length-1)


//...........loops with arrayys.....//
const cars2=["volvo" ,"toyota","saab","camry","aurion"]
let clen=cars2.length;
for(let i=0;i<clen;i++)
{
   // console.log(cars2[i])
}






//...........Adding Array Elements.........//

cars2.push("suzuki")
console.log(cars2)
cars2.forEach(element => {
    console.log(element)
});



//Adding elements with high indexes can create undefined "holes" in an array:

const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
console.log(fruits)








//we can not use named indexes in array only numbered indexes 
const carsss=[]
    carsss["srggs"]="john"
    console.log(carsss[0])
    //this will be undefined
    console.log(carsss.length)
    //will give 0 length



    const fruitss = ["Banana", "Orange", "Apple"];
let type = typeof fruits;
//console.log(fruitss)

console.log(Array.isArray(fruitss));
console.log
// ye btata ha k array ha k nhi 



