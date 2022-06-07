const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return a - b}));



//
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits)


/*
The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.*/


//Sorting an Array in Random Order
//Example
const pointss = [40, 100, 1, 5, 25, 10];
console.log(pointss.sort(function(a, b){return 0.5 - Math.random()}));



//..............MAX and MIN value............/////////////
const pointsss = [40, 100, 1, 5, 25, 10];
console.log(Math.max.apply(null,pointsss))

console.log(Math.min.apply(null,pointsss))

console.log(array(pointsss))


function array (arr)
{
    var max=arr[0]
   for(var i=0;i<=arr.length;i++)
   {
   if(arr[i]>max)
   {
       max=arr[i]
   }
   
}
return(max)
}


//..............Sorting Object Arrays
//JavaScript arrays often contain objects:


const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  console.log(cars.sort(function(a,b){return a.year-b.year}))


  



