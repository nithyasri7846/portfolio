document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');  // Toggle nav visibility
      menuToggle.classList.toggle('open');  // Animate menu bars
    });
  
  // Smooth scrolling for internal links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
          }
          // Close mobile menu if open
          if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
          }
      });
  });

  // Typewriter effect for hero heading
  const heroHeading = document.querySelector('.hero h1');
  const text = heroHeading.textContent;
  heroHeading.textContent = '';
  let i = 0;

  function typeWriter() {
      if (i < text.length) {
          heroHeading.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
      }
  }
  typeWriter();
});

/*document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active'); // Toggle menu visibility
      menuToggle.classList.toggle('open'); // Animate hamburger icon
    });
  
    // Close menu when clicking a menu item (for mobile)
    const links = document.querySelectorAll('.nav-links li a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('open');
      });
    });
  
    // Smooth scrolling for internal links
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Typewriter effect for hero heading
    const heroHeading = document.querySelector('.hero h1');
    const text = heroHeading.textContent;
    heroHeading.textContent = '';
  
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        heroHeading.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    typeWriter();
  });*/
  
