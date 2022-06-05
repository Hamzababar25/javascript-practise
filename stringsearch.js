let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate"));


// agr do bar aik lfz likh ha sentence ma to wo last wale ka btae ga
let strr = "Please locate where 'locate' occurs!";
console.log(strr.lastIndexOf("locate"));

// 15 k bad se dhondna shuru krega 
let strrrr = "Please locate where 'locate' occurs!";
console.log(strrrr.indexOf("locate", 15));


//ye 15 se peeche dhonde ga lastindexof 
let stre = "Please locate where 'locate' occurs!";
console.log(stre.lastIndexOf("locate", 15));



//The search() method searches a string for a specified value and returns the position of the match:
let strs = "Please locate where 'locate' occurs!";
console.log(strs.search("locate"));


//search ar indexof ma frk ye ha k indexof jo ha wo do parameters ma values accept kr leta ha jb k search sirf search krta ha







//text.natch btata ha k ye lfz kitni bar ha ain sentence ma ar usko array ma show krwata ha k kitni bar ha 
let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match(/ain/g));



// gi case sensitive ha mtlb upper case ar lowercase dono ma tata ha jb k uper wala g sirf jis ma enter kiya ha usme btata ha
let text1 = "The rain in SPAIN stays mainly in the plain";
console.log(text1.match(/ain/gi));


//true result deta ha agr majood ha to
let text2 = "Hello world, welcome to the universe.";
console.log(text2.includes("world"));

//12 k bad dhondna shuru  krega
let text4 = "Hello world, welcome to the universe.";
console.log(text4.includes("world", 12));


//agr string jis value ki condition di ha us se start hoti ha to true show krwe ga
let text5 = "Hello world, welcome to the universe.";

console.log(text5.startsWith("Hello"));





//6 k bd search kr k btae ga k ais se start krta k nhi jaise 6 index k bad sb se pehli value world hi ha to true ha
let text7 = "Hello world, welcome to the universe.";

text7.startsWith("world", 6) 




//agr string ais value se end kr rhi to true ans ae ga
let text9 = "John Doe";
console.log(text9.endsWith("Doe"));