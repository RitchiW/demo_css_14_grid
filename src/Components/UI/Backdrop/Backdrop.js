const backdrop = document.querySelector('.backdrop');
const mobileNav = document.querySelector('.mobile-navbar');

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('shown')
    backdrop.classList.remove('shown');
});