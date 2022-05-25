//if we want to have a variable that is constant and whose value will not change will be const//
/*Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope.*/
/* Cannot be Reassigned
A const variable cannot be reassigned:

Example
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error*/

const x=15;
const y=10;
const z=x+y;
y=11;
console.log(z,y);//error
