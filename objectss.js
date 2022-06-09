const a=
[
    {name:"ali",age:20},
    {name:"shah",age:2031},
    {name:"arslan",age:2032},
    {name:"ajmi",age:2033},
    {name:"shah",age:2034},

]

const d=a.filter(fun)
function fun(value,index,array){

return Math.max(value.age)


}
console.log(d)




