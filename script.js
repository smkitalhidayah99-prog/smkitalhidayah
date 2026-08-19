document.addEventListener('DOMContentLoaded', () => {
  // Toggle Dark Mode
  const themeToggleBtn = document.getElementById('themeToggle');
  
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
      } else {
        themeToggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
      }
    });

    // Cek preferensi tema sebelumnya
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggleBtn.textContent = '☀️';
    }
  }

  // Toggle Navigasi Mobile Menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
});