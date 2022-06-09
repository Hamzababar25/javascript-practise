/*Method	Description
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)*/

const d = new Date();
d.setFullYear(2020).toLocaleString();
console.log(d)


const c = new Date();
c.setMonth(2).toLocaleString();
console.log(c)



const cw = new Date();
cw.setDate(2).toLocaleString();
console.log(cw)



const cwc = new Date();
cwc.setDate(cwc.getDate() + 50).toLocaleString();
console.log(cwc)




const da = new Date();
da.setHours(24).toLocaleString();

console.log(da)



const dm = new Date();
d.setMinutes(30);






const ds = new Date();
d.setSeconds(30);








//Compare Dates
//Dates can easily be compared.

//The following example compares today's date with January 14, 2100:

//Example
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14).toLocaleString;

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
console.log(text)




