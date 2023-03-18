let a; // Khai báo
a = 10; // Khởi tạo giá trị
a = 20; // re-assign;

// dấu '=' -> gọi là toán tử gán
console.log('title: ', a); // 20

// Khai báo hằng số
const pi = 3.14; // khai báo & khởi tạo giá trị
// pi = 3; // error
console.log('pi: ', pi);

// Toán tử
// 1. Toán tử số học: +, -, *, /, %

// let number1 = 10;
// let number2 = 15;

let number1 = 15, number2 = 10;

console.log('number1 + number2: ', number1 + number2);      // 25
console.log('number1 - number2: ', number1 - number2);      // 5
console.log('number1 * number2: ', number1 * number2);      // 150
console.log('number1 / number2: ', number1 / number2);      // 1.5
console.log('number1 % number2: ', number1 % number2);      // 5

// 2. Toán tử gán
// X = Y
// X += Y <=> X = X + Y
// X -= Y <=> X = X - Y
// X /= Y <=> X = X / Y
// X %= Y <=> X = X % Y
let number3 = 10;
let number4 = number3; // 10

console.log('number4: ', number4); // 10

number4 += number3; // <=> number4 = number4 + number3;
console.log('number4 += number3: ', number4); // = 10 + 10 = 20

number4 -= number3; // <=> number4 = number4 - number3;
console.log('number4 -= number3: ', number4); // = 20 - 10 = 10

number4 /= number3; // <=> number4 = number4 / number3;
console.log('number4 /= number3: ', number4); // = 10 / 10 = 1

number4 %= number3; // <=> number4 = number4 % number3;
console.log('number4 %= number3: ', number4); // 1 % 10 = 1


// 3. Toán so sánh -> giá trị trả về là boolean (TRUE or FALSE)
/**
 * >, <, >=, <=, ==, ===, !=, !==
 */
console.log('-----------------------\n');
let i = 10, j = 15;
console.log('i > j: ', i > j);              // false
console.log('i >= j: ', i >= j);            // false
console.log('i < j: ', i < j);              // true
console.log('i <= j: ', i <= j);            // true
console.log('i == j: ', i == j);            // false
console.log('i != j: ', i != j);            // true

// "abc", 'abc' -> string
// 1, 2, 3, 1.5 -> number

console.log('-----------------------\n');
i = 10; j = '10';
// ==: so sánh giá trị
console.log('i == j: ', i == j); // true
// so sánh kiểu dữ liệu & giá trị
console.log('i === j: ', i === j); // false


// 4. Toán tử Logic => boolean
// && (and) || (or) ! (not)

// A && B => Khi cả A và B đều là TRUE => TRUE
// ngày mai tôi có tiền && trời nắng => tôi sẽ đi dự sinh nhật


// A || B => Khi cả A và B đều FALSE => FALSE
// ngày mai tôi có tiền || trời nắng => tôi sẽ đi dự sinh nhật

// 1. có tiền & trời mưa -> đi         => true && false -> true
// 2. ko tiền & trời nắng -> đi        => false & true -> true
// 3. có tiền & trời nắng -> đi        => true & true -> true
// 4. ko tiền & trời mưa -> ko đi      => false & false -> false

// !A => nếu A TRUE => !A FALSE; nếu A FASLE => !A TRUE


// A && B && C
// A: 1, B: 1, C: 1 => 1
// A: 0, B: 1, C: 1 => 0

// A && (B || C)
// A: 0, B: 1, C: 1 => 0

console.log('-----------------------\n');
let k = 5;
k++; // => k += 1 = k + 1
console.log('k++: ', k); // 6

k--; // => k -= 1 = k - 1
console.log('k--: ', k); // 5

console.log('-----------------------\n');
k = 5;
let l = k++;
// let l = k;
// k = k + 1;
console.log('l = k++: ', l); // 5

let k2 = 5;
l = ++k2;
// ++k2 => k2 = k2 + 1
// k2 = k2 + 1; l = k2
console.log('l = ++k: ', l); // 6

// 7 kiểu dữ liệu primitive
/**
 *  1. number
 *  2. string
 *  3. boolean
 *  4. undefined
 *  5. null
 *  6. symbol
 *  7. bigInt
 */

let email = 'tranvudpqn123@gmail.com';
let password = 'admin123';
let phoneNumber = '0377670509';


let brandName = '';
let isLiked = true;
let countProduct = 44;

// Bài tập: Phân tích dữ liệu của các nhóm đối tượng tùy theo team
// Team USER: user
// Team AGENT: agent
// Team ADMIN: product






