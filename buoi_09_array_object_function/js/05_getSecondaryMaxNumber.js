/**
 * Write a sub function take 1 parameter.
 * The first parameter is an Array.
 * The function must return a number that's the secondary largest number in given array
 * Note: the input is always correct.
 *
 * For example:
 * Input:
 * let arr = [-7, -10, -20, 0, 1, 2, 3, 4, -100, 5, 6, 7, 8, 9, 10, 20];
 * Ouput: 10
 */

function getSecondaryMaxNumber(arr) {
    if(arr.length > 1) {
        let max1 = Number.NEGATIVE_INFINITY;
        let max2 = Number.NEGATIVE_INFINITY;

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > max1) {
                max2 = max1;
                max1 = arr[i];
            } else if (arr[i] > max2) {
                max2 = arr[i];
            }
        }

        return max2;
    }

    return undefined;
}
console.log("-----------------");
console.log('result: ', getSecondaryMaxNumber(arr));