/**
 * Write a sub function take 1 parameter.
 * The first parameter is an Array.
 * The function must return a number that's the biggest number in given array
 * Note: the input is always correct.
 *
 * For example:
 * Input:
 * let arr = [-7, -10, -20, 0, 1, 2, 3, 4, -100, 5, 6, 7, 8, 9, 10, 20];
 * Ouput: 20
 */

function getMaxNumber(arr) {
    if(arr.length > 0) {
        let max = arr[0];

        for(let i = 1; i < arr.length; i++) {
            if(arr[i] > max) {
                max = arr[i];
            }
        }

        return max;
    }

    return undefined;
}
console.log("-----------------");
console.log('result: ', getMaxNumber(arr));