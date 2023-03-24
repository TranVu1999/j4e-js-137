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

for (let i = 0; i < arr.length; i++) {
    if(checkPrimeNumber2(arr[i]) === true) {
        console.log(arr[i]);
    }
}

// () -> toán tử gọi hàm -> call operator