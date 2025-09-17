const menuBtn = document.getElementById('menu-btn');
const vertical = document.getElementById('vertical');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

function toggleMenu() {
  vertical.classList.toggle('active');
  overlay.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);