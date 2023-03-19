/**
 * Write a sub function take 1 parameter.
 * The first parameter is an Array.
 * The function must return a number that's the secondary smallest number in given array
 * Note: the input is always correct.
 *
 * For example:
 * Input:
 * let arr = [-7, -10, -20, 0, 1, 2, 3, 4, -100, -30, 6, 7, 8, 9, 10, 20];
 * Ouput: -30
 */

function getSecondaryMinNumber(arr) {
    if(arr.length > 1) {
        let min1 = Number.POSITIVE_INFINITY;
        let min2 = Number.POSITIVE_INFINITY;

        for(let i = 0; i < arr.length; i++) {
            if (arr[i] < min1) {
                min2 = min1;
                min1 = arr[i];
            } else if (arr[i] < min2) {
                min2 = arr[i];
            }
        }

        return min2;
    }

    return undefined;
}
console.log("-----------------");
console.log('result: ', getSecondaryMinNumber([-7, -10, -20, 0, 1, 2, 3, 4, -100, -30, 6, 7, 8, 9, 10, 20]));