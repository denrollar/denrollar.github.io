/* П1 */

const ach1 = [
  { name: "Без алкоголя: 14 месяцев", xtext: "Отказ от спиртных напитков", date: "7 ОКТЯБРЯ 2025", image: "resources/images/icons/alcohol.webp" },
];

const containerAch1 = document.getElementById("ach1");
let htmlAch1 = '';

ach1.forEach(item => {
  htmlAch1 += `
    <div class="block-achievements">
      <div class="hidden-block-1">
        <div class="section-title">${item.name}</div>
       <div class="ach-section-title">${item.xtext}</div>
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
  { name: "Отжимания: 15 повторений", xtext: "Лучший результат за 1 подход", date: "22 ОКТЯБРЯ 2025", image: "resources/images/icons/gallery.svg" },
  { name: "Приседания: 50 повторений", xtext: "Лучший результат за 1 подход", date: "14 ОКТЯБРЯ 2025", image: "resources/images/icons/gallery.svg" },
];

const containerAch2 = document.getElementById("ach2");
let htmlAch2 = '';

ach2.forEach(item => {
  htmlAch2 += `
    <div class="block-achievements">
      <div class="hidden-block-1">
        <div class="section-title">${item.name}</div>
       <div class="ach-section-title">${item.xtext}</div>
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
  { name: "Посмотрено кино: 100 шт", xtext: "Фильмы, сериалы и мультфильмы", date: "23 ОКТЯБРЯ 2025", image: "resources/images/icons/cinema.webp" },
  { name: "Прочитано книг: 5 шт", xtext: "От начала до конца", date: "ВЕСНА 2024", image: "resources/images/icons/book.webp" },
  { name: "Прослушано альбомов: 100 шт", xtext: "От начала до конца", date: "23 ОКТЯБРЯ 2025", image: "resources/images/icons/album.webp" },
  { name: "Завершено видеоигр: 25 шт", xtext: "Исключаются просмотренные", date: "2025", image: "resources/images/icons/games.webp" },
  { name: "God of War: 100% завершено", xtext: "ПК · 2018", date: "2023", image: "resources/images/icons/s2.webp" },
];

const containerAch3 = document.getElementById("ach3");
let htmlAch3 = '';

ach3.forEach(item => {
  htmlAch3 += `
    <div class="block-achievements">
      <div class="hidden-block-1">
        <div class="section-title">${item.name}</div>
       <div class="ach-section-title">${item.xtext}</div>
        <div class="section-subtitle">${item.date}</div>
      </div>
      <div class="icon7">
        <img src="${item.image}" class="icon7" alt="${item.name}">
      </div>
    </div>
  `;
});

containerAch3.innerHTML = htmlAch3;

