// MOBILE MENU //

const TABLET_WIDTH = 768;
const mobileMenuButton = document.querySelector('.header__button');
const headerMenu = document.querySelector('.header__menu');
const screenWidth = document.body.clientWidth;

const onButtonClick = () => {
  mobileMenuButton.classList.toggle('header__button--open');
  headerMenu.classList.toggle('close-js');
};

if (screenWidth < TABLET_WIDTH) {
  mobileMenuButton.classList.add('header__button--open');
  headerMenu.classList.add('close-js');
  mobileMenuButton.addEventListener('click', onButtonClick);
}
