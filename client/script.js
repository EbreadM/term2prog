window.onload = function () {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];
  
    toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');});

    const toggleBtn = document.getElementById('toggle-theme');
    const body = document.body;

    toggleBtn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
    });

};