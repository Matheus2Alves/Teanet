const navbarBurger = document.querySelector('.navbar-burger');
const navbarLinks = document.querySelector('.navbar-links');

navbarBurger.addEventListener('click', () => {
  navbarBurger.classList.toggle('active');
  navbarLinks.classList.toggle('active');
});
