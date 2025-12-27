/* КИНО */

const cinema = [
  { title: "Адвокат дьявола", year: "1997", type: "Фильм", cover: "resources/images/covers/cinema/advokatdevil.webp" },
  { title: "Аладдин", year: "1992", type: "Мультфильм", cover: "resources/images/covers/cinema/aladdin.webp" },
  { title: "Аладдин: Возвращение Джафара", year: "1994", type: "Мультфильм", cover: "resources/images/covers/cinema/aladdin2.webp" },
  { title: "Американская история X", year: "2000", type: "Фильм", cover: "resources/images/covers/cinema/amx.webp" },
  { title: "Американский психопат", year: "2000", type: "Фильм", cover: "resources/images/covers/cinema/americanpsycho.webp" },
  { title: "Аркейн", year: "2021", type: "Мультсериал", cover: "resources/images/covers/cinema/arcane.webp" },
  { title: "Анора", year: "2024", type: "Фильм", cover: "resources/images/covers/cinema/anora.webp" },
  { title: "Брандашмыг", year: "2018", type: "Фильм", cover: "resources/images/covers/cinema/brsh.webp" },
  { title: "Бегущий по лезвию", year: "1982", type: "Фильм", cover: "resources/images/covers/cinema/bladerunner.webp" },
  { title: "Бегущий по лезвию 2049", year: "2017", type: "Фильм", cover: "resources/images/covers/cinema/bladerunner2049.webp" },
  { title: "Без гроша", year: "2019", type: "Сериал", cover: "resources/images/covers/cinema/brassic.webp" },
  { title: "Бердмэн", year: "2014", type: "Фильм", cover: "resources/images/covers/cinema/birdman.webp" },
  { title: "Бесславные ублюдки", year: "2009", type: "Фильм", cover: "resources/images/covers/cinema/basterds.webp" },
  { title: "Богемская рапсодия", year: "2018", type: "Фильм", cover: "resources/images/covers/cinema/rhapsody.webp" },
  { title: "Бойцовский клуб", year: "1999", type: "Фильм", cover: "resources/images/covers/cinema/fightclub.webp" },
  { title: "Большой куш", year: "2000", type: "Фильм", cover: "resources/images/covers/cinema/snatch.webp" },
  { title: "Братья", year: "2009", type: "Фильм", cover: "resources/images/covers/cinema/brothers.webp" },
  { title: "В поисках Аляски", type: "СЕРИАЛ", year: "2019", cover: "resources/images/covers/cinema/alaska.webp" },
  { title: "Ван Гог: На пороге вечности", type: "ФИЛЬМ", year: "2018", cover: "resources/images/covers/cinema/vg.webp" },
  { title: "Великий Гэтсби", type: "ФИЛЬМ", year: "2013", cover: "resources/images/covers/cinema/greatgatsby.webp" },
  { title: "Вечное сияние чистого разума", type: "ФИЛЬМ", year: "2004", cover: "resources/images/covers/cinema/eftrr.webp" },
  { title: "Властелин колец: Братство кольца", type: "ФИЛЬМ", year: "2001", cover: "resources/images/covers/cinema/tlotr1.webp" },
  { title: "Властелин колец: Две крепости", type: "ФИЛЬМ", year: "2002", cover: "resources/images/covers/cinema/tlotr2.webp" },
  { title: "Властелин колец: Возвращение короля", type: "ФИЛЬМ", year: "2003", cover: "resources/images/covers/cinema/tlotr3.webp" },
  { title: "Волк с Уолл-стрит", type: "ФИЛЬМ", year: "2013", cover: "resources/images/covers/cinema/thewolfofwallstreet.webp" },
  { title: "Время", type: "ФИЛЬМ", year: "2011", cover: "resources/images/covers/cinema/time.webp" },
  { title: "Время", type: "ФИЛЬМ", year: "2021", cover: "resources/images/covers/cinema/time2.webp" },
  { title: "Гарри Поттер и Философский камень", type: "ФИЛЬМ", year: "2001", cover: "resources/images/covers/cinema/hp1.webp" },
  { title: "Гарри Поттер и Тайная комната", type: "ФИЛЬМ", year: "2002", cover: "resources/images/covers/cinema/hp2.webp" },
  { title: "Гарри Поттер и Узник Азкабана", type: "ФИЛЬМ", year: "2004", cover: "resources/images/covers/cinema/hp3.webp" },
  { title: "Гарри Поттер и Кубок огня", type: "ФИЛЬМ", year: "2005", cover: "resources/images/covers/cinema/hp4.webp" },
  { title: "Гарри Поттер и Орден Феникса", type: "ФИЛЬМ", year: "2007", cover: "resources/images/covers/cinema/hp5.webp" },
  { title: "Гарри Поттер и Принц-полукровка", type: "ФИЛЬМ", year: "2009", cover: "resources/images/covers/cinema/hp6.webp" },
  { title: "Гарри Поттер и Дары Смерти: Ч1", type: "ФИЛЬМ", year: "2010", cover: "resources/images/covers/cinema/hp7.webp" },
  { title: "Гарри Поттер и Дары Смерти: Ч2", type: "ФИЛЬМ", year: "2011", cover: "resources/images/covers/cinema/hp8.webp" },
  { title: "Гордость и предубеждение", type: "ФИЛЬМ", year: "2005", cover: "resources/images/covers/cinema/pp.webp" },
  { title: "Город лжи", type: "ФИЛЬМ", year: "2018", cover: "resources/images/covers/cinema/cityoflies.webp" },
  { title: "День сурка", type: "ФИЛЬМ", year: "1993", cover: "resources/images/covers/cinema/d20.webp" },
  { title: "Джанго освобожденный", type: "ФИЛЬМ", year: "2012", cover: "resources/images/covers/cinema/django.webp" },
  { title: "Джентльмены", type: "ФИЛЬМ", year: "2019", cover: "resources/images/covers/cinema/thegentlemen.webp" },
  { title: "Джокер", type: "ФИЛЬМ", year: "2019", cover: "resources/images/covers/cinema/joker2019.webp" },
  { title: "Дневник баскетболиста", type: "ФИЛЬМ", year: "1995", cover: "resources/images/covers/cinema/tbd.webp" },
  { title: "Дневник памяти", type: "ФИЛЬМ", year: "2004", cover: "resources/images/covers/cinema/thenotebook.webp" },
  { title: "Довод", type: "ФИЛЬМ", year: "2020", cover: "resources/images/covers/cinema/tenet.webp" },
  { title: "Долгая прогулка", type: "ФИЛЬМ", year: "2025", cover: "resources/images/covers/cinema/d21.webp" },
  { title: "Дориан Грей", type: "ФИЛЬМ", year: "2009", cover: "resources/images/covers/cinema/doriangray.webp" },
  { title: "Достучаться до небес", type: "ФИЛЬМ", year: "1997", cover: "resources/images/covers/cinema/khd.webp" },
  { title: "Драйв", type: "ФИЛЬМ", year: "2011", cover: "resources/images/covers/cinema/drive.webp" },
  { title: "Дурак", type: "ФИЛЬМ", year: "2014", cover: "resources/images/covers/cinema/dyrak.webp" },
  { title: "Дюнкерк", type: "ФИЛЬМ", year: "2017", cover: "resources/images/covers/cinema/dunkirk.webp" },
  { title: "Еще по одной", type: "ФИЛЬМ", year: "2020", cover: "resources/images/covers/cinema/druk.webp" },
  { title: "Жизнь прекрасна", type: "ФИЛЬМ", year: "1997", cover: "resources/images/covers/cinema/bella.webp" },
  { title: "Загадочная история Бенджамина Баттона", type: "ФИЛЬМ", year: "2008", cover: "resources/images/covers/cinema/batom.webp" },
  { title: "Зеленая миля", type: "ФИЛЬМ", year: "1999", cover: "resources/images/covers/cinema/thegreenmile.webp" },
  { title: "Игра на понижение", type: "ФИЛЬМ", year: "2015", cover: "resources/images/covers/cinema/ggg.webp" },
  { title: "Игры разума", type: "ФИЛЬМ", year: "2001", cover: "resources/images/covers/cinema/mind.webp" },
  { title: "Идиократия", type: "ФИЛЬМ", year: "2005", cover: "resources/images/covers/cinema/idiocracy.webp" },
  { title: "Интерстеллар", type: "ФИЛЬМ", year: "2014", cover: "resources/images/covers/cinema/interstellar.webp" },
  { title: "Искупление", type: "ФИЛЬМ", year: "2007", cover: "resources/images/covers/cinema/atonement.webp" },
  { title: "Карты, деньги, два ствола", type: "ФИЛЬМ", year: "1998", cover: "resources/images/covers/cinema/kdds.webp" },
  { title: "Крайний космос", type: "МУЛЬТСЕРИАЛ", year: "2018", cover: "resources/images/covers/cinema/finalspace.webp" },
  { title: "Криминальное чтиво", type: "ФИЛЬМ", year: "1994", cover: "resources/images/covers/cinema/pulpfiction.webp" },
  { title: "Кролик Джоджо", type: "ФИЛЬМ", year: "2019", cover: "resources/images/covers/cinema/jojorabbit.webp" },
  { title: "Леон", type: "ФИЛЬМ", year: "1994", cover: "resources/images/covers/cinema/leon.webp" },
  { title: "Лови волну", type: "МУЛЬТФИЛЬМ", year: "2007", cover: "resources/images/covers/cinema/surfup.webp" },
  { title: "Лолита", type: "ФИЛЬМ", year: "1997", cover: "resources/images/covers/cinema/lolita.webp" },
  { title: "Майнкрафт", type: "ФИЛЬМ", year: "2025", cover: "resources/images/covers/cinema/minecraft.webp" },
  { title: "Мальчик в полосатой пижаме", type: "ФИЛЬМ", year: "2008", cover: "resources/images/covers/cinema/boy.webp" },
  { title: "Маяк", type: "ФИЛЬМ", year: "2019", cover: "resources/images/covers/cinema/thelighthouse.webp" },
  { title: "Место под соснами", type: "ФИЛЬМ", year: "2012", cover: "resources/images/covers/cinema/mps.webp" },
  { title: "Миллионер из трущоб", type: "ФИЛЬМ", year: "2008", cover: "resources/images/covers/cinema/mit.webp" },
  { title: "Мистер Робот", type: "СЕРИАЛ", year: "2015", cover: "resources/images/covers/cinema/mrrobot.webp" },
  { title: "Молчание ягнят", type: "ФИЛЬМ", year: "1990", cover: "resources/images/covers/cinema/mya.webp" },
  { title: "Морпехи", type: "ФИЛЬМ", year: "2005", cover: "resources/images/covers/cinema/jarhead.webp" },
  { title: "Назад в будущее", type: "ФИЛЬМ", year: "1985", cover: "resources/images/covers/cinema/bttf1.webp" },
  { title: "Назад в будущее 2", type: "ФИЛЬМ", year: "1989", cover: "resources/images/covers/cinema/bttf2.webp" },
  { title: "Назад в будущее 3", type: "ФИЛЬМ", year: "1990", cover: "resources/images/covers/cinema/bttf3.webp" },
  { title: "Начало", type: "ФИЛЬМ", year: "2010", cover: "resources/images/covers/cinema/inception.webp" },
  { title: "На игле", type: "ФИЛЬМ", year: "1995", cover: "resources/images/covers/cinema/t12.webp" },
  { title: "На игле 2", type: "ФИЛЬМ", year: "2017", cover: "resources/images/covers/cinema/t1.webp" },
  { title: "Ночной рейс", type: "ФИЛЬМ", year: "2010", cover: "resources/images/covers/cinema/redeye.webp" },
  { title: "Общество мертвых поэтов", type: "ФИЛЬМ", year: "1989", cover: "resources/images/covers/cinema/deadpoetssociet.webp" },
  { title: "Однажды в Голливуде", type: "ФИЛЬМ", year: "2019", cover: "resources/images/covers/cinema/hlr.webp" },
  { title: "Одни из нас", type: "СЕРИАЛ", year: "2023", cover: "resources/images/covers/cinema/tlou.webp" },
  { title: "Олдбой", type: "ФИЛЬМ", year: "2003", cover: "resources/images/covers/cinema/oldboi.webp" },
  { title: "Оппенгеймер", type: "ФИЛЬМ", year: "2023", cover: "resources/images/covers/cinema/oppenheimer.webp" },
  { title: "Останься", type: "ФИЛЬМ", year: "2005", cover: "resources/images/covers/cinema/stay.webp" },
  { title: "Остров проклятых", type: "ФИЛЬМ", year: "2009", cover: "resources/images/covers/cinema/shutterisland.webp" },
  { title: "Отбросы", type: "СЕРИАЛ", year: "2009", cover: "resources/images/covers/cinema/misfits.webp" },
  { title: "Оно: Ч1", type: "ФИЛЬМ", year: "2017", cover: "resources/images/covers/cinema/it1.webp" },
  { title: "Оно: Ч2", type: "ФИЛЬМ", year: "2019", cover: "resources/images/covers/cinema/it2.webp" },
  { title: "Оно: Добро пожаловать в Дерри", type: "СЕРИАЛ", year: "2025", cover: "resources/images/covers/cinema/it-derry.webp" },
  { title: "Охота", type: "ФИЛЬМ", year: "2012", cover: "resources/images/covers/cinema/jagten.webp" },
  { title: "Очень странные дела", type: "СЕРИАЛ", year: "2016", cover: "resources/images/covers/cinema/strangerthings.webp" },
  { title: "Параллельный мир", type: "ФИЛЬМ", year: "1992", cover: "resources/images/covers/cinema/coolworld.webp" },
  { title: "Первобытный страх", type: "ФИЛЬМ", year: "1996", cover: "resources/images/covers/cinema/primalfear.webp" },
  { title: "Первому игроку приготовиться", type: "ФИЛЬМ", year: "2018", cover: "resources/images/covers/cinema/readyplayerone.webp" },
  { title: "Пианист", type: "ФИЛЬМ", year: "2002", cover: "resources/images/covers/cinema/pianist.webp" },
  { title: "Плакса", type: "ФИЛЬМ", year: "1990", cover: "resources/images/covers/cinema/crybaby.webp" },
  { title: "Побег из Претории", type: "ФИЛЬМ", year: "2020", cover: "resources/images/covers/cinema/pobeg.webp" },
  { title: "Побег из Шоушенка", type: "ФИЛЬМ", year: "1994", cover: "resources/images/covers/cinema/thedhawshankredemption.webp" },
  { title: "Поймай меня, если сможешь", type: "ФИЛЬМ", year: "2002", cover: "resources/images/covers/cinema/catchme.webp" },
  { title: "Помни", type: "ФИЛЬМ", year: "2000", cover: "resources/images/covers/cinema/memento.webp" },
  { title: "Помни меня", type: "ФИЛЬМ", year: "2010", cover: "resources/images/covers/cinema/rememberme.webp" },
  { title: "Посмотри на меня: XXXTENTACION", type: "ФИЛЬМ", year: "2022", cover: "resources/images/covers/cinema/lam.webp" },
  { title: "Престиж", type: "ФИЛЬМ", year: "2006", cover: "resources/images/covers/cinema/theprestige.webp" },
  { title: "Проект X: Дорвались", type: "ФИЛЬМ", year: "2012", cover: "resources/images/covers/cinema/px.webp" },
  { title: "Рейв", type: "ФИЛЬМ", year: "2019", cover: "resources/images/covers/cinema/rave.webp" },
  { title: "Реквием по мечте", type: "ФИЛЬМ", year: "2000", cover: "resources/images/covers/cinema/rfad.webp" },
  { title: "Робот по имени Чаппи", type: "ФИЛЬМ", year: "2015", cover: "resources/images/covers/cinema/chappie.webp" },
  { title: "Ромео + Джульетта", type: "ФИЛЬМ", year: "1996", cover: "resources/images/covers/cinema/r+j.webp" },
  { title: "Секретарша", type: "ФИЛЬМ", year: "2001", cover: "resources/images/covers/cinema/secretary.webp" },
  { title: "Семь", type: "ФИЛЬМ", year: "1995", cover: "resources/images/covers/cinema/seven.webp" },
  { title: "Сияние", type: "ФИЛЬМ", year: "1990", cover: "resources/images/covers/cinema/theshining.webp" },
  { title: "Скотт Пилигрим против всех", type: "ФИЛЬМ", year: "2010", cover: "resources/images/covers/cinema/scottp.webp" },
  { title: "Социальная сеть", type: "ФИЛЬМ", year: "2010", cover: "resources/images/covers/cinema/sn.webp" },
  { title: "Спасти рядового Райана", type: "ФИЛЬМ", year: "1998", cover: "resources/images/covers/cinema/ryan.webp" },
  { title: "Старикам тут не место", type: "ФИЛЬМ", year: "2007", cover: "resources/images/covers/cinema/starikam.webp" },
  { title: "Спеши любить", type: "ФИЛЬМ", year: "2002", cover: "resources/images/covers/cinema/wki.webp" },
  { title: "Список Шиндлера", type: "ФИЛЬМ", year: "1993", cover: "resources/images/covers/cinema/schindler.webp" },
  { title: "Тайное окно", type: "ФИЛЬМ", year: "2004", cover: "resources/images/covers/cinema/secretwindow.webp" },
  { title: "Таксист", type: "ФИЛЬМ", year: "1976", cover: "resources/images/covers/cinema/taxidriver.webp" },
  { title: "Твое имя", type: "АНИМЕ", year: "2016", cover: "resources/images/covers/cinema/ti.webp" },
  { title: "Титаник", type: "ФИЛЬМ", year: "1997", cover: "resources/images/covers/cinema/titanic.webp" },
  { title: "Унесенные призраками", type: "ФИЛЬМ", year: "2001", cover: "resources/images/covers/cinema/yp.webp" },
  { title: "Уэнздей", type: "СЕРИАЛ", year: "2022", cover: "resources/images/covers/cinema/wednesday.webp" },
  { title: "Факультет", type: "ФИЛЬМ", year: "1998", cover: "resources/images/covers/cinema/faculty.webp" },
  { title: "Форрест Гамп", type: "ФИЛЬМ", year: "1994", cover: "resources/images/covers/cinema/forresgump.webp" },
  { title: "Ходячий замок", type: "АНИМЕ", year: "2004", cover: "resources/images/covers/cinema/shori.webp" },
  { title: "Хорошее время", type: "ФИЛЬМ", year: "2017", cover: "resources/images/covers/cinema/goodtime.webp" },
  { title: "Чего хотят женщины", type: "ФИЛЬМ", year: "2000", cover: "resources/images/covers/cinema/www.webp" },
  { title: "Человек, который познал бесконечность", type: "ФИЛЬМ", year: "2015", cover: "resources/images/covers/cinema/theman.webp" },
  { title: "Чернобыль", type: "СЕРИАЛ", year: "2019", cover: "resources/images/covers/cinema/chernobyl.webp" },
  { title: "Черное зеркало", type: "СЕРИАЛ", year: "2011", cover: "resources/images/covers/cinema/blackmirror.webp" },
  { title: "Черный лебедь", type: "ФИЛЬМ", year: "2010", cover: "resources/images/covers/cinema/blackswan.webp" },
  { title: "Что гложет Гилберта Грейпа", type: "ФИЛЬМ", year: "1993", cover: "resources/images/covers/cinema/gilbertgrape.webp" },
  { title: "Эдвард руки-ножницы", type: "ФИЛЬМ", year: "1990", cover: "resources/images/covers/cinema/edward.webp" },
  { title: "Эффект бабочки", type: "ФИЛЬМ", year: "2013", cover: "resources/images/covers/cinema/thebutterflyeffect.webp" },
  { title: "Lil Peep: Все за всех", type: "ФИЛЬМ", year: "2019", cover: "resources/images/covers/cinema/lilpeep.webp" },
  { title: "1+1", type: "ФИЛЬМ", year: "2011", cover: "resources/images/covers/cinema/1plus1.webp" },
  { title: "1917", type: "ФИЛЬМ", year: "2019", cover: "resources/images/covers/cinema/1917.webp" },
  { title: "12 лет рабства", type: "ФИЛЬМ", year: "2013", cover: "resources/images/covers/cinema/rabstvo.webp" },
  { title: "28 дней спустя", type: "ФИЛЬМ", year: "2002", cover: "resources/images/covers/cinema/28l.webp" },
  { title: "28 недель спустя", type: "ФИЛЬМ", year: "2007", cover: "resources/images/covers/cinema/28weekslater.webp" },
  { title: "45 лет", type: "ФИЛЬМ", year: "2015", cover: "resources/images/covers/cinema/45.webp" },
  { title: "5 ночей с Фредди", type: "ФИЛЬМ", year: "2023", cover: "resources/images/covers/cinema/fn1.webp" },
  { title: "5 ночей с Фредди 2", type: "ФИЛЬМ", year: "2025", cover: "resources/images/covers/cinema/fn2.webp" },
];

const containerCinema = document.getElementById("cinema");
let htmlCinema = '';

cinema.forEach(item => {
  htmlCinema += `
        <div class="container-for-art">
          <div class="cover"><img src="${item.cover}" class="cover" /></div>
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
  { title: "Slaang", artist: "AARNE, TOXI$", year: "2025", cover: "resources/images/covers/albums/slaang.webp" },
  { title: "We Live Only Once", artist: "AARNE, Bushido Zho", year: "2024", cover: "resources/images/covers/albums/wloo.webp" },
  { title: "AA Language 2", artist: "AARNE", year: "2023", cover: "resources/images/covers/albums/aa2.webp" },
  { title: "AA Language", artist: "AARNE", year: "2022", cover: "resources/images/covers/albums/aa1.webp" },
  { title: "Blur", artist: "Blur", year: "1997", cover: "resources/images/covers/albums/blur-blur.webp" },
  { title: "The Melodic Blue", artist: "Baby Keem", year: "2021", cover: "resources/images/covers/albums/babykeem-themelodicblue.webp" },
  { title: "I Decided", artist: "Big Sean", year: "2017", cover: "resources/images/covers/albums/bigsean-idecited.webp" },
  { title: "Peekaboo", artist: "Big Baby Tape, aarne", year: "2024", cover: "resources/images/covers/albums/bigbabytape-peekaboo.webp" },
  { title: "Varskva", artist: "BIG BABY TAPE", year: "2023", cover: "resources/images/covers/albums/bigbabytape-varskva.webp" },
  { title: "Bandana I", artist: "BIG BABY TAPE, KIZARU", year: "2021", cover: "resources/images/covers/albums/bigbabytape-bandanai.webp" },
  { title: "Arguments & Facts", artist: "BIG BABY TAPE", year: "2019", cover: "resources/images/covers/albums/bigbabytape-af.webp" },
  { title: "Dragonborn", artist: "BIG BABY TAPE", year: "2018", cover: "resources/images/covers/albums/bigbabytape-dragonborn.webp" },
  { title: "Hoodrich Tales", artist: "BIG BABY TAPE", year: "2018", cover: "resources/images/covers/albums/bigbabytape-hoodrichtales.webp" },
  { title: "Brat", artist: "CHARLI XCX", year: "2024", cover: "resources/images/covers/albums/c30.webp" },
  { title: "Crystal Castles III", artist: "CRYSTAL CASTLES", year: "2012", cover: "resources/images/covers/albums/crystalcastles-iii.webp" },
  { title: "Crystal Castles II", artist: "CRYSTAL CASTLES", year: "2010", cover: "resources/images/covers/albums/crystalcastles-ii.webp" },
  { title: "Crystal Castles", artist: "CRYSTAL CASTLES", year: "2008", cover: "resources/images/covers/albums/crystalcastles-i.webp" },
  { title: "Nightmortan", artist: "Deathmarried", year: "2025", cover: "resources/images/covers/albums/deathmarried-nightmortan.webp" },
  { title: "House of Zef", artist: "DIE ANTWOOD", year: "2022", cover: "resources/images/covers/albums/dieantwoord-houseofzef.webp" },
  { title: "Mount Ninji And Nice Time Kid", artist: "DIE ANTWOOD", year: "2016", cover: "resources/images/covers/albums/dieantwoord-mnant.webp" },
  { title: "Donker Mag", artist: "DIE ANTWOOD", year: "2014", cover: "resources/images/covers/albums/dieantwoord-donkermag.webp" },
  { title: "Ten$ion", artist: "DIE ANTWOOD", year: "2012", cover: "resources/images/covers/albums/dieantwoord-tension.webp" },
  { title: "Decide", artist: "DJO", year: "2022", cover: "resources/images/covers/albums/djo-decide.webp" },
  { title: "Hardstone Phycho", artist: "DON TOLIVER", year: "2024", cover: "resources/images/covers/albums/dontoliver-hardstonephycho.webp" },
  { title: "Views", artist: "DRAKE", year: "2016", cover: "resources/images/covers/albums/drake-views.webp" },
  { title: "Rebel", artist: "ESDEEKID", year: "2025", cover: "resources/images/covers/albums/rebel2025.webp" },
  { title: "Cristoforo Colombo", artist: "FRIENDLY THUG 52 NGG", year: "2023", cover: "resources/images/covers/albums/friendlythug52ngg-cristoforocolombo.webp" },
  { title: "Humanz", artist: "GORILLAZ", year: "2017", cover: "resources/images/covers/albums/gorillaz-humanz.webp" },
  { title: "Harry's House", artist: "HARRY STYLES", year: "2022", cover: "resources/images/covers/albums/harrystyles-harryshouse.webp" },
  { title: "1000 Bars", artist: "HERONWATER", year: "2025", cover: "resources/images/covers/albums/1000bars.webp" },
  { title: "Odyssey", artist: "HERONWATER", year: "2024", cover: "resources/images/covers/albums/heronwater-odyssey.webp" },
  { title: "Dream Money Can Buy", artist: "HERONWATER", year: "2023", cover: "resources/images/covers/albums/heronwater-dreamsmoneycanbuy.webp" },
  { title: "No Commercial Lyrics", artist: "HERONWATER", year: "2022", cover: "resources/images/covers/albums/heronwater-nocommerciallyrics.webp" },
  { title: "2 Days No Lean", artist: "HERONWATER", year: "2022", cover: "resources/images/covers/albums/heronwater-2daysnolean.webp" },
  { title: "i5u5we5", artist: "HOMIXIDE GANG", year: "2024", cover: "resources/images/covers/albums/homixidegang-i5u5we5.webp" },
  { title: "Партизан", artist: "ХАСКИ", year: "2025", cover: "resources/images/covers/albums/partizan.webp" },
  { title: "Forest Hills Drive", artist: "J. COLE", year: "2014", cover: "resources/images/covers/albums/jcole-2014.webp" },
  { title: "The Blueprint 3", artist: "JAY-Z", year: "2009", cover: "resources/images/covers/albums/jayz-theblueprint3.webp" },
  { title: "FutureSex", artist: "JUSTIN TIMBERLAKE", year: "2006", cover: "resources/images/covers/albums/justintimberlake-futuresex.webp" },
  { title: "Stay Trippy", artist: "JUICY J", year: "2013", cover: "resources/images/covers/albums/juicyj-staytrippy.webp" },
  { title: "Классика", artist: "ДЖОН ГАРИК", year: "2024", cover: "resources/images/covers/albums/jongarik-klassika.webp" },
  { title: "Mercury", artist: "IMAGINE DRAGONS", year: "2022", cover: "resources/images/covers/albums/imaginedragons-mercury.webp" },
  { title: "Heavy Metal 2", artist: "KAI ANGEL, 9MICE", year: "2024", cover: "resources/images/covers/albums/kaiangel-heavymetal2.webp" },
  { title: "Damage", artist: "KAI ANGEL", year: "2025", cover: "resources/images/covers/albums/kaiangel-damage.webp" },
  { title: "God System", artist: "KAI ANGEL", year: "2024", cover: "resources/images/covers/albums/kaiangel-godsystem.webp" },
  { title: "Vultures 2", artist: "KANYE WEST", year: "2024", cover: "resources/images/covers/albums/kanyewest-vultures2.webp" },
  { title: "Vultures", artist: "KANYE WEST", year: "2024", cover: "resources/images/covers/albums/kanyewest-vultures1.webp" },
  { title: "Donda 2", artist: "KANYE WEST", year: "2022", cover: "resources/images/covers/albums/kanyewest-donda2.webp" },
  { title: "Donda", artist: "KANYE WEST", year: "2021", cover: "resources/images/covers/albums/kanyewest-donda.webp" },
  { title: "Yeezus", artist: "KANYE WEST", year: "2013", cover: "resources/images/covers/albums/kanyewest-yeezus.webp" },
  { title: "Cruel Summer", artist: "KANYE WEST", year: "2012", cover: "resources/images/covers/albums/kanyewest-cruelsummer.webp" },
  { title: "My Beautiful Dark Twisted Fantasy", artist: "KANYE WEST", year: "2010", cover: "resources/images/covers/albums/kanyewest-mbdtf.webp" },
  { title: "808 & Heartbreak", artist: "KANYE WEST", year: "2008", cover: "resources/images/covers/albums/808.webp" },
  { title: "Graduation", artist: "KANYE WEST", year: "2007", cover: "resources/images/covers/albums/kanyewest-graduation.webp" },
  { title: "Damn", artist: "KENDRICK LAMAR", year: "2017", cover: "resources/images/covers/albums/kendricklamar-damn.webp" },
  { title: "Good Kid, Mad City", artist: "KENDRICK LAMAR", year: "2013", cover: "resources/images/covers/albums/kendricklamar-goodkidmaadcity.webp" },
  { title: "Norman Fucking Rockwell", artist: "LANA DEL REY", year: "2019", cover: "resources/images/covers/albums/lanadelrey-normanfuckingrockwell.webp" },
  { title: "Lust For Life", artist: "LANA DEL REY", year: "2017", cover: "resources/images/covers/albums/lanadelrey-lustforlife.webp" },
  { title: "Honeymoon", artist: "LANA DEL REY", year: "2015", cover: "resources/images/covers/albums/lanadelrey-honeymoon.webp" },
  { title: "Ultraviolence", artist: "LANA DEL REY", year: "2014", cover: "resources/images/covers/albums/lanadelrey-ultraviolence.webp" },
  { title: "Born To Die", artist: "LANA DEL REY", year: "2012", cover: "resources/images/covers/albums/lanadelrey-borntodie.webp" },
  { title: "Reefer Madness", artist: "LILDRUGHILL", year: "2024", cover: "resources/images/covers/albums/lildrughill-reefermadness.webp" },
  { title: "Revolve", artist: "LILDRUGHILL", year: "2022", cover: "resources/images/covers/albums/lildrughill-revolve.webp" },
  { title: "Glow", artist: "LILDRUGHILL", year: "2021", cover: "resources/images/covers/albums/lildrughill-glow.webp" },
  { title: "Hurry Up, We're Dreaming", artist: "M83", year: "2011", cover: "resources/images/covers/albums/m83-hurryupweredreaming.webp" },
  { title: "K.I.D.S", artist: "MAC MILER", year: "2010", cover: "resources/images/covers/albums/macmiller-kids.webp" },
  { title: "Loose", artist: "NELLY FURTADO", year: "2006", cover: "resources/images/covers/albums/nellyfurtado-loose.webp" },
  { title: "Freerio 3", artist: "OG BUDA", year: "2024", cover: "resources/images/covers/albums/ogbuda-freerio3.webp" },
  { title: "Pox Wave", artist: "OG BUDA", year: "2023", cover: "resources/images/covers/albums/ogbuda-poxwave.webp" },
  { title: "Скучаю, но Работаю", artist: "OG BUDA", year: "2023", cover: "resources/images/covers/albums/ogbuda-skychaunorabotau.webp" },
  { title: "Freerio 2", artist: "OG BUDA", year: "2022", cover: "resources/images/covers/albums/ogbuda-freerio2.webp" },
  { title: "Freerio", artist: "OG BUDA", year: "2021", cover: "resources/images/covers/albums/ogbuda-freerio.webp" },
  { title: "Платина", artist: "ПЛАТИНА", year: "2024", cover: "resources/images/covers/albums/platina-platina.webp" },
  { title: "Sosa Muzik", artist: "ПЛАТИНА", year: "2021", cover: "resources/images/covers/albums/platina-sosamuzik.webp" },
  { title: "Опиаты Круг", artist: "ПЛАТИНА", year: "2019", cover: "resources/images/covers/albums/platina-ok.webp" },
  { title: "Red Hand Akimbo", artist: "Paris Texas", year: "2021", cover: "resources/images/covers/albums/pt.webp" },
  { title: "Music", artist: "PLAYBOI CARTI", year: "2025", cover: "resources/images/covers/albums/playboicarti-music.webp" },
  { title: "Meet The Woo 2", artist: "POP SMOKE", year: "2020", cover: "resources/images/covers/albums/popsmoke-meetthewoo2.webp" },
  { title: "Meet The Woo", artist: "POP SMOKE", year: "2019", cover: "resources/images/covers/albums/popsmoke-meetthewoo.webp" },
  { title: "Pablo Honey", artist: "RADIOHEAD", year: "2000", cover: "resources/images/covers/albums/radiohead-pablohoney.webp" },
  { title: "Zeit", artist: "RAMMSTEIN", year: "2022", cover: "resources/images/covers/albums/rammstein-zeit.webp" },
  { title: "Rammstein", artist: "RAMMSTEIN", year: "2019", cover: "resources/images/covers/albums/rammstein-rammstein.webp" },
  { title: "Grit & Grace", artist: "RICH AMIRI", year: "2025", cover: "resources/images/covers/albums/rmgg.webp" },
  { title: "Ghetto Fabulous", artist: "RICH AMIRI", year: "2023", cover: "resources/images/covers/albums/richamiri-ghettofabulous.webp" },
  { title: "Hickey", artist: "ROYEL OTIS", year: "2025", cover: "resources/images/covers/albums/h20.webp" },
  { title: "-5luv5", artist: "SODA LUV", year: "2025", cover: "resources/images/covers/albums/sodaluv-5luv5.webp" },
  { title: "Fallen Raven", artist: "SUMMRS", year: "2022", cover: "resources/images/covers/albums/summrs-fallenraven.webp" },
  { title: "The Kingdom Come", artist: "$UICIDEBOY$", year: "2025", cover: "resources/images/covers/albums/uicideboy-thekingdomcome.webp" },
  { title: "My Liver Will Handle What My Heart Can’t", artist: "$UICIDEBOY$", year: "2016", cover: "resources/images/covers/albums/uicideboy-mlwhwmhc.webp" },
  { title: "U.S.T", artist: "THE TRUTH", year: "2022", cover: "resources/images/covers/albums/thethuth-ust.webp" },
  { title: "Starboy", artist: "THE WEEKND", year: "2016", cover: "resources/images/covers/albums/theweekend-starboy.webp" },
  { title: "Beauty Behind The Madness", artist: "THE WEEKND", year: "2015", cover: "resources/images/covers/albums/theweekend-bbtm.webp" },
  { title: "Coexist", artist: "THE XX", year: "2012", cover: "resources/images/covers/albums/thexx-coexist.webp" },
  { title: "Xx", artist: "THE XX", year: "2009", cover: "resources/images/covers/albums/thexx-xx.webp" },
  { title: "Shock Value", artist: "TIMBALAND", year: "2007", cover: "resources/images/covers/albums/timbaland-shockvalue.webp" },
  { title: "Utopia", artist: "TRAVIS SCOTT", year: "2023", cover: "resources/images/covers/albums/travisscott-utopia.webp" },
  { title: "Astroworld", artist: "TRAVIS SCOTT", year: "2018", cover: "resources/images/covers/albums/travisscott-astroworld.webp" },
  { title: "Birds In The Trap Sing McKnight", artist: "TRAVIS SCOTT", year: "2016", cover: "resources/images/covers/albums/travisscott-bittsm.webp" },
  { title: "Rodeo", artist: "TRAVIS SCOTT", year: "2015", cover: "resources/images/covers/albums/travisscott-rodeo.webp" },
  { title: "Days Before Rodeo", artist: "TRAVIS SCOTT", year: "2015", cover: "resources/images/covers/albums/travisscott-daysbeforerodeo.webp" },
  { title: "Brench", artist: "TWENTY ONE PILOTS", year: "2025", cover: "resources/images/covers/albums/twentyonepilots-brench.webp" },
  { title: "Clancy", artist: "TWENTY ONE PILOTS", year: "2024", cover: "resources/images/covers/albums/twentyonepilots-clancy.webp" },
  { title: "Trench", artist: "TWENTY ONE PILOTS", year: "2018", cover: "resources/images/covers/albums/twentyonepilots-trench.webp" },
  { title: "Blurryface", artist: "TWENTY ONE PILOTS", year: "2015", cover: "resources/images/covers/albums/twentyonepilots-blurryface.webp" },
  { title: "I Hate TWXN", artist: "TWXN", year: "2024", cover: "resources/images/covers/albums/twxn-ihatetwxn.webp" },
  { title: "Project YVL", artist: "TWXN", year: "2024", cover: "resources/images/covers/albums/twxn-projectyvl.webp" },
  { title: "Igor", artist: "TYLER, THE CREATOR", year: "2019", cover: "resources/images/covers/albums/tylerthecreator-igor.webp" },
  { title: "2007, Ч.2", artist: "UNIQE, NKEEEI, ARTEM SHILOVETS", year: "2024", cover: "resources/images/covers/albums/uniqe-20072.webp" },
  { title: "Dark Times", artist: "VINCE STAPLES", year: "2024", cover: "resources/images/covers/albums/vincestaples-darktimes.webp" },
  { title: "Ненависть", artist: "ВЫШЕЛ ПОКУРИТЬ", year: "2025", cover: "resources/images/covers/albums/vp-nenavist.webp" },
  { title: "Кремация", artist: "ВЫШЕЛ ПОКУРИТЬ", year: "2024", cover: "resources/images/covers/albums/vp-kremaciya.webp" },
  { title: "Извини", artist: "ВЫШЕЛ ПОКУРИТЬ", year: "2021", cover: "resources/images/covers/albums/vp-izvini.webp" },
  { title: "Готика", artist: "ВЫШЕЛ ПОКУРИТЬ", year: "2020", cover: "resources/images/covers/albums/vp-gotika.webp" },
  { title: "Кино", artist: "ВЫШЕЛ ПОКУРИТЬ", year: "2019", cover: "resources/images/covers/albums/vp-kino.webp" },
  { title: "Память", artist: "ВЫШЕЛ ПОКУРИТЬ", year: "2019", cover: "resources/images/covers/albums/vp-pamyat.webp" },
  { title: "Север", artist: "ВЫШЕЛ ПОКУРИТЬ", year: "2019", cover: "resources/images/covers/albums/vp-sever.webp" },
  { title: "Никогда", artist: "ВЫШЕЛ ПОКУРИТЬ", year: "2018", cover: "resources/images/covers/albums/vp-nikogda.webp" },
  { title: "Bad Vibes Forever", artist: "XXXTENTACION", year: "2019", cover: "resources/images/covers/albums/x-badvibesforever.webp" },
  { title: "Skins", artist: "XXXTENTACION", year: "2018", cover: "resources/images/covers/albums/xxxtentacion-skins.webp" },
  { title: "?", artist: "XXXTENTACION", year: "2018", cover: "resources/images/covers/albums/xxxtentacion-x.webp" },
  { title: "A Ghetto Christmas Carol", artist: "XXXTENTACION", year: "2017", cover: "resources/images/covers/albums/xxxtentacion-aghettochristmascarol.webp" },
  { title: "17", artist: "XXXTENTACION", year: "2017", cover: "resources/images/covers/albums/xxxtentacion-17.webp" },
  { title: "Revenge", artist: "XXXTENTACION", year: "2017", cover: "resources/images/covers/albums/xxxtentacion-revenge.webp" },
  { title: "9mm", artist: "9MICE", year: "2025", cover: "resources/images/covers/albums/9mm.webp" },
];

const containerAlbums = document.getElementById("albums");
let htmlAlbums = '';

albums.forEach(item => {
  htmlAlbums += `
        <div class="container-for-art">
          <div class="cover"><img src="${item.cover}" class="cover" /></div>
          <div class="hidden-container-404">
            <div class="section-title">${item.title}</div>
            <div class="section-subtitle">${item.artist.toUpperCase()} · ${item.year}</div>
          </div>
        </div>`;
});

containerAlbums.innerHTML = htmlAlbums;

/* ЛИТЕРАТУРА */

const books = [
  { title: "Цветы для Элджернона", author: "Дэниел Киз", year: "1959", cover: "resources/images/covers/books/flowersforalgernon.webp" },
  { title: "Великий Гэтсби", author: "Фрэнсис Фицджеральд", year: "1925", cover: "resources/images/covers/books/thegreatgatsby.webp" },
  { title: "Мартин Иден", author: "Джек Лондон", year: "1909", cover: "resources/images/covers/books/martineden.webp" },
  { title: "451 градус по Фаренгейту", author: "Рэй Брэдбери", year: "1953", cover: "resources/images/covers/books/fahrenheit451.webp" },
  { title: "1984", author: "Джордж Оруэлл", year: "1949", cover: "resources/images/covers/books/1984.webp" },
];

const containerBooks = document.getElementById("books");
let htmlBooks = '';

books.forEach(item => {
  htmlBooks += `
        <div class="container-for-art">
          <div class="cover"><img src="${item.cover}" class="cover" /></div>
          <div class="hidden-container-404">
            <div class="section-title">${item.title}</div>
            <div class="section-subtitle">${item.author.toUpperCase()} · ${item.year}</div>
          </div>
        </div>`;
});

containerBooks.innerHTML = htmlBooks;

/* ВИДЕОИГРЫ */

const videogames = [
  { title: "Amnesia: The Dark Descent", platform: "ПК", year: "2010", cover: "resources/images/covers/games/amnesia1.webp" },
  { title: "Amnesia: A Machine for Pigs", platform: "ПК", year: "2013", cover: "resources/images/covers/games/amnesia2.webp" },
  { title: "Amnesia: Rebirth", platform: "ИГРОФИЛЬМ", year: "2020", cover: "resources/images/covers/games/amnesia3.webp" },
  { title: "Battletoads & Double Dragon", platform: "NES", year: "1993", cover: "resources/images/covers/games/battletoadsanddoubledragon-nes.webp" },
  { title: "Detroit: Become Human", platform: "ИГРОФИЛЬМ", year: "2018", cover: "resources/images/covers/games/dbh.webp" },
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
  { title: "Miside", platform: "ИГРОФИЛЬМ", year: "2024", cover: "resources/images/covers/games/miside.webp" },
  { title: "Mortal Kombat 9", platform: "ПК", year: "2011", cover: "resources/images/covers/games/mk9.webp" },
  { title: "Outlast", platform: "ПК", year: "2013", cover: "resources/images/covers/games/outlast.webp" },
  { title: "Outlast 2", platform: "ИГРОФИЛЬМ", year: "2017", cover: "resources/images/covers/games/outlast2.webp" },
  { title: "Portal", platform: "ПК", year: "2007", cover: "resources/images/covers/games/portal.webp" },
  { title: "Portal 2", platform: "ПК", year: "2011", cover: "resources/images/covers/games/portal2.webp" },
  { title: "Resident Evil 4", platform: "ИГРОФИЛЬМ", year: "2023", cover: "resources/images/covers/games/re4.webp" },
  { title: "Resident Evil 7", platform: "ИГРОФИЛЬМ", year: "2017", cover: "resources/images/covers/games/re7.webp" },
  { title: "Resident Evil 8", platform: "ИГРОФИЛЬМ", year: "2021", cover: "resources/images/covers/games/re8.webp" },
  { title: "Risen", platform: "ПК", year: "2009", cover: "resources/images/covers/games/risen.webp" },
  { title: "Silent Hill 2", platform: "ИГРОФИЛЬМ", year: "2024", cover: "resources/images/covers/games/sh2.webp" },
  { title: "Super Mario Bros", platform: "NES", year: "1985", cover: "resources/images/covers/games/smb1.webp" },
  { title: "Super Mario Bros 3", platform: "SNES", year: "1993", cover: "resources/images/covers/games/smb3.webp" },
  { title: "The Evil Within 2", platform: "XBOX", year: "2017", cover: "resources/images/covers/games/theevilwithin2.webp" },
  { title: "The Forest", platform: "ПК", year: "2014", cover: "resources/images/covers/games/theforest.webp" },
  { title: "The Last of Us: P1", platform: "ИГРОФИЛЬМ", year: "2013", cover: "resources/images/covers/games/tlou1.webp" },
  { title: "The Last of Us: P2", platform: "ИГРОФИЛЬМ", year: "2020", cover: "resources/images/covers/games/tlou2.webp" },
  { title: "The Legend of Zelda: The Minish Cap", platform: "GBA", year: "2004", cover: "resources/images/covers/games/tloz-theminishcap.webp" },
  { title: "The Quarry", platform: "ИГРОФИЛЬМ", year: "2022", cover: "resources/images/covers/games/thequarry.webp" },
  { title: "TDP: Man of Medan", platform: "ИГРОФИЛЬМ", year: "2019", cover: "resources/images/covers/games/tdpa1.webp" },
  { title: "TDP: Little Hope", platform: "ИГРОФИЛЬМ", year: "2020", cover: "resources/images/covers/games/tdpa2.webp" },
  { title: "TDP: House of Ashes", platform: "ИГРОФИЛЬМ", year: "2021", cover: "resources/images/covers/games/tdpa3.webp" },
  { title: "TDP: The Devil in Me", platform: "ИГРОФИЛЬМ", year: "2022", cover: "resources/images/covers/games/tdpa4.webp" },
  { title: "Until Dawn", platform: "ИГРОФИЛЬМ", year: "2015", cover: "resources/images/covers/games/untildawn.webp" },
  { title: "Valiant Hearts: The Great War", platform: "ПК", year: "2014", cover: "resources/images/covers/games/valiantheart-thegreatwar.webp" },
  { title: "Warhammer 40.000: Space Marine", platform: "ПК", year: "2011", cover: "resources/images/covers/games/w40k-spacemarine.webp" },
];

const containerVideogames = document.getElementById("videogames");
let htmlVideogames = '';

videogames.forEach(item => {
  htmlVideogames += `
        <div class="container-for-art">
          <div class="cover"><img src="${item.cover}" class="cover" /></div>
          <div class="hidden-container-404">
            <div class="section-title">${item.title}</div>
            <div class="section-subtitle">${item.platform.toUpperCase()} · ${item.year} </div>
          </div>
        </div>`;
});

containerVideogames.innerHTML = htmlVideogames;