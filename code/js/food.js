const daysData = [
    {
    dateRange: "15 ОКТЯБРЯ 2025",
    exercises: [
      { name: "Калории", count: "732" },
      { name: "Белки", count: "34,1 г" },
      { name: "Жиры", count: "34,3 г" },
      { name: "Углеводы", count: "77,8 г" },
      { name: "Сахар", count: "28.2 г" },
    ]
  },
  {
    dateRange: "14 ОКТЯБРЯ 2025",
    exercises: [
      { name: "Калории", count: "838" },
      { name: "Белки", count: "32,5 г" },
      { name: "Жиры", count: "8,3 г" },
      { name: "Углеводы", count: "170 г" },
      { name: "Сахар", count: "2 г" },
    ]
  },
  {
    dateRange: "13 ОКТЯБРЯ 2025",
    exercises: [
      { name: "Калории", count: "838" },
      { name: "Белки", count: "32,5 г" },
      { name: "Жиры", count: "8,3 г" },
      { name: "Углеводы", count: "170 г" },
      { name: "Сахар", count: "2 г" },
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
