const postsData = [
  {
    avatarSrc: "resources/images/photos/avatar.webp",
    userName: "denrollar",
    imageSrc: "resources/images/photos/post-243.png",
    content: ["Я доволен финальным эпизодом «Очень странных дел»","Мне понравилось завершение сериала, не смотря на весь хейт в интернете",
    ],
    date: "01 ЯНВАРЯ 2026"
  },
  {
    avatarSrc: "resources/images/photos/avatar.webp",
    userName: "denrollar",
    imageSrc: "resources/images/photos/music-year2025.png",
    content: ["Мои музыкальные итоги 2025",
    ],
    date: "26 ДЕКАБРЯ 2025"
  },
  {
    avatarSrc: "resources/images/photos/avatar.webp",
    userName: "denrollar",
    imageSrc: "",
    content: ["Заслуженно получил 0 поздравлений на свой день рождения (если исключать семью из списка)",
    ],
    date: "19 НОЯБРЯ 2025"
  },
  {
    avatarSrc: "resources/images/photos/avatar.webp",
    userName: "denrollar",
    imageSrc: "",
    content: ["Я понял, что никакого братства народов и единства не существует, когда стал объектом буллинга на национальной почве",
    ],
    date: "04 НОЯБРЯ 2025"
  },
];

const NODES = {
  container: document.getElementById('posts-container'),
  lightbox: document.getElementById('lightbox'),
  content: document.getElementById('lightboxContent'),
  caption: document.getElementById('caption'),
  btnClose: document.getElementById('closeBtn')
};

const init = () => {
  if (!NODES.container) return;

  postsData.forEach((post, index) => {
    NODES.container.appendChild(createPost(post, index));
  });

  setupEventListeners();
};

const createPost = (post, index) => {
  const postDiv = document.createElement('div');
  postDiv.className = 'post-data';

  postDiv.innerHTML = `
    <div class="block-post-profile-user">
      <div class="post-avatar-profile">
        <img src="${post.avatarSrc}" class="post-avatar-profile" loading="lazy">
      </div>
      <div class="post-name-profile-user">${post.userName}</div>
    </div>
    ${Array.isArray(post.content) ? post.content.map(text => `<p>${text}</p>`).join('') : ''}
  `;

  if (post.imageSrc?.trim()) {
    const postImg = document.createElement('img');
    postImg.className = 'image-post';
    postImg.src = post.imageSrc;
    postImg.loading = 'lazy';
    postImg.onclick = () => openLightbox(index);
    postDiv.appendChild(postImg);
  }

  const dateP = document.createElement('p');
  dateP.className = 'date';
  dateP.textContent = post.date;
  postDiv.appendChild(dateP);

  return postDiv;
};

const openLightbox = (index) => {
  const post = postsData[index];
  if (!post?.imageSrc) return;

  const img = document.createElement('img');
  img.src = post.imageSrc;

  NODES.content.replaceChildren(img);

  document.body.style.overflow = 'hidden';
  NODES.lightbox.classList.add('active-frame');
};

const closeLightbox = () => {
  NODES.lightbox.classList.remove('active-frame');
  NODES.content.replaceChildren();

  // Очищаем подпись при закрытии на всякий случай
  if (NODES.caption) NODES.caption.textContent = '';

  document.body.style.overflow = '';
};

const setupEventListeners = () => {
  if (NODES.btnClose) {
    NODES.btnClose.onclick = closeLightbox;
  }

  NODES.lightbox.onclick = (e) => {
    if (e.target === NODES.lightbox) closeLightbox();
  };
};

init();