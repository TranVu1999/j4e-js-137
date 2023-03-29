const btnTang = document.getElementById('tang');
const btnGiam = document.getElementById('giam');
const imgElm = document.getElementsByTagName('img')[0];
console.log('title: ', imgElm);
let width = 500;

console.log('title: ', btnTang, btnGiam);

btnTang.onclick = function() {
    width += 50;
    imgElm.style.width = width + '%';
}

btnGiam.onclick = function() {
    width -= 50;
    imgElm.style.width = width + '%';
}
