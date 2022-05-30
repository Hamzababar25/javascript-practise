var name;
var age;
name="Ali";
age=10;
console.log("name is:"+ name)
console.log("age is:"+ age)


////////////////////////////////////////////////////////////////////////
/// program 2

age=age+10;
console.log("incremented age is:"+age)

////////////////////////////////////////////////////////////////////////
///////program 3////////////////////////////////////

function marks(a,b,c,d,e,q)
{
    var z;
   z= (a+b+c+d+e+q)/6
      return z;
}

var n=45,m=50,v=23,z=54,s=54,k=54;
var avg;
avg=marks(n,m,v,z,s,k)
console.log("avg of five numbers is:"+avg)

//////////////////////////////////////////////////////////////////////////
//////////// program 4

function operations(t,y)
{
var send;
   return send=t+y;
  
}
function minus(t,y)
{
    var send;
   return send=t-y;
  
}
function mul(t,y)
{
var send;
   return send=t*y;
  
}
function div(t,y)
{
var send;
   return send=t/y;
  
}


var o=20,d=30

var ope=operations(o,d)
console.log("operated value:"+ope);
var ope=minus(o,d)
console.log("operated value:"+ope);
var ope=mul(o,d)
console.log("operated value:"+ope);
var ope=div(o,d)
console.log("operated value:"+ope);
