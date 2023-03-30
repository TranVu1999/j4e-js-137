// let users = [
//     {userName: 'admin', password: 'admin'}
// ];
// // truy cap vao cac o input
// const $userLogin=document.getElementById('user-login');
// console.log($userLogin);
// const $formLogin=document.getElementById('container-form');
// console.log($formLogin);

// $userLogin.onclick=function(){
//     $formLogin.style.display="display:block;";
// }


const btnCloseModalElm = document.getElementById('btnCloseModal');
const formLoginElm = document.getElementById('formLogin');
const modalElm = document.getElementById('modal');
const containerFormElm = document.getElementById('containerForm');

console.log("containerFormElm: ", containerFormElm)

btnCloseModalElm.addEventListener('click', function() {
    modalElm.style.display = 'none';
});
formLoginElm.addEventListener('click', function() {
    modalElm.style.display = 'block';
});
modalElm.addEventListener('click', function() {
    modalElm.style.display = 'none';
});
containerFormElm.addEventListener('click', function(event) {
    console.log('title: ', event);
    event.stopPropagation();
});













