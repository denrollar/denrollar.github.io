const menuStructure = {
  main: [
    { label: 'О себе', href: 'about.html', target: '_self' },
    { label: 'Посты', href: 'posts.html', target: '_self' },
    { label: 'Активность', href: 'activity-art.html', target: '_self' },

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