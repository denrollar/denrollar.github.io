const daysData = [
  {
    dateRange: "17 ОКТЯБРЯ 2025",
    exercises: [
      { name: "ЛФК", count: "0 мин" },
      { name: "Отжимания", count: "0" }
    ]
  },
  {
    dateRange: "15 ОКТЯБРЯ 2025",
    exercises: [
      { name: "ЛФК", count: "0 мин" },
      { name: "Отжимания", count: "0" }
    ]
  },
  {
    dateRange: "13 ОКТЯБРЯ 2025",
    exercises: [
      { name: "ЛФК", count: "0 мин" },
      { name: "Отжимания", count: "0" }
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
    <span class="exercise-name">УПРАЖНЕНИЕ</span>
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