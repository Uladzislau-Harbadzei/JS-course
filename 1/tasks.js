/**
 * Write an implementation of the 'truncateString' function
 * that would calculate the length of a string.
 * If the line is longer than 10 characters,
 * it would truncate it and add "..." to the end of the line.
 *
 * @param str
 * @returns {str}
 */

export function truncateString(str) {
  const length = 10;
  if (str.length >= length) {
  return str.slice(0, length - 3) + '...';
  } else {
  return str;
  }
  // your implementation here
}

let inputString = 'Hello World!';
let truncatedString = truncateString(inputString);
console.log(truncatedString);

/**
 * Write an implementation of the 'selectUniqueValues' function
 * that would return an array of unique values.
 *
 * @param arr
 * @returns {Array}
 */

export function selectUniqueValues(arr) {
  return Array.from(new Set(arr));
  // your implementation here
}

/**
 * Write an implementation of the 'findSmallestAndBiggest' function
 * that would return an array of 2 numbers - the smallest and largest values.
 *
 * @param arr
 * @returns {Array}
 */

export function findSmallestAndBiggest(arr) {
  if (arr.length === 0) {
    return [undefined, undefined];
}

let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
    if (arr[i] > max) {
        max = arr[i];
    }
}

return  [min, max];
  // your implementation here
}

/**
 * Write an implementation of the 'isPalindrome' function
 * that will check if a string is a palindrome
 * (a word, phrase, or sequence that reads the same backward as forward).
 *
 * @param str
 * @returns {boolean}
 */
export function isPalindrome(str) {
  let pal = str.toLowerCase().replace(/[\W_]/g, "");
  return pal === pal.split("").reverse().join("");
  // your implementation here
}
