const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector ('.menu-siderbar');

menuBtn.addEventListener("click",function () {
    menu.classList.toggle("active");
});