const daysData = [
  {
    dateRange: "19 ОКТЯБРЯ 2025",
    exercises: [
      { name: "Отжимания (б/в)", count: "3x14" },
    ]
  },
  {
    dateRange: "17 ОКТЯБРЯ 2025",
    exercises: [
      { name: "Приседания (б/в)", count: "1x65" },
      { name: "Приседания (сумо, б/в)", count: "1x65" },
      { name: "Приседания (выпады)", count: "1x30" },
      { name: "Мостик (б/в)", count: "1x60" }
    ]
  },
  {
    dateRange: "16 ОКТЯБРЯ 2025",
    exercises: [
      { name: "Отжимания (б/в)", count: "3x12" },
      { name: "Отжимания (б/в, алмазные)", count: "3x12" },
      { name: "Отжимания (б/в, в наклоне)", count: "3x12" },
    ]
  },
  {
    dateRange: "14 ОКТЯБРЯ 2025",
    exercises: [
      { name: "Приседания (б/в)", count: "1x50" },
      { name: "Приседания (сумо, б/в)", count: "1x50" },
      { name: "Мостик (б/в)", count: "1x50" }
    ]
  },
  {
    dateRange: "13 ОКТЯБРЯ 2025",
    exercises: [
      { name: "Отжимания (б/в)", count: "3x10" },
      { name: "Отжимания (б/в, алмазные)", count: "3x10" },
      { name: "Отжимания (б/в, в наклоне)", count: "3x10" },
      { name: "Отжимания (с подн. ног.)", count: "1x10" }
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
