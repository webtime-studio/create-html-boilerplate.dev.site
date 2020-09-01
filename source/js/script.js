// MOBILE MENU //

const TABLET_WIDTH = 768;
const mobileMenuButton = document.querySelector('.header__button');
const headerMenu = document.querySelector('.header__menu');
const screenWidth = document.body.clientWidth;

const onButtonClick = () => {
  mobileMenuButton.classList.toggle('header__button--open');
  headerMenu.classList.toggle('header__menu--close');
};

mobileMenuButton.classList.add('header__button--open');
headerMenu.classList.add('header__menu--close');
mobileMenuButton.addEventListener('click', onButtonClick);
