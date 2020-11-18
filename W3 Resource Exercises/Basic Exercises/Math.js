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
Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
*/