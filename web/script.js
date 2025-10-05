document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully!");

  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  if (loginForm && usernameInput && passwordInput) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault(); // prevent form from refreshing the page

      // Get the username and password (not validated)
      const username = usernameInput.value;
      const password = passwordInput.value;

      // Redirect to the main website
      window.location.href = 'index.html';
    });
  } else {
    console.error("Required form elements not found in the DOM.");
  }
});
