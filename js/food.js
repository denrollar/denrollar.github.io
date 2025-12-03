const daysData = [
  {
    dateRange: "03 ДЕКАБРЯ 2025",
    exercises: [
      { name: "Калории", count: "1080" },
      { name: "Белки", count: "37 г" },
      { name: "Жиры", count: "7 г" },
      { name: "Углеводы", count: "200 г" },
      { name: "Сахар", count: "3 г" },
    ]
  },
  {
    dateRange: "02 ДЕКАБРЯ 2025",
    exercises: [
      { name: "Калории", count: "170" },
      { name: "Белки", count: "4 г" },
      { name: "Жиры", count: "2 г" },
      { name: "Углеводы", count: "30 г" },
      { name: "Сахар", count: "0 г" },
    ]
  },
  {
    dateRange: "01 ДЕКАБРЯ 2025",
    exercises: [
      { name: "Калории", count: "971" },
      { name: "Белки", count: "33,6 г" },
      { name: "Жиры", count: "8,3 г" },
      { name: "Углеводы", count: "182 г" },
      { name: "Сахар", count: "19 г" },
    ]
  },
];

function createDayBlock(data) {
  const dayBlock = document.createElement('div');
  dayBlock.classList.add('day-block');

  const dateDiv = document.createElement('div');
  dateDiv.classList.add('block-date');
  dateDiv.textContent = data.dateRange;
  dayBlock.appendChild(dateDiv);

  const formPair = document.createElement('div');
  formPair.classList.add('form-pair');

  const formColumn = document.createElement('div');
  formColumn.classList.add('form-column');

  const headerGroup = document.createElement('div');
  headerGroup.classList.add('form-group');
  headerGroup.innerHTML = `
    <span class="exercise-name">ТИП</span>
    <span class="exercise-count">КОЛИЧЕСТВО</span>
  `;
  formColumn.appendChild(headerGroup);

  data.exercises.forEach(ex => {
    const group = document.createElement('div');
    group.classList.add('form-group');
    group.innerHTML = `
      <span class="exercise-name">${ex.name}</span>
      <span class="exercise-count">${ex.count}</span>
    `;
    formColumn.appendChild(group);
  });

  formPair.appendChild(formColumn);
  dayBlock.appendChild(formPair);

  return dayBlock;
}

const container = document.getElementById('exercise-container');

daysData.forEach(day => {
  const block = createDayBlock(day);
  container.appendChild(block);
});
