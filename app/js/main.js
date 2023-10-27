const burgerMenu = document.getElementsByClassName('burgerMenu')[0]
burgerMenu.addEventListener('click', function () {
    document.querySelector("header").classList.toggle("burger-open");
});