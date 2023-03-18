/**
 * Write a program to print all natural numbers from START to END using LOOP.
 * For example:
 * +) Input: START = 10, END = 20
 * +) Output: 10 11 ... 20
 */

console.log("------------------------------");
console.log("Using For statement");
const START = 10, END = 20;
// for (let i = 1; i <= N; i++) {
for (let i = START; i <= END; i++) {
    console.log(i);
}

console.log("------------------------------");
console.log("Using While statement");
// let step = 1;
let step = START;
// while (step <= N) {
while (step <= END) {
    console.log(step);
    step++;
}

console.log("------------------------------");
console.log("Using Do While statement");
// let step2 = 0;
let step2 = START - 1;
do {
    step2++;
    console.log(step2);
// } while (step2 < N);
} while (step2 < END);
