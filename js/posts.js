const postsData = [
  {
    avatarSrc: "resources/images/other/avatar.webp",
    userName: "denrollar",
    imageSrc: "",
    content: ["Спустя три года, сообщаю, что по-прежнему тебя люблю, однако, мне ничего не нужно от тебя, наоборот, я просто хочу, чтобы мои чувства окончательно угасли",
    ],
    date: "16 ОКТЯБРЯ 2025"
  },
];

const container = document.getElementById('posts-container');

postsData.forEach(post => {
  container.appendChild(createPost(post));
});

function createPost(post) {
  const postDiv = document.createElement('div');
  postDiv.className = 'post-data';

  // Блок профиля
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

  // Условие для добавления фото, если оно есть
  if (post.imageSrc && post.imageSrc.trim() !== "") {
    const postImg = document.createElement('img');
    postImg.src = post.imageSrc;
    postImg.className = 'image-post';
    postDiv.appendChild(postImg);
  }

  // Заголовок поста (если есть)
  if (post.title) {
    const titleP = document.createElement('p');
    titleP.className = 'title-post';
    titleP.textContent = post.title;
    postDiv.appendChild(titleP);
  }

  // Текстовое содержимое
  if (post.content && Array.isArray(post.content)) {
    post.content.forEach(text => {
      const p = document.createElement('p');
      p.textContent = text;
      postDiv.appendChild(p);
    });
  }

  // Дата
  const dateP = document.createElement('p');
  dateP.className = 'date';
  dateP.textContent = post.date;
  postDiv.appendChild(dateP);

  return postDiv;
}