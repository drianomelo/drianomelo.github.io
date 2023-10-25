const headerButton = document.querySelector('.header__btn');
const headerIconButton = document.querySelector('.header__btn i');
const headerNavigation = document.querySelector('.header__navigation');

headerButton.addEventListener('click', () => {
    headerNavigation.classList.toggle('header__navigation--active');
    headerIconButton.classList.toggle('fa-bars');
    headerIconButton.classList.toggle('fa-xmark');
});
