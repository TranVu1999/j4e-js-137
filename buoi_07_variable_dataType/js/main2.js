// global scope
let english = 'English';
let vietNamese = 'VietNam_Global';

{
    // Asia
    // let vietNamese = 'VietNam_Asia';

    {
        // Viet Nam
        let vietNamese = 'VietNam1';
        console.log('english: ', english);
        console.log('vietNamese: ', vietNamese);
    }

    console.log('-----------------------------');

    {
        // china
        let chinese = 'China';
        console.log('english: ', english);
        console.log('chinese: ', chinese);
        console.log('vietNamese: ', vietNamese);
    }
}


console.log('-----------------------------');
let num = 2;
// nếu num = 1 -> in ra màn hình 'một'
// nếu num = 2 -> in ra màn hình 'hai'
// nếu num = 3 -> in ra màn hình 'ba'

// Start
// Câu lệnh khuyết
// if (num === 1) {
//     console.log("một");
// }

// Câu lệnh đầy đủ if - else

// Câu lệnh lồng if {if - else} - else {if }

// Câu lệnh nối đuôi - chaining

if (num === 1) {
    console.log("một");
} else if (num === 2) {
    console.log("hai");
} else {
    console.log("ba");
}



///asdfaknsfd ihsa df
// Stop



