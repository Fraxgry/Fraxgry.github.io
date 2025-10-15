const toggleBtn = document.getElementById('menu-toggle');
const menuLinks = document.getElementById('menu-links');

toggleBtn.addEventListener('click', () => {
  menuLinks.classList.toggle('show');
});