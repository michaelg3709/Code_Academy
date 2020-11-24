//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
*/

function sumArray (arr) {
    return arr[0] + arr[1] + arr[2];
}

// console.log(sumArray([10, 32, 20]));  
// console.log(sumArray([5, 7, 9])); 
// console.log(sumArray([0, 8, -11]));


//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to rotate the elements left of a given array of integers of length 3.
*/

const rotateArr = (arr) => {
    return [arr[1], arr[2], arr[0]];
}

// console.log(rotateArr([3, 4, 5]));  
// console.log(rotateArr([0, -1, 2]));  
// console.log(rotateArr([7, 6, 5]))


//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. 
The array length must be greater or equal to 1.
*/

const oneArr = (arr) => {
    if (arr.length < 1) {
        return 'Array too short';
    } 
    if (arr[0] === 1 || arr[arr.length-1] === 1) {
        return true;
    } else {
        return false;
    }
}

// console.log(oneArr([1, 3, 5]));
// console.log(oneArr([3, 5, 1]));
// console.log(oneArr([2, 4, 6]));


//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to reverse the elements of a given array of integers length 3.
*/

const reverseArrayThree = (arr) => {
    return arr.map((elem, index, arr) => arr[(arr.length-1) - index]);
}

console.log(reverseArrayThree([5, 4, 3])); 
console.log(reverseArrayThree([1, 0, -1]));  
console.log(reverseArrayThree([2, 3, 1]));