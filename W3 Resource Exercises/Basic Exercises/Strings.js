//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to remove a character at a specified position of a string and return the new string.
*/

function remove_character (str, char_pos) {
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2);
}

// console.log(remove_character("Python",0));
// console.log(remove_character("Python",3));
// console.log(remove_character("Python",5));


//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to create a new string from a given string changing the position of 
first and last characters. The string length must be greater than or equal to 1
*/

function first_last(str) {
    if (str.length <= 1){
        return str; 
    } 
    let start = str.charAt(0);
    let end = str.charAt(str.length - 1)
    let mid_char = str.substring(1, str.length - 1);
    return end + mid_char + start;
    
}

// console.log(first_last('a'));
// console.log(first_last('ab'));
// console.log(first_last('abc'));


//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to create a new string from a given string with the first 
character of the given string added at the front and back
*/

const front_back = (str) => {
    let start = str.charAt(0);
    return start + str + start;
}

// console.log(front_back('a'));
// console.log(front_back('ab'));
// console.log(front_back('abc'));


//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to create a new string from a given string taking the last 3 
characters added at both the front and back.  The string length must be 3 or more. 
*/

const threeMore = (str) => {
    if (str.length >= 3){
        let lastThree = str.substring(str.length-3, str.length)
        return lastThree + str + lastThree
    } else {
        return false;
    }
}

//console.log(threeMore('dave'));



//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to check whether a string starts with 'Java' and false otherwise
*/

const javaCheck = (str) => {
    if (str.length < 4) {
        return false;
    }
        frontStr = str.substring(0, 4).toLowerCase();
        if (frontStr === 'java'){
            return true;
        } else {
            return false;
        }
}

// console.log(javaCheck("JavaScript"));
// console.log(javaCheck("Java"));
// console.log(javaCheck("Python"));



//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position 
in a given string. If "Script" is in the string, return the string without "Script" 
otherwise return the original one.
*/

const scriptStr = (str) => {
    if (str.length < 6) {
        return str;
    }
    let result_str = str;
    
    // does Script appear at index 4 (in first 10 letters)
    if (str.substring(10, 4) == 'Script') {
        // return string without 'Script'
        result_str = str.substring(0, 4) + str.substring(10, str.length);
      }
    return result_str;
}

console.log(scriptStr('JavaScript'));
console.log(scriptStr('CoffeeScript'))