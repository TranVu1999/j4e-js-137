/**
 * Write a sub function take 2 parameters.
 * The first parameter is an Array.
 * The seccond parameter is a number greater than 0.
 * The function must print number of negative digits in given array
 * Note: the input is always correct.
 *
 * For example:
 * Input:
 * let arr = [-100, -7, -10, -20, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];
 * let n = 5;
 * Ouput: -100 -7 -10 -20
 *
 * Input: n = 1
 * Ouput: -100
 */

function printNegativeNumbers(arr, n) {
    const maxLength = arr.length > n ? arr.length : n;
    let count = 0;

    for(let i = 0; i < maxLength; i++) {
        if(arr[i] < 0) {
            console.log(arr[i]);
            count++;

            if(count === n) {
                break;
            }
        }
    }
}

// printNegativeNumbers(arr, n);
// console.log("-------------------");
// printNegativeNumbers(arr, 1);

// arr = [-100, -7, 10, -20, 0, 1, -9, 3, 4, -7, 6, 7, -5, 9, -12, 20];
// n = 5;
// let count = 0;


// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {
//         count++;
//         console.log(arr[i]);
//     }

//     if (count === 5) {
//         break;
//         console.log('inner');
//     }
// }

// console.log('outer');




