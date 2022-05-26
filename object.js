//Objects are variables too. But objects can contain many values.

//This code assigns many values (Fiat, 500, white) to a variable named car:

const car = {type:"Fiat", model:"500", color:"white"};
console.log(car);
console.log(car.type);
/*Objects can also have methods.

Methods are actions that can be performed on objects.

Methods are stored in properties as function definitions.*/
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullname : function()
    {
return this.firstName+" "+this.lastName;
    }
}
console.log(person.fullname())
//If you access a method without the () parentheses, it will return the function definition: