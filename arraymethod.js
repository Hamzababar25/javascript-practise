// brackets se bahir string normal ki form ma output dikhata ha
const cars=["efavd","asfaf","afaf","awdd"]
console.log(cars.toString());

// ye blkul tostring ki trah kaam krta ha bs frk ye ha k ye commas ki bjae jo ap jis trah bolte ho waise seperate krta ha 
console.log(cars.join("*"))


// pop jo ha wo valuse remove krta ha arraay se last wali ar wohi show krwata ha remove kr l k ye wali remove ki ha 

let pop=cars.pop()
console.log(pop)

//The push() method adds a new element to an array (at the end):
console.log(cars.push("jjgjg"))
console.log(cars)






//The shift() method removes the first array element and "shifts" all other elements to a lower index.

let cc=cars.shift()
console.log(cc);
console.log(cars)



//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

let ccc=cars.unshift("jnndd")
console.log(cc);
console.log(cars.unshift())


//The concat() method creates a new array by merging (concatenating) existing arrays:
const ccd=["as","dca","asfw","fcqf"]
const tt=["ff","ece"]
console.log(ccd.concat(tt))


// we can concatenate as any array as we want
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren)



//The first parameter (2) defines the position where new elements should be added (spliced in).

//The second parameter (0) defines how many elements should be removed.

//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

const friu=["dva","svd","dvdv"]
console.log(friu.splice(2,0,"sdv","afc"))

//The splice() method returns an array with the deleted items:

const friutt=["dva","svd","dvdv"]
//console.log(friutt.splice(2,2,"sdv","afc"))


console.log(friutt.splice(0,1));
console.log(friutt);

//The slice() method creates a new array.

//The slice() method does not remove any elements from the source array.
// slice bilkul aik new array bnata ha us element se jis ka hamne ellement ka index diya ha ar ye new alg array ha jo pechli array h jisko slice nhi kiya wp aise ki aisi hi rhe gi
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus);




//The slice() method can take two arguments like slice(1, 3).

//The method then selects elements from the start argument, and up to (but not including) the end argument.

const fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citruss = fruits.slice(1, 3);
console.log(citruss)
console.log(fruitss.toString())



