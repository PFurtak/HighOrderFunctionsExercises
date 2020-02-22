// 1. Write a JavaScript function to check whether an `input` is an array or not.
arrayCheck = function(input) {
  if (toString.call(input) === '[object Array]') return true;
  return false;
};
console.log(arrayCheck('Pat rules'));
console.log(arrayCheck([1, 2, 3, 4, 5]));

// 2. Write a JavaScript function to get the first 'n' elements of an array.
const arrayOne = [1, 1, 2, 3, 4, 4, 5, 6, 7, 7];
function firstOf(a, n) {
  firstElements = arrayOne.slice(0, n);
  return firstElements;
}
console.log(firstOf(arrayOne, 4));

// 3. Write a simple JavaScript program to join all elements of the following array into a string.
function arrayConvert() {
  const arrayTwo = [1, 2, 3, 4, 5];
  const converted = arrayTwo.toString();
  return converted;
}
console.log(arrayConvert());

// 4. Write a JavaScript program which accept a number as input and insert dashes (-) between each number.
dashInsert = function(num) {
  const newString = num.toString();
  const newArray = newString.split('');
  const dashed = newArray.join('-');
  return dashed;
};
console.log(dashInsert(897654));

// 5. Write a JavaScript program to sort the items of an array.
arraySorted = function(input) {
  const NewStringTwo = input.toString();
  const NewArrayTwo = NewStringTwo.split('');
  const sorted = NewArrayTwo.sort();
  return sorted;
};
console.log(arraySorted(78965));

// 6. Write a JavaScript program to find the most frequent item of an array.
// ```
// Sample array: const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// ```
//Solution found on medium.com
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
(function(array) {
  let result, // This is the value we will return
    best = -1, // Initialize the comparison for greedy
    lookup = {}; // Hashmap for essentially constant lookup
  // Loop to go through array and count elements
  for (let i = 0; i < array.length; i++) {
    // could replace block with `x[a[i]] = (x[a[i]] + 1)|0`
    //but far less readable
    if (lookup[array[i]] == undefined) {
      lookup[array[i]] = 0;
    }
    lookup[array[i]]++; // Increment count
    if (lookup[array[i]] > best) {
      // Greedy for best element
      best = lookup[array[i]];
      result = array[i];
    }
  }
  //will return most frequent item in array cats
  return result;
})(arr1);

// 7. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input `The Quick Brown Fox` the output should be `tHE qUICK bROWN fOX`.
const ogString = 'The QuickBrown Fox.';
let swapCase = function(letters) {
  let newLetters = '';
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i].toLowerCase()) {
      newLetters += letters[i].toUpperCase();
    } else {
      newLetters += letters[i].toLowerCase();
    }
  }
  console.log(newLetters);
  return newLetters;
};
let swappedText = swapCase(ogString);

// 8. Write a JavaScript program which prints the elements of the following array. Note : Use nested for loops.
// ```
const arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]
];
// ```
//Using forEach()
arr.forEach(dataSet => console.log(dataSet));

// 9. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

let breeds = [
  'Doberman',
  'Boxer',
  'Labrador',
  'Poodle',
  'Doberman',
  'Boxer',
  'Poodle'
];

const deduped = new Set(breeds);
const newArray = [...deduped];
console.log(deduped);

// 10.  There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
// ```
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// ```

// 11. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// ```
// const arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]
// ```

// 12. Write a JavaScript function to merge two arrays and removes all duplicates elements.
// ```
// const arr1 = [1, 2, 3];
// const arr2 = [2, 30, 1];
// ```

// ## use map() to solve these.
// 13. Make an array of numbers that are doubles of the first array

// 14. Take an array of numbers and make them strings.

// 15. Capitalize each of an array of names.

// ## use filter() to solve this.

// 16. Find all the strings in a array thats less than 5 letters
// ```
// const arr = ["Sometimes", "I", "give", "myself", "the", "creeps", "Sometimes", "my", "mind","plays", "tricks", "on", "me",
// "It", "all", "keeps", "adding", "up",
// "I", "think", "I'm", "cracking", "up"
// "Am", "I", "just", "paranoid?",]
// ```
