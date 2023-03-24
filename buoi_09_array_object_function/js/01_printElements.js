/**
 * Write a sub function take 2 parameters.
 * The first parameter is an Array.
 * The seccond parameter is a number.
 * The function must print number of elements in array
 *
 * For example:
 * Input:
 * let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * let n = 5;
 * Ouput: 1 2 3 4 5
 *
 * Input: n = 0 or arr = {}
 * Ouput: 'Cannot handle it. The input is invalid.'
 *
 * Input: n = 11
 * Ouput: 1 2 3 4 5 6 7 8 9 10
 */

function printElements(arr, n) {
    if (Array.isArray(arr) && n > 0) {
        if (arr.length === 0) {
            console.log("The array is empty");
        } else {
            const maxLength = arr.length >= n ? n : arr.length;
            for (let i = 0; i < maxLength; i++) {
                console.log(arr[i]);
            }
        }
    } else {
        console.log('Cannot handle it. The input is invalid.');
    }
}

// printElements(arr, n);


arr = [-100, -7, -10, -20, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];
n = 10;

for (let i = 0; i < n; i++) {
    // console.log(i + ": " + arr[i]); // i: arr[i]
    console.log(`${i + 1}: ${arr[i]}`); // Template Literal
}