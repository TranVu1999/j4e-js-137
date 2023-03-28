/**
 * Write a program to swap all digits in given number using LOOP.
 * For example:
 * +) Input: N = 12345
 * +) Output: 54321
 */

const N = 12345;
let temp = N;
let result = 0;

do {
    result = result * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
} while (temp > 0);

console.log("result: ", result);
