var btnHamburger = document.getElementById("hamburger-button");
var navMenuMobile = document.querySelector(".header__nav--mobile");

btnHamburger.onclick = function () {
    navMenuMobile.classList.toggle("active")
};
