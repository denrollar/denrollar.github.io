/* П1 */

const ach1 = [
  { name: "Без алкоголя: 16 месяцев", xtext: "Отказ от спиртных напитков", date: "7 ДЕКАБРЯ 2025", image: "resources/images/icons/alcohol.webp" },
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
        <img src="${item.image}" class="icon7">
      </div>
    </div>
  `;
});

containerAch1.innerHTML = htmlAch1;

/* П2 */

const ach2 = [
  { name: "Отжимания: 20 повторений", xtext: "Лучший результат за 1 подход", date: "28 ОКТЯБРЯ 2025", text15: "20" },
  { name: "Приседания: 100 повторений", xtext: "Лучший результат за 1 подход", date: "23 ОКТЯБРЯ 2025", text15: "100" },
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
      <div class="text-arch-medal">${item.text15}</div>
    </div>
  `;
});

containerAch2.innerHTML = htmlAch2;

/* П3 */

const ach3 = [
  { name: "Посмотрено кино: 146 шт", xtext: "Фильмы, сериалы и мультфильмы", date: "НАСТОЯЩЕЕ ВРЕМЯ", image: "resources/images/icons/cinema.webp" },
  { name: "Прочитано книг: 5 шт", xtext: "От начала до конца", date: "НАСТОЯЩЕЕ ВРЕМЯ", image: "resources/images/icons/book.webp" },
  { name: "Прослушано альбомов: 123 шт", xtext: "От начала до конца", date: "НАСТОЯЩЕЕ ВРЕМЯ", image: "resources/images/icons/album.webp" },
  { name: "Завершено видеоигр: 25 шт", xtext: "Исключаются просмотренные", date: "НАСТОЯЩЕЕ ВРЕМЯ", image: "resources/images/icons/games.webp" },
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
        <img src="${item.image}" class="icon7">
      </div>
    </div>
  `;
});

containerAch3.innerHTML = htmlAch3;

/* П4 */

const ach4 = [
  { name: "GTA: San Andreas - 100% завершено", xtext: "ПК · 2004", date: "04 НОЯБРЯ 2025", image: "resources/images/icons/s2.webp" },
  { name: "God of War - 100% завершено", xtext: "ПК · 2018", date: "ОКТЯБРЬ 2023", image: "resources/images/icons/s2.webp" },
];

const containerAch4 = document.getElementById("ach4");
let htmlAch4 = '';

ach4.forEach(item => {
  htmlAch4 += `
    <div class="block-achievements">
      <div class="hidden-block-1">
        <div class="section-title">${item.name}</div>
       <div class="ach-section-title">${item.xtext}</div>
        <div class="section-subtitle">${item.date}</div>
      </div>
      <div class="icon7">
        <img src="${item.image}" class="icon7">
      </div>
    </div>
  `;
});

containerAch4.innerHTML = htmlAch4;
