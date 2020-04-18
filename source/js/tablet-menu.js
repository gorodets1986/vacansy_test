let tabletBurger = document.querySelector('.tablet-nav__burger');
let tabletBurgerClose = document.querySelector('.tablet-menu__burger');
let tablet = document.querySelector('.tablet-menu');

if (tabletBurger) {
    tabletBurger.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (tablet.classList.contains('visually-hidden')) {
            tablet.classList.remove('visually-hidden');
        }
        tabletBurger.classList.add('visually-hidden');
    });
}

if (tabletBurgerClose) {
    tabletBurgerClose.addEventListener('click', function (evt) {
        evt.preventDefault();
        tablet.classList.add('visually-hidden');
        if (tabletBurger.classList.contains('visually-hidden')) {
            tabletBurger.classList.remove('visually-hidden');
        }
    });
}