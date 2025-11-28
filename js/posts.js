const postsData = [
  {
    avatarSrc: "resources/images/other/avatar.webp",
    userName: "denrollar",
    imageSrc: "",
    content: ["Заслуженно получил 0 поздравлений на свой день рождения (если исключать семью из списка)",
    ],
    date: "19 НОЯБРЯ 2025"
  },
  {
    avatarSrc: "resources/images/other/avatar.webp",
    userName: "denrollar",
    imageSrc: "",
    content: ["Я понял, что никакого братства народов и единства не существует, когда стал объектом буллинга на национальной почве",
    ],
    date: "04 НОЯБРЯ 2025"
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

  if (post.imageSrc && post.imageSrc.trim() !== "") {
    const postImg = document.createElement('img');
    postImg.src = post.imageSrc;
    postImg.className = 'image-post';
    postDiv.appendChild(postImg);
  }

  if (post.title) {
    const titleP = document.createElement('p');
    titleP.className = 'title-post';
    titleP.textContent = post.title;
    postDiv.appendChild(titleP);
  }

  if (post.content && Array.isArray(post.content)) {
    post.content.forEach(text => {
      const p = document.createElement('p');
      p.textContent = text;
      postDiv.appendChild(p);
    });
  }

  const dateP = document.createElement('p');
  dateP.className = 'date';
  dateP.textContent = post.date;
  postDiv.appendChild(dateP);

  return postDiv;
}
