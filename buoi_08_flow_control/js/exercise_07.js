/**
 * Write a program to print sum of all event natural numbers from 1 to N using LOOP.
 * For example:
 * +) Input: N = 10
 * +) Output: 30
 */

const N = 10;
let sum = 0;
for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log('sum: ', sum);


