const changelogData = [
    {
    date: "8 октября 2025",
    changes: [
      "Прекращение использования нецензурной лексики, неправильных англицизмов и слов-паразитов в устной и письменной речи",
      "Переход на рациональное, полезное и сбалансированное питание",
    ]
  },
    {
    date: "11 августа 2025",
    changes: [
      "Диагностирован хронический гастрит, хеликобактериоз 3-ей группы, с атрофией желез и рубцовыми изменениями слизистой желудка",
    ]
  },
  {
    date: "30 мая 2025",
    changes: [
      "Прекращение поддержки деструктивного поведения, психических отклонений и суицидальных наклонностей",
      "Прекращение поддержки романтизации депрессии, меланхолии, апатии, кризиса среднего возраста и других проявлений, ведущих к саморазрушению",
    ]
  },
  {
    date: "7 августа 2024",
    changes: [
      "Прекращение употребления спиртных напитков",
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