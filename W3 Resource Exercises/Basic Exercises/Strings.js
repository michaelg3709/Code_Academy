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

// console.log(scriptStr('JavaScript'));
// console.log(scriptStr('CoffeeScript'))


//----------------------------------------------------------------------------------------------
/*
Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.
*/

const checkChar = (str, char) => {
    for (i = 1; i < 4; i++){
        if (str.charAt(i) === char){
            return true;
        } else {
            return false;
        }
    }
}

// console.log(checkChar('Python', 'y'))
// console.log(checkChar("JavaScript", "a"));
// console.log(checkChar("Console", "o"));
// console.log(checkChar("Console", "e"));
// console.log(checkChar("JavaScript", "S"));


//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. 
If the string length is less than 3 convert all the characters in upper case.
*/

function firstThree (str){
    newStr = str.substring(0,3);
    if (str.length <= 3) {
        return newStr.toUpperCase();
    } else {
        return newStr
    }
}

// console.log(firstThree('alp'));
// console.log(firstThree('check'));


//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to reverse a given string
*/

const reverse_String = (str) => {
    return str.split("").reverse().join("");
}

// console.log(reverse_String('hello'))


//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to replace every character in a given string 
with the character following it in the alphabet. 
*/

const charNextLetter = (str) => {
    let letter = str.split("");
    for (let i = 0; i < letter.length; i++){
        //Caesar cipher
        switch(letter[i]){
            case ' ':
            break;
            case 'z':
                letter[i] = 'a';
            break;
            case 'Z':
                letter[i] = 'A';
            break;
            default:
                letter[i] = String.fromCharCode(1 + letter[i].charCodeAt(0));
        }
    }
    return letter.join("");

}

//console.log(charNextLetter('hello'));



//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to extract the first half of a string of even length.
*/

const firstHalf = (str) => {
    if (str.length % 2 === 0) {
        return halfStr = str.substring(0, str.length/2);
    } else {
        return "Enter a string of even length"
    }
}

//console.log(firstHalf('hello!'));



//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to create a new string without the first and last character of a given string.
*/

const removeFirstLast = (str) => {
    return str.substring(1, str.length-1);
}

//console.log(removeFirstLast('hello'));



//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to concatenate two strings except their first character.
*/

const concatTwoStr = (str1, str2) => {
    let newStr1 = str1.substring(1, str1.length);
    let newStr2= str2.substring(1, str2.length)
    return newStr1 + newStr2;
}

//console.log(concatTwoStr('hello', 'dave'));


//----------------------------------------------------------------------------------------------
/*
Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

function cityName (city) {
    if (city.length >= 3 && ((city.substring(0, 3) === 'New') || (city.substring(0, 3) === 'Los'))){
        return city;
    } else {
        return '-';
    }
}

// console.log(cityName('New York'));
// console.log(cityName('Los Angeles'));
// console.log(cityName('Pitsburgh'));