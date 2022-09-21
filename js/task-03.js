// Задание 3
// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
// 
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// ============ Вариант-1==================================

// const gallery = document.querySelector('.gallery');
// let fragmentItem = new DocumentFragment();

// for (let i = 0; i < images.length; i += 1) {
//     const element = images[i];

//     const img = document.createElement('img');
//     img.src = images[i].url;
//     img.alt = images[i].alt;

//     const li = document.createElement('li');
//     li.appendChild(img);

//     fragmentItem.appendChild(li);
// }

// gallery.appendChild(fragmentItem);

// ======================== Вар-2 =================================

const gallery = document.querySelector('.gallery');
console.log(gallery);

const img = images
    .map(image => `<li><img class="img" src = ${image.url} alt = ${image.alt} width = 350></li>`)
    .join('');
gallery.insertAdjacentHTML('afterbegin', img);


