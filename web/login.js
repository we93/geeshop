// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form from refreshing the page

      // Get username and password (optional, for future use)
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Redirect to main website (index.html)
      window.location.href = 'index.html';
    });
  }

  // Example: Add event listeners to buttons on index.html
  const homeBtn = document.getElementById('homeBtn');
  const aboutBtn = document.getElementById('aboutBtn');
  const contactBtn = document.getElementById('contactBtn');

  if (homeBtn) {
    homeBtn.addEventListener('click', function() {
      window.location.href = 'home.html';
    });
  }

  if (aboutBtn) {
    aboutBtn.addEventListener('click', function() {
      window.location.href = 'about.html';
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener('click', function() {
      window.location.href = 'contact.html';
    });
  }
});