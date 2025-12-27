/* ВИШЛИСТ */

const products = [
  {
    brand: "КОНСОЛЬ",
    model: "Anbernic RG40XX H 128GB",
    image: "resources/images/cards/card-1.webp"
  },
  {
    brand: "СМАРТФОН",
    model: "Apple iPhone 17 256GB",
    image: "resources/images/cards/card-2.webp"
  },
  {
    brand: "КЛАВИАТУРА",
    model: "Arturia Minilab MK3",
    image: "resources/images/cards/card-3.webp"
  },
];

const container = document.querySelector('.cards');

products.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <div class="card-image">
      <img src="${product.image}" class="card-image">
    </div>
    <div class="brand-name">${product.brand}</div>
    <div class="model-name">${product.model}</div>
  `;

  container.appendChild(card);
});

