/* 
  O(1) -> Constant
  O(N) -> Linear
  O(N^2) -> Quadratic
  O(log N) -> Logarithmic
  O(N log N) -> Linearithmic
  O(c^N) -> Exponential
  O(N!) -> Factorial
*/

// O(1) — Constant Complexity

// function getLastItem(items) {
//   console.log(items[items.length - 1]); // O(1)
// }

// getLastItem([10, 2, 20, 11000, 32, 123, 241312, 32142, 32131]);

// function checkNumberType(num) {
//   if (num % 2 == 0) return "Even";
//   else return "Odd";
// }

// console.log(checkNumberType(232421310));
// console.log(checkNumberType(423123));

// O(N) — Linear Complexity

// function displayArrayElements(array) {
//   for (let i = 0; i < array.length; i++) { // n+1
//     console.log(array[i]); // n
//   }
// }

// let numArray = [
//   21, 23, 12321, 312, 312, 312, 3, 14, 12, 4, 32, 53, 5, 234, 1, 32, 13, 12, 41,
//   321, 4, 124,
// ];
// displayArrayElements(numArray);

// function findIndex(arr, num) {
//   for (let i = 0; i < arr.length; i++) { // n+1
//     if (arr[i] == num) { // n
//       console.log(`You searched ${value} and it's index is:${index}`); // n
//       return index; //n
//     }
//   }
// }
// let numberArray = [
//   321, 12, 312, 3, 123, 4, 12, 43, 34, 64, 6453, 64, 412, 31, 2132, 13, 21, 421,
//   5, 5325, 142,
// ];
// findIndex(numberArray, 13);

// O(N²) — Quadratic Complexity Time Algorithm

// function QuadraticCalculation(arr) {
// let arr = [3, 1, 2, 5, 6, 71];
// let count = 0;
// 1;
// for (let i = 0; i < arr.length; i++) {
//   // n
//   for (let j = 0; j < arr.length; j++) {
//     // n^2
//     console.log(`i: ${i} and j:${j}`); // n^2
//     count++; // n^2
//   }
// }
// console.log(arr.length); //6
// console.log(count); //36
// }

// QuadraticCalculation([3, 1, 2, 5, 6, 71]);
