// question number 1 
//Ans:   a is an array which contains object 


//........... question 2........//

//Ans

const a=
[
    {name:"ali",age:20},
    {name:"shah",age:19},
    {name:"arslan",age:23},
    {name:"ajmi",age:2033},
    {name:"shah",age:2034},

]

const b=a.filter(funct)
function funct(value,index,array)
{
       //if(value.name=="shah")
       return value.name=="shah"
}
//console.log(b)

//........ question 3.............//
const c=a.map(fun)
function fun(value,index,array)
{

    return Math.max(value.age)
}
//console.log(c.sort(function(a,b){return a-b}));
//console.log(Math.max.apply(null,c));

///////////////......... question 4...............//////////
 


 var h=a.sort(function(b,c){

    if(b.name<c.name)
     return -1
    else if(b.name>c.name)
    return 1

    return 0
 } )
//console.log(h)


var n=a.sort(function(b,c){

    if(b.name>c.name)
     return -1
    else if(b.name<c.name)
    return 1

    return 0
 } )
console.log(n)


////....................question 5..................///

let p={name:"hamza",age:21}

a.push(p)
console.log(a)



////................. question 6...............//

a[2].age=24
console.log(a)



////.................question 7.....................//

a.splice(0,2)
console.log(a)




