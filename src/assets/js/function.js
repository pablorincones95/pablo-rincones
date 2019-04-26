function  toggleNav() {
  const d = document,
    navbarBtn = d.querySelector('.navbar__btn'),
    navbar = d.querySelector('.navbar'),
    mobileMenu = d.querySelector('.navbar__menu'),
    main = d.querySelector('.Main');

  navbarBtn.addEventListener('click', e => {
    e.preventDefault();
    mobileMenu.classList.toggle('is-active');
    navbar.classList.toggle('is-active');
    // main.classList.toggle('is-active');
  });

  d.addEventListener('click', e => {
    if (e.target.matches('a[href="#"]')) {
      e.preventDefault();
      navbarBtn.classList.remove('is-active');
      // header.classList.remove('is-active');
      // main.classList.remove('is-active');
    }
  });
}


