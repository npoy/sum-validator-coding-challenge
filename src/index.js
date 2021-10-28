/*
Exercise:
Given a list of numbers and a singular number,
we need to create a function that checks if that list contains 2 numbers that add up to that singular number.
*/

function sumValidator(list, number) {
  /*
    Place your code here
  */
}

const testList = [1, 7, 4, 2, 8];

console.log("Test 1: ", sumValidator(testList, 10) ? "Pass" : "Fail");
console.log("Test 2: ", !sumValidator(testList, 13) ? "Pass" : "Fail");
console.log("Test 3: ", !sumValidator(testList, 4) ? "Pass" : "Fail");
