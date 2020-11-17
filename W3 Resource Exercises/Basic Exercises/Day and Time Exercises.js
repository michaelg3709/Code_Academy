/*
Write a JavaScript program to display the current day and time in the following format.
    Sample Output : Today is : Tuesday.
    Current time is : 10 PM : 30 : 38
*/


let today = new Date();
const day = today.getDay();
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log(`Today is: ${daylist[day]}.`);

let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
let prepand = (hour >= 12)? " PM ":" AM ";

hour = (hour >= 12)? hour - 12: hour;

console.log(`Current Time: ${hour}${prepand} : ${minute} : ${second}`);

//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to get the current date.
    Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

let dd =today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();

if (dd < 10){
    dd = '0' + dd;
}

if (mm < 10){
    mm = '0' + mm;
}

today = 'Current date is: ' + mm + '-' + dd + '-' + yyyy;
console.log(today);

//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
*/

const leapYear = (year) => {
    return year % 100 === 0? year % 400 === 0 : year % 4 === 0;
}

console.log(leapYear(2016));