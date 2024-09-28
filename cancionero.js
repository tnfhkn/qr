// cancionero.js


// Scroll To Top


let scrollTopBtn = document.getElementById("scrollTopBtn");
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

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll
  });
}

// Download as PDF

document.getElementById('download-btn').addEventListener('click', function() {
    // Create a new jsPDF instance
    const jspdf = require ('jspdf');
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    // Get the content of the div
    const content = document.getElementById('main-container');
    
    // Extract text content
    const text = content.innerText;
    
    // Add text to PDF
    doc.text(text, 10, 10);
    
    // Save the PDF
    doc.save('downloaded-content.pdf');
});


// Dark - Light mode

const toggleButton = document.getElementById('dark-mode-toggle');
const darkThemeLink = document.getElementById('dark-theme'); // Ensure this matches your HTML

function applyTheme(theme) {
    // Fallback check
    if (!darkThemeLink) {
        console.error("Dark theme link element not found.");
        return;
    }

    if (theme === 'dark') {
        darkThemeLink.removeAttribute('disabled'); // Enable dark.css
    } else {
        darkThemeLink.setAttribute('disabled', 'true'); // Disable dark.css
    }
}

function toggleTheme() {
    const isDarkThemeActive = darkThemeLink.getAttribute('disabled') === null; // Check if dark mode is active
    const newTheme = isDarkThemeActive ? 'light' : 'dark'; // Toggle to the opposite theme
    applyTheme(newTheme);

    // Save user's preference in localStorage
    localStorage.setItem('theme', newTheme);
}

// Toggle between light and dark modes when the button is clicked
toggleButton.addEventListener('click', toggleTheme);

// On page load, check for saved theme in localStorage or use system preference
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        applyTheme(savedTheme); // Use saved theme
    } else {
        // If no theme is saved, check the system preference and apply accordingly
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const defaultTheme = prefersDarkScheme ? 'dark' : 'light';
        applyTheme(defaultTheme);
    }
};
