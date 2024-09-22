// cancionero.js


// Scroll To Top

// Get the button
let scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when the user scrolls down 20px from the top
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.classList.remove('hide');
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
    scrollTopBtn.classList.add('hide');
  }
}

// Smooth scrolling to the top when the user clicks the button
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll
  });
}
