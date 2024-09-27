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