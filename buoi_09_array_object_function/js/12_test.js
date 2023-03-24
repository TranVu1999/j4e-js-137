arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Guard
function checkPrimeNumber(number) {
    // số nguyên là số cho 2 ước là 1 và number
    if (number < 2) {
        return false;
    }

    const maxIndex = Math.sqrt(number);
    let i = 2;

    while(i <= maxIndex) {
        if(number % i === 0) {
            return false;
        }

        i++;
    }

    return true;
}

function checkPrimeNumber2(number) {
    // số nguyên là số cho 2 ước là 1 và number
    let flag = false;
    if (number >= 2) {
        const maxIndex = Math.sqrt(number);
        let i = 2;

        flag = true;
        while(i <= maxIndex) {
            if(number % i === 0) {
                flag = false;
                break;
            }

            i++;
        }
    }

    return flag;
}

// for (let i = 0; i < arr.length; i++) {
//     if(checkPrimeNumber2(arr[i]) === true) {
//         console.log(arr[i]);
//     }
// }

// () -> toán tử gọi hàm -> call operator

arr = [-7, 0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 20];
let min1 = Number.POSITIVE_INFINITY;
let min2 = Number.POSITIVE_INFINITY;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min1) {
        min2 = min1;
        min1 = arr[i];
    } else if(arr[i] < min2) {
        min2 = arr[i];
    }
}

console.log('title: ', min2);
/**
 *  min1 = duong vo cung
 *  min2 = duong vo cung
 *
 *  i = 0; arr[i] = -7
 *  (arr[i] = -7 < min1 = duong vo cung) -> true
 *  min2 = min1 => min2 = duong vo cung
 *  min1 = arr[i] = min1 = -7
 *
 *  i = 1; arr[i] = 0
 *  (arr[i] = 0 < min1 = -7) -> false
 *  (arr[i] = 0 < min2 = duong vo cung) -> true
 *  min2 = arr[i] => min2 = 0
 *
 *  i = 2
 *  ...
 *
 * min2 = 0
 */