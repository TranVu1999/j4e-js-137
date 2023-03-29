let users = [
    {userName: 'thomas.tran', password: 'admin'},
    {userName: 'yen.phan', password: 'admin'},
    {userName: 'truc.huynh', password: 'admin'},
    {userName: 'son.duong', password: 'admin'},
    {userName: 'khoan.nguyen', password: 'admin'},
    {userName: 'loc.vo', password: 'admin'},
    {userName: 'duy.nguyen', password: 'admin'},
    {userName: 'khoi.nguyen', password: 'admin'},
    {userName: 'khanh.nguyen', password: 'admin'},
];

let userName = '';
let password = '';

const userNameElm = document.getElementById('username');
const passwordElm = document.getElementById('password');
const submitButtonElm = document.getElementById('btnSubmit');
const formLogin = document.getElementById('formLogin');
const errorMessageElm = document.getElementById('errorMessage');

userNameElm.addEventListener('keyup', function(event) {
    userName = event.target.value;
    enableSubmitButton();
});

passwordElm.addEventListener('keyup', function(event) {
    password = event.target.value;
    enableSubmitButton();
});

formLogin.addEventListener('submit', handleLogin);

function enableSubmitButton() {
    if(userName && password) {
        submitButtonElm.removeAttribute('disabled');
    } else {
        submitButtonElm.setAttribute('disabled', true);
    }
}

function handleLogin(event) {
    event.preventDefault();
    let isAccept = false;

    for(let i = 0; i < users.length; i++) {
        if (users[i].userName === userName && users[i].password === password) {
            isAccept = true;
            break;
        }
    }

    if(isAccept) {
        window.location = 'http://localhost:5500/';
    } else {
        errorMessageElm.style.display = 'block';
        errorMessageElm.innerText = 'Tài khoản/Mật khẩu không đúng! Vui lòng kiểm tra lại';
    }
}

// callback
function sum(number1, number2, bien) {
    const result = number1 + number2;
    bien(result);
}

function printResult(number) {
    console.log("result: ", number)
}
function printResult2(number) {
    console.log("ket qua la: ", number)
}

sum(1, 2, printResult);
sum(2, 2, printResult2);
















