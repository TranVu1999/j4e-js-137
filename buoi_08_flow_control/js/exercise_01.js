/**
 * Write a program to print all natural numbers from 1 to N using LOOP.
 * For example:
 * +) Input: N = 10
 * +) Output: 1 2 3 4 5 6 7 8 9 10
 */

console.log("------------------------------");
console.log("Using For statement");
const N = 10;

// for (let i = 1; i <= N; i = i + 2) {
//     console.log(i);
// }

// console.log("------------------------------");
// console.log("Using While statement");

// let step = 1;
// while (step <= N) {
//     console.log(step);
//     step++;
// }

// console.log("------------------------------");
console.log("Using Do While statement");
let step2 = 0;
do {
    console.log(step2);
    step2++;

} while (step2 < N); // why??

// More questions:
// 1. What is different between Do While with While loop?
// 2. How can I transform from 'For' to 'Do while' or 'While' to 'Do While'?