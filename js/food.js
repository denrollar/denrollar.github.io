const daysData = [
  {
    dateRange: "07 ЯНВАРЯ 2026",
    exercises: [
      { name: "Калории", count: "0" },
      { name: "Белки", count: "0 г" },
      { name: "Жиры", count: "0 г" },
      { name: "Углеводы", count: "0 г" },
      { name: "Сахар", count: "0 г" },
    ]
  },
  {
    dateRange: "06 ЯНВАРЯ 2026",
    exercises: [
      { name: "Калории", count: "0" },
      { name: "Белки", count: "0 г" },
      { name: "Жиры", count: "0 г" },
      { name: "Углеводы", count: "0 г" },
      { name: "Сахар", count: "0 г" },
    ]
  },
  {
    dateRange: "05 ЯНВАРЯ 2026",
    exercises: [
      { name: "Калории", count: "0" },
      { name: "Белки", count: "0 г" },
      { name: "Жиры", count: "0 г" },
      { name: "Углеводы", count: "0 г" },
      { name: "Сахар", count: "0 г" },
    ]
  },
  {
    dateRange: "04 ЯНВАРЯ 2026",
    exercises: [
      { name: "Калории", count: "0" },
      { name: "Белки", count: "0 г" },
      { name: "Жиры", count: "0 г" },
      { name: "Углеводы", count: "0 г" },
      { name: "Сахар", count: "0 г" },
    ]
  },
  {
    dateRange: "03 ЯНВАРЯ 2026",
    exercises: [
      { name: "Калории", count: "0" },
      { name: "Белки", count: "0 г" },
      { name: "Жиры", count: "0 г" },
      { name: "Углеводы", count: "0 г" },
      { name: "Сахар", count: "0 г" },
    ]
  },
  {
    dateRange: "02 ЯНВАРЯ 2026",
    exercises: [
      { name: "Калории", count: "0" },
      { name: "Белки", count: "0 г" },
      { name: "Жиры", count: "0 г" },
      { name: "Углеводы", count: "0 г" },
      { name: "Сахар", count: "0 г" },
    ]
  },
  {
    dateRange: "01 ЯНВАРЯ 2026",
    exercises: [
      { name: "Калории", count: "0" },
      { name: "Белки", count: "0 г" },
      { name: "Жиры", count: "0 г" },
      { name: "Углеводы", count: "0 г" },
      { name: "Сахар", count: "0 г" },
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
