const buttons = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.hamburger__close-icon');
const hamburger = document.querySelector('.hamburger-button');
const mIcons = document.querySelectorAll('mobile-menu');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    menuIcon.style.display = 'none';
    hamburger.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    menuIcon.style.display = 'block';
    hamburger.style.display = 'none';
  }
}

buttons.addEventListener('click', toggleMenu);

mIcons.forEach((m) => {
  m.addEventListener('click', toggleMenu);
});
