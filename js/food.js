const daysData = [
  {
    dateRange: "02 НОЯБРЯ 2025",
    exercises: [
      { name: "Калории", count: "398" },
      { name: "Белки", count: "15,3 г" },
      { name: "Жиры", count: "3,7 г" },
      { name: "Углеводы", count: "82,2 г" },
      { name: "Сахар", count: "11 г" },
    ]
  },
  {
    dateRange: "01 НОЯБРЯ 2025",
    exercises: [
      { name: "Калории", count: "463" },
      { name: "Белки", count: "21,4 г" },
      { name: "Жиры", count: "9,6 г" },
      { name: "Углеводы", count: "78,3 г" },
      { name: "Сахар", count: "8,8 г" },
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
