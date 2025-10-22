/* П1 */

const ach1 = [
  { name: "Без алкоголя - 14 месяцев", date: "7 ОКТЯБРЯ 2025", image: "resources/images/icons/alcohol.webp" },
];

const containerAch1 = document.getElementById("ach1");
let htmlAch1 = '';

ach1.forEach(item => {
  htmlAch1 += `
    <div class="block-achievements">
      <div class="hidden-block-1">
        <div class="section-title">${item.name}</div>
        <div class="section-subtitle">${item.date}</div>
      </div>
      <div class="icon7">
        <img src="${item.image}" class="icon7" alt="${item.name}">
      </div>
    </div>
  `;
});

containerAch1.innerHTML = htmlAch1;

/* П2 */

const ach2 = [
  { name: "Отжимания - 10 шт", date: "ЛУЧШИЙ РЕЗУЛЬТАТ · 13 ОКТБРЯ 2025", image: "resources/images/icons/gallery.svg" },
  { name: "Приседания - 50 шт", date: "ЛУЧШИЙ РЕЗУЛЬТАТ · 14 ОКТБРЯ 2025", image: "resources/images/icons/gallery.svg" },
];

const containerAch2 = document.getElementById("ach2");
let htmlAch2 = '';

ach2.forEach(item => {
  htmlAch2 += `
    <div class="block-achievements">
      <div class="hidden-block-1">
        <div class="section-title">${item.name}</div>
        <div class="section-subtitle">${item.date}</div>
      </div>
      <div class="icon7">
        <img src="${item.image}" class="icon7" alt="${item.name}">
      </div>
    </div>
  `;
});

containerAch2.innerHTML = htmlAch2;

/* П3 */

const ach3 = [
  { name: "Посмотрено кино - 100 шт", date: "2025", image: "resources/images/icons/gallery.svg" },
  { name: "Прослушано альбомов - 100 шт", date: "2025", image: "resources/images/icons/gallery.svg" },
  { name: "Прочитано книг - 5 шт", date: "2024", image: "resources/images/icons/gallery.svg" },
  { name: "Завершено видеоигр - 5 шт", date: "2025", image: "resources/images/icons/gallery.svg" },
  { name: "God Of War (2018) - 100% завершено", date: "2023", image: "resources/images/covers/games/godofwar2018.webp" },
];

const containerAch3 = document.getElementById("ach3");
let htmlAch3 = '';

ach3.forEach(item => {
  htmlAch3 += `
    <div class="block-achievements">
      <div class="hidden-block-1">
        <div class="section-title">${item.name}</div>
        <div class="section-subtitle">${item.date}</div>
      </div>
      <div class="icon7">
        <img src="${item.image}" class="icon7" alt="${item.name}">
      </div>
    </div>
  `;
});

containerAch3.innerHTML = htmlAch3;

