const changelogData = [
  {
    date: "20 ноября 2025",
    changes: [
      "Запрещается любое упоминание и обсуждение политических тем",
      "Запрещается отправлять сообщения, начинающиеся со строчной буквы",
      "Запрещается любые формы несогласия, возражений или конфликтного поведения по отношению к членам семьи",
      "Запрещается использовать слова-паразиты, нецензурную лексику и другие формы ненормативной речи",
      "Запрещается внутреннее недовольство, токсичность и негатив",
      "Вводится обязательная расширенная ежедневная личная гигиена",
      "Вводится обязательная ежедневная физическая тренировка",
      "Вводится обязательный ежедневный утренний подъём",
      "Вводится обязательный цифровой минимализм и цифровая гигиена",
      "Вводится обязательный циклический режим питания: 14 дней — здоровое, 1 день — без ограничений",
      "Снимается запрет на проявление романтической привлекательности",
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