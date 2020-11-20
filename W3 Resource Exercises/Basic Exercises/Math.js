/*
Find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
*/

const triangle = (a, b, c) => {
    // Use Heron's formula.
    // First calculate half of the triangle's perimeter
    let s = (a+b+c)/2;
    //calculate area
    let area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
    return area.toFixed(2);
}

//console.log(triangle(5,6,7));


//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
*/

const multiple = (num) => {
 if (num % 3 === 0 || num % 7 === 0){
    return true;
 } else {
     return false;
 }
}

// console.log(multiple(20));
// console.log(multiple(14));
// console.log(multiple(10));
// console.log(multiple(11));



//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to check whether two given integer values are in the 
range 50..99 (inclusive). Return true if either of them are in the said range.
*/

function numCheck (int1, int2) {
    if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99) ) {
        return true;
    } else {
        return false;
    }
}

// console.log(numCheck(12, 101));
// console.log(numCheck(52, 80));
// console.log(numCheck(15, 99));


//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to find the largest of three given integers.
*/

const largestInt = (int1, int2, int3) => {
    if (int1 > int2 && int1 > int3){
        return int1;
    } else if (int2 > int1 && int2 > int3) {
        return int2;
    } else if (int3 > int1 && int3 > int2){
        return int3;
    }
}

// console.log(largestInt(-200, 40 ,60));


//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to find a value which is nearest to 100 from two different given integer values. 
*/

const nearest = (num1, num2) => {
    return (100 - num1 > 100 - num2) ? num2 : num1;
}

// console.log(nearest(10,20))


//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive
*/

const rangeOf = (num1, num2) => {
    if (num1 >= 40 && num1 <= 60 || num1 >= 70 && num1 <= 100){
        return true;
    } else if (num2 >= 40 && num2 <= 60 || num2 >= 70 && num2 <= 100){
        return true;
    } else {
        return false;
    }
}

// console.log(rangeOf(70, 22))


//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to check whether the last digit of the 3 given positive integers is same.
*/

const lastDigit = (int1, int2, int3) => {
    if (int1 > 0 || int2 > 0 || int3 > 0){ 
        return ((int1 % 10 === int2 % 10) && (int2 % 10 === int3 % 10) && (int3 % 10 === int1 % 10))
    } else {
        return `Enter a positive number`;
    }
}

// console.log(lastDigit(10, 20, 30))


//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to check from two given integers whether one of them is 8 
or their sum or difference is 8
*/

const sumCheck = (int1, int2) => {
    sum = int1 + int2;
    diff = int1 - int2;
    return (sum === 8 || int1 === 8 || int2 === 8 || diff === 8)
}

console.log(sumCheck(3, 6));


