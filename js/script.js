document.querySelector('.header__burger').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.header__menu').classList.add('active');
    document.body.classList.add('lock');
})

document.querySelector('.header__close').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.header__menu').classList.remove('active');
    document.body.classList.remove('lock');
})