// const d = document;

// function  toggleNav() {
//   const navbarBtn = d.querySelector('.navbar__btn'),
//     navbar = d.querySelector('.navbar'),
//     mobileMenu = d.querySelector('.navbar__menu'),
//     main = d.querySelector('.Main');

//   navbarBtn.addEventListener('click', e => {
//     e.preventDefault();
//     mobileMenu.classList.toggle('is-active');
//     navbar.classList.toggle('is-active');
//     // main.classList.toggle('is-active');
//   });

//   d.addEventListener('click', e => {
//     if (e.target.matches('a[href="#"]')) {
//       e.preventDefault();
//       navbarBtn.classList.remove('is-active');
//       // header.classList.remove('is-active');
//       // main.classList.remove('is-active');
//     }
//   });
// }

// window.onscroll = () => {menuScroll()};

// const  menuScroll = () => {
//   let menu = d.querySelector('.navbar');

//   if (d.body.scrollTop > 100 || d.documentElement.scrollTop > 100) {
//     menu.classList.add('--scroll');
//   } else {
//     menu.classList.remove('--scroll');
//   }
// }

// // const headerTitleHTML = () => {
// //   return `
// //     <div class="row --column">
// //       <h1>Pablo Rincones</h1>
// //       <span>Desarollador Web</span>
// //       <a href="">Ver mis trabajos</a>
// //     </div>
// //   `;
// // }

// // const headerTitle = () => {

// //   const canvas = d.querySelector('.particles-js-canvas-el');
// //   let div = d.createElement('div');
// //   div.classList.add('container');
// //   div.innerHTML = headerTitleHTML();
// //   canvas.insertAdjacentElement('afterbegin', div);
// // }

