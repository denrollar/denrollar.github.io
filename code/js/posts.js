const postsData = [
  {
    avatarSrc: "resources/images/other/avatar.webp",
    userName: "denrollar",
    imageSrc: "resources/images/for-posts/2.webp",
    title: "Будущие планы Valve",
    content: [
      "В хронологическом порядке:",
      "1. Выпуск портативной консоли Steam Deck;",
      "2. Выпуск четвертой версии Steam OS, которая включает оптимизацию операционной системы и её официальный запуск на устройствах партнеров;",
      "3. Выпуск новых версий очков виртуальной реальности Valve Index 2 и геймпада Steam Controller 2;",
      "4. Выпуск новой версии стационарной консоли Steam Machine 2 на Steam OS с поддержкой Valve Index 2 и Steam Controller 2;",
      "5. Выпуск новой версии портативной консоли Steam Deck 2."
    ],
    date: "16 ИЮНЯ 2025"
  },
  {
    avatarSrc: "resources/images/other/avatar.webp",
    userName: "denrollar",
    imageSrc: "resources/images/for-posts/1.webp",
    title: "Рассрочка на подписки",
    content: [
      "Беспроцентная рассрочка на подписки интернет-сервисов от коммерческих банков может стать доступной уже в ближайшее время.",
      "Крупные компании всё чаще используют модель подписки с ежемесячной или годовой оплатой в качестве основы для предоставления своих услуг.",
      "Практика показывает, что годовая оплата подписки существенно дешевле по сравнению с ежемесячными платежами.",
      "Для примера годовая подписка на Яндекс Плюс составляет 3400 рублей, что в 1.4 раза дешевле по сравнению ежемесячной оплатой в 399 рублей (399 руб. x 12 мес. = 4788 руб).",
      "Коммерческие банки могут разделить сумму годовой подписки на равные ежемесячные платежи для снижения финансовой нагрузки на обычного потребителя, взимая взамен небольшую комиссию до 15% за предоставленные услуги."
    ],
    date: "31 МАРТА 2025"
  },
];

const container = document.getElementById('posts-container');

postsData.forEach(post => {
  container.appendChild(createPost(post));
});

function createPost(post) {
  const postDiv = document.createElement('div');
  postDiv.className = 'post-data';

  const profileDiv = document.createElement('div');
  profileDiv.className = 'block-post-profile-user';

  const avatarDiv = document.createElement('div');
  avatarDiv.className = 'post-avatar-profile';

  const avatarImg = document.createElement('img');
  avatarImg.src = post.avatarSrc;
  avatarImg.className = 'post-avatar-profile';

  avatarDiv.appendChild(avatarImg);
  profileDiv.appendChild(avatarDiv);

  const nameDiv = document.createElement('div');
  nameDiv.className = 'post-name-profile-user';
  nameDiv.textContent = post.userName;

  profileDiv.appendChild(nameDiv);

  postDiv.appendChild(profileDiv);

  const postImg = document.createElement('img');
  postImg.src = post.imageSrc;
  postImg.className = 'image-post';

  postDiv.appendChild(postImg);

  const titleP = document.createElement('p');
  titleP.className = 'title-post';
  titleP.textContent = post.title;
  postDiv.appendChild(titleP);

  post.content.forEach(text => {
    const p = document.createElement('p');
    p.textContent = text;
    postDiv.appendChild(p);
  });

  const dateP = document.createElement('p');
  dateP.className = 'date';
  dateP.textContent = post.date;
  postDiv.appendChild(dateP);

  return postDiv;
}