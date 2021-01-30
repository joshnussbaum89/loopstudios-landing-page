/**
 * Toggles Mobile Navigation Menu
 @param {eventTarget} onClick 
 ***************************************************************/

function toggleHamburgerMenu(e) {
    const hamburgerTop = document.querySelector('.hamburger-top');
    const hamburgerBottom = document.querySelector('.hamburger-bottom');
    hamburgerTop.classList.toggle('hamburger-x-top');
    hamburgerBottom.classList.toggle('hamburger-x-bottom');
}

// Hamburger menu click event
document.querySelector('.hamburger').addEventListener('click', toggleHamburgerMenu);