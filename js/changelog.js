const changelogData = [
  {
    date: "22 ноября 2025",
    changes: [
      "Информация скрыта",
      "Информация скрыта",
    ]
  },
  {
    date: "20 ноября 2025",
    changes: [
      "Информация скрыта",
      "Информация скрыта",
    ]
  },
];

const changelogContainer = document.getElementById('changelog');

changelogData.forEach(item => {
  const div = document.createElement('div');
  div.classList.add('changelog-main-background');

  const dateElem = document.createElement('div');
  dateElem.className = 'change-date';
  dateElem.textContent = item.date;
  div.appendChild(dateElem);

  item.changes.forEach(change => {
    const changeElem = document.createElement('div');
    changeElem.className = 'change-text';
    changeElem.textContent = change;
    div.appendChild(changeElem);
  });

  changelogContainer.appendChild(div);
});