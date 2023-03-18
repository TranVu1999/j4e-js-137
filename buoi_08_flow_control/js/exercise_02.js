/**
 * Write a program to print all natural numbers in reverse from 1 to N using LOOP.
 * For example:
 * +) Input: N = 10
 * +) Output: 10 9 ... 2 1
 */

 console.log("------------------------------");
 console.log("Using For statement");
 const N = 10;
//  for (let i = 1; i <= N; i++) {
for (let i = N; i > 0; i = i - 1) {
    console.log(i);
}

console.log("------------------------------");
console.log("Using While statement");
// let step = 1;
let step = N;
// while (step <= N) {
while (step > 0) {
    console.log(step);
    // step++;
    step--;
}

console.log("------------------------------");
console.log("Using Do While statement");
// let step2 = 0;
let step2 = N;
do {
    // step2++;
    console.log(step2);
    step2--;
// } while (step2 < N);
} while (step2 > 0); // why??
