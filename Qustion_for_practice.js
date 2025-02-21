// 1. Write a JavaScript function to calculate the sum of two numbers.

// function myfunction() {
//   let x, y, z;
//   x = 10;
//   y = 20;
//   console.log((z = x + y));
// }
// myfunction();

// function myfunction(a, b) {
//   return a + b;
// }
// myfunction();

// 2. Write a JavaScript program to find the maximum number in an array.
// let arr = [2, 10, 50, 60, 3, 6, 100];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// 3. Write a JavaScript function to check if a given string is a palindrome.
// let a = "5445";
// let j = 0;
// for (let i = a.length - 1; i >= 0; i--) {
//   if (a[j] !== a[i]) {
//     console.log("this is not a paladronine no.");
//   }
//   j++;
// }

// 4. Write a JavaScript program to reverse a given string.

// let a = "bcde";
// for (let i = a.length - 1; i >= 0; i--) {
//   let z = a[i];
//   console.log(z);
// }

// . Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
// let arr = [1, 3, 4, 7, 8, 10, 14, 18, 20, 24, 30];
// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     arr1.push(arr[i]);
//   }
// }
// console.log("this is a new arr even arr is :\n" + arr1);

// 6. Write a JavaScript program to calculate the factorial of a given number.
// let a = 3;
// let z = 1;
// for (let i = 1; i <= a; i++) {
//   console.log((z *= i));
// }

// 7. Write a JavaScript function to check if a given number is prime.

// let num = 3;
// let primenum = true;
// for (let i = 2; i <= num / 2; i++) {
//   if (num % 2 == 0) {
//     primenum = false;
//     console.log("this is not a prime number" + num);
//     break;
//   }
// }
// if (primenum && num > 1) {
//   console.log("this is  a prime number");
// } else {
//   console.log("this is equal to the 1 ");
// }
// 9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
// let num = 10;
// let a = 0;
// let b = 1;
// let sum;
// if (num === 1) {
//   console.log(a);
// } else if (num === 2) {
//   console.log(b);
// } else {
//   for (let i = 3; i <= num; i++) {
//     sum = a + b;
//     a = b;
//     b = sum;
//   }
//   console.log(b);
// }

// Q10. Triangle Pattern — I

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// let r = 10;
// let c;
// for (let i = 0; i <= r; i++) {
//   for (let j = 1; j <= i; j++) {
//     c += j;
//   }
//   c += "\n";
// }
// console.log(c);
// Q 2: Triangle Pattern - II

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// let r = 6;
// let c;
// for (let i = 0; i <= r; i++) {
//   for (let j = 1; j <= i; j++) {
//     c += i;
//   }
//   c += "\n";
// }
// console.log(c);

// Example 3 : Triangle Pattern - III

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// let r = 5;
// let c;
// let temp = 1;
// for (let i = 0; i <= r; i++) {
//   for (let j = 1; j <= i; j++) {
//     c += temp + " ";
//     temp++;
//   }
//   c += "\n";
// }
// console.log(c);

// Example 4: Reverse Triangle - I

// 12345
// 1234
// 123
// 12
// 1

// let r = 5;
// let c;
// for (let i = 0; i <= r; i++) {
//   for (let j = 1; j <= 6 - i; j++) {
//     c += j;
//   }
//   c += "\n";
// }
// console.log(c);

// Example 1 : Square Star Pattern - I

// *****
// *****
// *****
// *****
// *****

// let x = 5;
// let y;
// for (let i = 1; i <= x; i++) {
//   for (let j = 1; j <= 5; j++) {
//     y += "*";
//   }
//   y += "\n";
// }
// console.log(y);

// Example 3 : Right Triangle Pattern

//     *
//    **
//   ***
//  ****
// *****

// let x = 5;
// let y;
// for (let i = 0; i <= x; i++) {
//   for (let j = 0; j <= x - i; j++) {
//     y += " ";
//   }
//   for (let z = 0; z <= i; z++) {
//     y += "*";
//   }
//   y += "\n";
// }
// console.log(y);

// Example 5 : Pyramid Triangle Pattern

//     *
//    ***
//   *****
//  *******
// *********

// let r = 6;
// let x;
// for (let i = 1; i <= r; i++) {
//   for (let z = 1; z <= r - i; z++) {
//     x += " ";
//   }
//   for (let c = 1; c <= 2 * i - 1; c++) {
//     x += "*";
//   }
//   x += "\n";
// }
// console.log(x);

// Example 3 : Hollow Triangle Star Pattern

// *
// **
// * *
// *  *
// *   *
// ******

// let r = 5;
// let z;
// for (let i = 1; i <= r; i++) {
//   for (let j = 1; j <= i; j++) {
//     if (j === 1 || j === i || i === r) {
//       z += "*";
//     } else {
//       z += " ";
//     }
//   }
//   z += "\n";
// }
// console.log(z);

// Example 5 : Pyramid Triangle Pattern

//     *
//    ***
//   *****
//  *******
// *********

// let a = 5;
// let b;
// let temp = 1;
// for (let i = 1; i <= a; i++) {
//   for (let j = 1; j <= a - i; j++) {
//     b += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     b += "*";
//   }
//   b += "\n";
// }
// console.log(b);

// Example 4 : Left Triangle Pattern

// *
// **
// ***
// ****
// *****

// let a = 5;
// let b;
// for (let i = 1; i <= a; i++) {
//   for (let j = 1; j <= i; j++) {
//     b += "*";
//   }
//   b += "\n";
// }
// console.log(b);

// Example 3 : Hollow Triangle Star Pattern

// *
// **
// * *
// *  *
// *   *
// ******

// let x = 5;
// let y;

// for (let i = 1; i <= x; i++) {
//   for (let j = 1; j <= i; j++) {
//     if (j === 1 || j === i || i === x) {
//       y += "*";
//     } else {
//       y += " ";
//     }
//   }
//   y += "\n";
// }
// console.log(y);

// Example 2 : Hollow Square Star Pattern

// *****
// *   *
// *   *
// *   *
// *****

// let x = 5;
// let y;
// for (let i = 1; i <= x; i++) {
//   for (let j = 1; j <= 5; j++) {
//     if (i == 1 || i == x) {
//       y += "*";
//     } else {
//       if (j == 1 || j == 5) {
//         y += "*";
//       } else {
//         y += " ";
//       }
//     }
//   }
//   y += "\n";
// }
// console.log(y);

//     *
//    ***
//   *****
//  *******
// *********

// let a = 7;
// let b;
// for (let i = 1; i <= a; i++) {
//   for (let j = 1; j < a - i; j++) {
//     b += " ";
//   }
//   for (let z = 1; z <= 2 * i - 1; z++) {
//     b += "*";
//   }
//   b += "\n";
// }
// console.log(b);

let a = 5;
let b;
