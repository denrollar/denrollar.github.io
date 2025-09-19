/* КИНО */

const cinema = [
  { title: "Адвокат дьявола", year: "1997", type: "Фильм", cover: "resources/images/covers/cinema/default.webp" },
  { title: "Американская история X", year: "2000", type: "Фильм", cover: "resources/images/covers/cinema/default.webp" },
  { title: "Американский психопат", year: "1998", type: "Фильм", cover: "resources/images/covers/cinema/default.webp" },
  { title: "Аркейн", year: "2021", type: "Сериал", cover: "resources/images/covers/cinema/default.webp" },
  { title: "Анора", year: "2024", type: "Фильм", cover: "resources/images/covers/cinema/default.webp" },
  { title: "Брандашмыг", year: "2018", type: "Фильм", cover: "resources/images/covers/cinema/default.webp" },
  { title: "Бегущий по лезвию", year: "1982", type: "Фильм", cover: "resources/images/covers/cinema/default.webp" },
  { title: "Бегущий по лезвию 2049", year: "2017", type: "Фильм", cover: "resources/images/covers/cinema/default.webp" },
  { title: "Без гроша", year: "2019", type: "Сериал", cover: "resources/images/covers/cinema/default.webp" },
  { title: "Бердмэн", year: "2014", type: "Фильм", cover: "resources/images/covers/cinema/default.webp" },
  { title: "Бесславные ублюдки", year: "2009", type: "Фильм", cover: "resources/images/covers/cinema/default.webp" },
  { title: "Богемская рапсодия", year: "2018", type: "Фильм", cover: "resources/images/covers/cinema/default.webp" },
  { title: "Бойцовский клуб", year: "1999", type: "Фильм", cover: "resources/images/covers/cinema/default.webp" },
  { title: "Большой куш", year: "2000", type: "Фильм", cover: "resources/images/covers/cinema/default.webp" },
  { title: "Братья", year: "2009", type: "Фильм", cover: "resources/images/covers/cinema/default.webp" },
];

const containerCinema = document.getElementById("cinema");
let htmlCinema = '';

cinema.forEach(item => {
  htmlCinema += `
        <div class="container-for-art">
          <div class="covers-for-art"><img src="${item.cover}" class="covers-for-art" /></div>
          <div class="hidden-container-404">
            <div class="section-title">${item.title}</div>
            <div class="section-subtitle">${item.type.toUpperCase()} · ${item.year}</div>
          </div>
        </div>`;
});

containerCinema.innerHTML = htmlCinema;

/* АЛЬБОМЫ */

const albums = [
  { title: "Favourite Worst Nightmare", artist: "Arctic Monkeys", year: "2007", cover: "resources/images/covers/albums/arcticmonkeys-favouriteworstnightmare.webp" },
  { title: "Blur", artist: "Blur", year: "1997", cover: "resources/images/covers/albums/blur-blur.webp" },
  { title: "The Melodic Blue", artist: "Baby Keem", year: "2021", cover: "resources/images/covers/albums/babykeem-themelodicblue.webp" },
  { title: "I Decided", artist: "Big Sean", year: "2017", cover: "resources/images/covers/albums/bigsean-idecited.webp" },
  { title: "Peekaboo", artist: "Big Baby Tape, aarne", year: "2024", cover: "resources/images/covers/albums/bigbabytape-peekaboo.webp" },
];

const containerAlbums = document.getElementById("albums");
let htmlAlbums = '';

albums.forEach(item => {
  htmlAlbums += `
        <div class="container-for-art">
          <div class="covers-for-art"><img src="${item.cover}" class="covers-for-art" /></div>
          <div class="hidden-container-404">
            <div class="section-title">${item.title}</div>
            <div class="section-subtitle">${item.artist.toUpperCase()} · ${item.year}</div>
          </div>
        </div>`;
});

containerAlbums.innerHTML = htmlAlbums;

/* ЛИТЕРАТУРА */

const books = [
  { title: "Цветы для Элджернона", author: "Дэниел Киз", year: "1959", cover: "resources/images/covers/books/default.webp" },
  { title: "Великий Гэтсби", author: "Фрэнсис Фицджеральд", year: "1925", cover: "resources/images/covers/books/default.webp" },
  { title: "Мартин Иден", author: "Джек Лондон", year: "1909", cover: "resources/images/covers/books/default.webp" },
  { title: "451 градус по Фаренгейту", author: "Рэй Брэдбери", year: "1953", cover: "resources/images/covers/books/default.webp" },
  { title: "1984", author: "Джордж Оруэлл", year: "1949", cover: "resources/images/covers/books/default.webp" },
];

const containerBooks = document.getElementById("books");
let htmlBooks = '';

books.forEach(item => {
  htmlBooks += `
        <div class="container-for-art">
          <div class="covers-for-art"><img src="${item.cover}" class="covers-for-art" /></div>
          <div class="hidden-container-404">
            <div class="section-title">${item.title}</div>
            <div class="section-subtitle">${item.author.toUpperCase()} · ${item.year}</div>
          </div>
        </div>`;
});

containerBooks.innerHTML = htmlBooks;

/* ВИДЕОИГРЫ */

const videogames = [
  { title: "Battletoads & Double Dragon", platform: "NES", year: "1993", cover: "resources/images/covers/games/battletoadsanddoubledragon-nes.webp" },
  { title: "Disney’s Aladdin", platform: "SNES", year: "1993", cover: "resources/images/covers/games/aladdin-snes.webp" },
  { title: "Far Cry 3", platform: "ПК", year: "2012", cover: "resources/images/covers/games/farcray3.webp" },
  { title: "Gothic 3", platform: "ПК", year: "2004", cover: "resources/images/covers/games/gothic3.webp" },
  { title: "God Of War", platform: "ПК", year: "2018", cover: "resources/images/covers/games/godofwar2018.webp" },
  { title: "Grand Theft Auto 3", platform: "ПК", year: "2001", cover: "resources/images/covers/games/gta3.webp" },
  { title: "Grand Theft Auto: Vice City", platform: "ПК", year: "2002", cover: "resources/images/covers/games/gta-vicecity.webp" },
  { title: "Grand Theft Auto: San Andreas", platform: "ПК", year: "2004", cover: "resources/images/covers/games/gta-sanandreas.webp" },
  { title: "Half-Life 2", platform: "ПК", year: "2004", cover: "resources/images/covers/games/half-life2.webp" },
  { title: "Life is Strange: True Colors", platform: "XBOX", year: "2021", cover: "resources/images/covers/games/lifeisstrange-truecolors.webp" },
  { title: "Minecraft", platform: "ПК", year: "2009", cover: "resources/images/covers/games/minecraft.webp" },
  { title: "Portal", platform: "ПК", year: "2007", cover: "resources/images/covers/games/portal.webp" },
  { title: "Portal 2", platform: "ПК", year: "2011", cover: "resources/images/covers/games/portal2.webp" },
  { title: "Risen", platform: "ПК", year: "2009", cover: "resources/images/covers/games/risen.webp" },
  { title: "The Evil Within 2", platform: "XBOX", year: "2017", cover: "resources/images/covers/games/theevilwithin2.webp" },
  { title: "The Legend of Zelda: The Minish Cap", platform: "GBA", year: "2004", cover: "resources/images/covers/games/tloz-theminishcap.webp" },
  { title: "Valiant Hearts: The Great War", platform: "ПК", year: "2014", cover: "resources/images/covers/games/valiantheart-thegreatwar.webp" },
];

const containerVideogames = document.getElementById("videogames");
let htmlVideogames = '';

videogames.forEach(item => {
  htmlVideogames += `
        <div class="container-for-art">
          <div class="covers-for-art"><img src="${item.cover}" class="covers-for-art" /></div>
          <div class="hidden-container-404">
            <div class="section-title">${item.title}</div>
            <div class="section-subtitle">${item.platform.toUpperCase()} · ${item.year}</div>
          </div>
        </div>`;
});

containerVideogames.innerHTML = htmlVideogames;