/**
 * Write a program to print all even natural numbers from 0 to N using LOOP.
 * For example:
 * +) Input: N = 20
 * +) Output: 0 2 4 6 ... 20
 */

 console.log("------------------------------");
 const N = 20;
 for (let i = 0; i <= N; i++) {
     if (i % 2 === 0) {
         console.log(i);
     }
 }

 console.log("------------------------------");
 // Another Idea
 for (let i = 0; i <= N; i += 2) {
     // without IF statement
     console.log(i);
 }


