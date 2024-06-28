/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  str = str.toLowerCase();
  str = str.replaceAll(" ", '');
  str = str.replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');

  console.log(str)

  let length = str.length;
  let start =0;
  let end = length -1;

  while(start < end){
    if(str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
