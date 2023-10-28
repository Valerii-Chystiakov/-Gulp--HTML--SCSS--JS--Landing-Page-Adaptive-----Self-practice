const burgerMenu = document.getElementsByClassName('burgerMenu')[0]
burgerMenu.addEventListener('click', function () {
    document.querySelector("header").classList.toggle("burger-open");
});

const chooseColor = document.querySelectorAll('.choose-color__btn');
const contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function (chooseColor_btn) {
    chooseColor_btn.addEventListener('click', changeColor)
})

function changeColor(evt) {
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`)

    chooseColor.forEach(function (chooseColor_btn) {
        chooseColor_btn.classList.remove('choose-color__btn--active')
    })

    target.classList.add("choose-color__btn--active")

    contentItem.forEach(function (content) {
        content.classList.remove('content-item--active')
    })

    contentActive.forEach(function (item) {
        item.classList.add('content-item--active')
    })
}
