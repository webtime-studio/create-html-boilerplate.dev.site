// MOBILE MENU //

const header = document.querySelector('.header');
const mobileMenuButton = header.querySelector('.header__button');
const headerMenu = header.querySelector('.header__menu');

const onButtonClick = () => {
  mobileMenuButton.classList.toggle('header__button--open');
  headerMenu.classList.toggle('header__menu--close');
};

mobileMenuButton.classList.add('header__button--open');
headerMenu.classList.add('header__menu--close');
mobileMenuButton.addEventListener('click', onButtonClick);

// HEADER RESIZE ON SCROLL //

const RESIZE_DELAY = 500;

const debounce = (callback, delay) => {
  let isDebounced = false;
  let lastTimeout = null;

  return () => {
    const parameters = arguments;

    if (!isDebounced) {
      callback.apply(null, parameters);
      isDebounced = true;
    }

    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }

    lastTimeout = setTimeout(function () {
      isDebounced = false;
      callback.apply(null, parameters);
    }, delay);
  };
};

const resizeHeader = () => {
  if (document.documentElement.scrollTop > 0) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
};

const onDocumentScroll = debounce(resizeHeader, RESIZE_DELAY);

document.addEventListener('scroll', onDocumentScroll);
