const mobileToggleBtn = document.querySelector('.mobile-toggle-btn');

mobileToggleBtn.addEventListener('click', function () {
    backdrop.classList.add('shown');
    mobileNav.classList.add('shown');
});