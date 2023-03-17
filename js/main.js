const buttons = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.hamburger__close-icon');
const hamburger = document.querySelector('.hamburger-button');
const mIcons = document.querySelectorAll('mobile-menu');

function toggleClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

function toggleDisplay(element) {
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

function toggleMenu() {
  toggleClass(menu, 'showMenu');
  toggleDisplay(menuIcon);
  toggleDisplay(hamburger);
}

buttons.addEventListener('click', toggleMenu);

mIcons.forEach((m) => {
  m.addEventListener('click', toggleMenu);
});
