const d=new Date()

const c = new Date();
c.toUTCString();
console.log(c);

d.toDateString();
console.log(d)


//JavaScript ISO Dates
//ISO 8601 is the international standard for the representation of dates and times.

//The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:

const da = new Date("2015-03-25");

//ISO dates can be written without specifying the day (YYYY-MM):




//ISO Dates (Date-Time)
//ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
const dat = new Date("2015-03-25:00:00Z");
console.log(dat)

//t is fo time format 12 ya 24



//If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:
const date = new Date("2015-03-25T12:00:00-06:30");
console.log(date)




//JavaScript Short Dates.
//Short dates are written with an "MM/DD/YYYY" syntax like this:
const dd = new Date("03/25/2015");
console.log(dd.toISOString())