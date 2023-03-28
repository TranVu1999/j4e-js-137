// Ax + B = C
// 0, 1, 2
function giaiPTBac1(A, B, C) {
    if (A == 0) {
        if (B != C) {
            console.log("VN");
        } else {
            console.log("VSN");
        }
    } else {
        x = (C - B) / A;
    }

    console.log("result: ", x);
    console.log('--------------');
}

function giaiPTBac2(A, B, C, D) {
    if (A === 0) {
        giaiPTBac1(B, C, D);
    } else {
        // tinh delta
        console.log("tui hong biet");
    }
}

let A1 = 1, Z1 = 2, C1 = 3;
let x = 0;

// 0, 1, 2
// giaiPTBac1(Z1, A1, C1); // () toán tử gọi hàm
// ------------------------

// 0, 1, 2
// giaiPTBac1(5, 1, 3);


// console.log("pt bac 2");
// giaiPTBac2(1, 2, 1, 3);
//

let max1 = Number.NEGATIVE_INFINITY;
let max2 = Number.NEGATIVE_INFINITY;

let a = [-10, -20, -30, -40, -50];

for(let i = 0; i < a.length; i++) {
    if (a[i] > max1) {
        max2 = max1;
        max1 = a[i];
    } else if (a[i] > max2) {
        max2 = a[i];
    }
}

console.log('max2: ', max2);


a = [-10, -20, -30, -40, -50];
let min1 = Number.POSITIVE_INFINITY;
let min2 = Number.POSITIVE_INFINITY;

for (let i = 0; i < a.length; i++) {
    if (a[i] < min1) {
        min2 = min1;
        min1 = a[i]
    } else if (a[i] < min2) {
        min2 = a[i];
    }
}
console.log('min2: ', min2);

// tìm min3 & max3








