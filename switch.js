let x=6
let y=5
console.log((x>2&&y<10))

console.log(!(x>6&&y<5))


let day="friday"
switch(day)
{
    case "sunday":
    console.log("day is sunday");
    break;

    case "friday":
        console.log("day is friday")
              break;

              default:
                  break;
        

}



//The getDay() method returns the weekday as a number between 0 and 6.

//If today is neither Saturday (6) nor Sunday (0), write a default message:

switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}













//Sometimes you will want different switch cases to use the same code.

////In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:

Example
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}

Strict Comparison
Switch cases use strict comparison (===).

//The values must be of the same type to match.

//A strict comparison can only be true if the operands are of the same type.

//In this example there will be no match for x:

//Example
let d = "0";
switch (d) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}