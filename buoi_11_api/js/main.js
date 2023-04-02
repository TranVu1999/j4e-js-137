
// ====================== Sidebar Handle ======================
const elmNewDetail = document.querySelector(".new-detail");
const elmBody = document.querySelector("body");

const elmSidebarMobile = document.querySelector(".sidebar__mobile");

const btnCloseSidebar = document.querySelector(".close-sidebar");

function handleScrollPage() {
  var winScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (
    winScrollTop - elmNewDetail.offsetTop > 50 &&
    elmBody.offsetWidth < 1023
  ) {
    elmSidebarMobile.style.display = "block";
    elmBody.style.overflowY = "hidden";
  } else {
    elmSidebarMobile.style.display = "none";
    elmBody.style.overflowY = "scroll";
  }
}

btnCloseSidebar.onclick = function () {
  console.log("close");
  elmSidebarMobile.style.transform = "translate(0, -50%)";
};
