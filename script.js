const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header nav a');
const header = document.querySelector('.header');
const scrollTopBtn = document.querySelector('#scrollTopBtn');

// فتح المينيو
menubar.onclick = () => {
  menubar.classList.toggle('bx-x');
  Navbar.classList.toggle('active');
};

// Scroll Event
window.addEventListener('scroll', () => {
  const top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      sec.classList.add('start-animation');

      navlinks.forEach((link) => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // الهيدر Sticky
  header.classList.toggle('sticky', top > 100);

  // إظهار سهم الرجوع لأعلى
  if (top > 200) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }

  // قفل المينيو وقت الاسكرول
  menubar.classList.remove('bx-x');
  Navbar.classList.remove('active');
});
 function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
