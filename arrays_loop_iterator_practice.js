/*
Write a function factorial() that takes a number as an argument and returns the 
factorial of the number.
Assume only positive numbers given as an argument.
*/

const factorial = (num) => {
  if (num < 0) {
    console.log("Please enter a positive number");
  } else {
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
};



// console.log(factorial(10));

// ----------------------------------------------------------------------------------
/*
Write a function subLength() that takes 2 parameters, a string and a single character. 
The function should search the string for 2 occurrences of the character and 
return the length between them including the 2 characters. If there are < 2 
or more than 2 occurrences of the character the function should return 0.
*/

function subLength(str, letter) {
  let letterCount = 0;
  let indexOfFirst = str.indexOf(letter);
  let indexOfLast = str.indexOf(letter, indexOfFirst + 1);

  // calcualte number of characters in each word
  for (let p = 0; p < str.length; p++) {
    if (str.charAt(p) == letter) {
      letterCount += 1;
    }
  }

  // If there are < 2 or more than 2 occurrences of the character
  // the function should return 0.
  if (letterCount <= 1 || letterCount >= 3) {
    return 0;
  } else {
    return indexOfLast - indexOfFirst + 1;
  }
}

// console.log(subLength("Saturday", "a")); // returns 6
// console.log(subLength("summer", "m")); // returns 2
// console.log(subLength("digitize", "i")); // returns 0
// console.log(subLength("cheesecake", "k")); // returns 0

// ----------------------------------------------------------------------------------

/*
Write a function groceries() that takes an array of object literals of grocery items. 
The function should return a string with each item separated by a comma except the 
last two items should be separated by the word 'and'. Make sure spaces (' ') are 
inserted where they are appropriate.
*/

const groceries = (arr) => {
  // find the length of the array of objects
  len = Object.keys(arr).length;
  if (len <= 2) {
    console.log(Array.prototype.map.call(arr, (s) => s.item).join(" and "));
  } else {
    // arr1 = arr;
    // end = arr.pop();
    // console.log(end);
    // arr1 = Array.prototype.map.call(arr1, (s) => s.item).join(", ");
    //console.log(arr1);
  }
};

groceries([
  { item: "Carrots" },
  { item: "Hummus" },
  { item: "Pesto" },
  { item: "Rigatoni" },
]);
// returns 'Carrots, Hummus, Pesto and Rigatoni'
groceries([{ item: "Bread" }, { item: "Butter" }]);
// returns 'Bread and Butter'
groceries([{ item: "Cheese Balls" }]);
// returns 'Cheese Balls
