//A JavaScript function is a block of code designed to perform a particular task.

//A JavaScript function is executed when "something" invokes it (calls it).

function n( x, z){

    return x*z
}

var e=n(4,5)
console.log(e)



function farenheit(n)
{
    return (5/9)*(n-32)
}

//var z
//z=n(10)
console.log(farenheit(10))










//Variables declared within a JavaScript function, become LOCAL to the function.

//Local variables can only be accessed from within the function.

function cars(n)
{
    var carname="audo"
    return carname;
}
var b=cars()
console.log(b);