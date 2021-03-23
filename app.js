const sideNav = document.getElementById("myNav");
const popup = document.querySelector('.popup');

/**
 * IIFE to display popup after 10 sec
 */
(() => {
    setTimeout(() => {
        popup.style.opacity = '1';
    }, 5000);
})();

const closeSignUpForm = () => {
    popup.style.opacity = '0';
}

/**
 * Toggles Mobile Navigation Menu On User Click
 * If mobile nav is open, make the hamburger fixed
 */
const toggleHamburgerMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const hamburgerTop = document.querySelector('.hamburger-top');
    const hamburgerBottom = document.querySelector('.hamburger-bottom');
    hamburgerTop.classList.toggle('hamburger-x-top');
    hamburgerBottom.classList.toggle('hamburger-x-bottom');

    if (sideNav.classList.contains('close')) {
        sideNav.style.width = "0%";
        sideNav.classList.remove('close');
        sideNav.classList.add('open');
        hamburger.style.position = 'relative';
        hamburger.style.right = '0';
    } else if (sideNav.classList.contains('open')) {
        hamburger.style.position = 'fixed';
        hamburger.style.right = '7%';
        sideNav.style.width = "100%";
        sideNav.classList.remove('open');
        sideNav.classList.add('close');
    }
}

/**
 * Toggles Mobile Navigation Menu On Window Resize
 */
const windowResizeWindowToggle = () => {
    let newWidth = window.innerWidth;

    if (newWidth >= 768 && sideNav.classList.contains('close')) {
        toggleHamburgerMenu();
    }
}

// Close the sign up form
document.querySelector('.popup-form-close').addEventListener('click', closeSignUpForm);
// Navigation menu click
document.querySelector('.hamburger').addEventListener('click', toggleHamburgerMenu);
// Navigation menu window resize
window.addEventListener('resize', windowResizeWindowToggle);