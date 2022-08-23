const burgerOpen = document.querySelector('.main-burger-open');
const burgerClose = document.querySelector('.mobile-burger-close');
const mobileNavBar = document.querySelector('.mobile-navbar');
const body = document.querySelector('body');

burgerOpen.addEventListener('click', () => {
    body.style.overflowY = "hidden"; 
    mobileNavBar.style.display = "flex";
});

burgerClose.addEventListener('click', () => {
    body.style.overflowY = "visible";
    mobileNavBar.style.display = "none";
});

