const menuStructure = {
  main: [
    { label: 'О себе', href: 'about.html', target: '_self' },
    { label: 'Посты', href: 'posts.html', target: '_self' },
    { label: 'Вишлист', href: 'wishlist.html', target: '_self' },
    { label: 'Активность', action: 'navigate', target: 'section1' },
  ],

  section1: [
    { label: 'Искусство', href: 'activity-art.html', target: '_self' },
    { label: 'Достижения', href: 'achievements.html', target: '_self' },
    { label: 'Тренировка', href: 'training.html', target: '_self' },
    { label: 'Главное меню', action: 'back' }
  ],

};

const container = document.getElementById('buttons');

let currentMenu = 'main';

function renderMenu() {
  container.innerHTML = '';

  const items = menuStructure[currentMenu];

  items.forEach(item => {
    const btn = document.createElement('button');

    btn.textContent = item.label;

    if (item.href) {

      btn.onclick = () => {
        window.open(item.href, item.target || '_self');

      };

    } else if (item.action === 'navigate') {

      btn.dataset.action = item.action;
      btn.dataset.target = item.target;


    } else if (item.action === 'back') {


      btn.dataset.action = 'back';
    }

    container.appendChild(btn);
  });
}

container.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;

  const action = e.target.dataset.action;

  if (action === 'navigate') {

    currentMenu = e.target.dataset.target;

    renderMenu();

  } else if (action === 'back') {

    currentMenu = 'main';

    renderMenu();
  }
});
renderMenu();
