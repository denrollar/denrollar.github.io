const achievements = [
  {
    name: "Без алкоголя - 1 год",
    date: "7 АВГУСТА 2025",
    image: "resources/images/icons/alcohol.webp"
  },
];

const container = document.getElementById('achievements-container');

achievements.forEach(item => {
  const block = document.createElement('div');
  block.classList.add('block-achievements');
  
  block.innerHTML = `
    <div class="hidden-block-1">
      <div class="section-title">${item.name}</div>
      <div class="section-subtitle">${item.date}</div>
    </div>
    <div class="icon7">
      <img src="${item.image}" class="icon7" alt="${item.name}">
    </div>
  `;
  
  container.appendChild(block);
});