const items = Array.from(document.querySelectorAll('.gallery-item-block'));
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightboxContent');
const caption = document.getElementById('caption');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

items.forEach(item => {
  const video = item.querySelector('video');
  if (video) {
    video.removeAttribute('controls');
    video.muted = true;
    video.loop = true;
  }
});

let currentIndex = -1;

function renderContent(index) {
  const original = items[index].firstElementChild;
  let app;
  if (original.tagName === 'VIDEO') {
    app = document.createElement('video');
    app.src = original.src;
    app.controls = true;
    app.autoplay = true;
    app.playsInline = true;
  } else {
    app = original.cloneNode(true);
  }
  lightboxContent.innerHTML = '';
  lightboxContent.appendChild(app);
  caption.textContent = items[index].getAttribute('data-date') || '';
  return app;
}

function openLightbox(index, direction = 0) {
  currentIndex = index;
  const app = renderContent(index);

  if (direction !== 0) {
    app.style.transform = `translateX(${direction * 100}%)`;
    requestAnimationFrame(() => {
      app.style.transition = 'transform 0.3s ease';
      app.style.transform = 'translateX(0)';
      app.addEventListener('transitionend', () => { app.style.transition = ''; }, { once: true });
    });
  }

  document.body.style.overflow = 'hidden';

  lightbox.classList.add('active-frame');
}
function closeLightbox() {
  lightbox.classList.remove('active-frame');
  lightboxContent.innerHTML = '';
  caption.textContent = '';
  currentIndex = -1;

  document.body.style.overflow = 'unset';
}

function showPrev() {
  const newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
  openLightbox(newIndex, -1);
}

function showNext() {
  const newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
  openLightbox(newIndex, 1);
}

items.forEach((item, idx) => { item.addEventListener('click', () => openLightbox(idx)); });
closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

let startX = 0, currentEl = null;
lightbox.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  currentEl = lightboxContent.firstElementChild;
  if (currentEl) currentEl.style.transition = 'none';
});

lightbox.addEventListener('touchmove', (e) => {
  if (!currentEl) return;
  const deltaX = e.touches[0].clientX - startX;
  currentEl.style.transform = `translateX(${deltaX}px)`;
});

lightbox.addEventListener('touchend', (e) => {
  if (!currentEl) return;
  const deltaX = e.changedTouches[0].clientX - startX;
  currentEl.style.transition = 'transform 0.3s ease';

  if (deltaX > 50) {
    currentEl.style.transform = 'translateX(100%)';
    currentEl.addEventListener('transitionend', showPrev, { once: true });
  } else if (deltaX < -50) {
    currentEl.style.transform = 'translateX(-100%)';
    currentEl.addEventListener('transitionend', showNext, { once: true });
  } else {
    currentEl.style.transform = 'translateX(0)';
  }
  currentEl = null;
});