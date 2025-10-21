const menuBtn = document.getElementById('menu-btn');
const vertical = document.getElementById('vertical');
const overlay = document.getElementById('overlay');
const closeBack = document.getElementById('close-back');

function toggleMenu() {
  vertical.classList.toggle('active');
  overlay.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
closeBack.addEventListener('click', toggleMenu);