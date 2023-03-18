/**
 * Write a program to print all odd natural numbers from 0 to N using LOOP.
 * For example:
 * +) Input: N = 20
 * +) Output: 1 3 5 ... 19
 */

console.log("------------------------------");
const N = 20;
for (let i = 0; i <= N; i++) {
    // if (i % 2 === 0) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("------------------------------");
// Another Idea
for (let i = 1; i <= N; i += 2) {
    // without IF statement
    console.log(i);
}


