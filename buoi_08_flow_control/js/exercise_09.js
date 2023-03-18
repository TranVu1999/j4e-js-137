/**
 * Write a program to count number of digits in given number using LOOP.
 * For example:
 * +) Input: N = 12345
 * +) Output: 5
 */

const N = 12345;
let temp = N;
let count = 0;

while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
}

console.log("result: ", count);



