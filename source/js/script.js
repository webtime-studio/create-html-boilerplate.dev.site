// MOBILE MENU //

const mobileMenuButton = document.querySelector('.header__button');
const headerMenu = document.querySelector('.header__menu');

const onButtonClick = () => {
  mobileMenuButton.classList.toggle('header__button--open');
  headerMenu.classList.toggle('header__menu--close');
};

mobileMenuButton.classList.add('header__button--open');
headerMenu.classList.add('header__menu--close');
mobileMenuButton.addEventListener('click', onButtonClick);
