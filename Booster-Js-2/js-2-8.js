/**
 *   You have to predict the output of this program WITHOUT EXECUTING IT.
 *
 *   In order to do this, try writing down the value that all variables take
 *   during each step of the program execution.
 *
 *   Answer the following questions:
 *
 *   1. This program throws an error. Why? (If you can't find it, try executing it).
 //!answer : Because b is not defined.
 *   2. Remove the line that throws the error.
 *   3. What is printed to the console? 
 //! I show in code.
 *   4. How many times is "f1" called? //! 2
 *   5. How many times is "f2" called? //! 3
 *   6. What value does the "a" parameter take in the first "f1" call? //! 8
 *   7. What is the value of the "a" outer variable when "f1" is called for the first time? //! 6
 *
 * @format
 */

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x); //! 2
console.log(a); //! 6
// console.log(b);

for (let i = 0; i < 5; ++i) {
  a = a + 1; 
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d); //! first(4), second(6), third(8)
  } else {
    const e = f1(i, a);
    console.log(e); //! first(9), second(13)
  }
}


//! I got this answer from ChatGBT but I think it's wrong but I don't know why? Please tell me in class ⬇

// 1. This program throws an error because the variable `b` is not defined when trying to log its value.
// 2. To remove the error, you can either remove the line `console.log(b);` or define `b` somewhere before trying to log its value.
// 3. The program prints:
// ```
// 2
// 6
// 4
// 9
// 5
// 11
// ```
// 4. The function `f1` is called twice.
// 5. The function `f2` is called three times.
// 6. In the first call to `f1`, the parameter `a` takes the value of `0`.
// 7. The value of the outer variable `a` when `f1` is called for the first time is `6`.