let burger = document.querySelector('.main-nav__burger');
let burgerClose = document.querySelector('.toggle-menu__burger');
let toggle = document.querySelector('.toggle-menu');

if (burger) {
    burger.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (toggle.classList.contains('visually-hidden')) {
            toggle.classList.remove('visually-hidden');
        }
    });
}

if (burgerClose) {
    burgerClose.addEventListener('click', function (evt) {
        evt.preventDefault();
        toggle.classList.add('visually-hidden');
    });
}