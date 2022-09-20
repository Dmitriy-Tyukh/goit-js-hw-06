// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

// ========================= Вар-1 ================================

// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const ingredientsEl = document.querySelector('#ingredients');

// let fragmentItem = new DocumentFragment();

// for (let i = 0; i < ingredients.length; i+=1) {
//     const liContent = ingredients[i];
    
//     const li = document.createElement('li');
//     li.classList.add('item');
//     li.textContent = liContent;
//     fragmentItem.appendChild(li);
//   }

// ingredientsEl.appendChild(fragmentItem);

// ====================== Вар-2 ===========================

const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);

let itemEL = ingredients.map(item => {
        const li = document.createElement('li');
        const liClass = li.classList.add('item');
        const liContent = (li.textContent = item);
        return li;
    })
    
ingredientsEl.append(...itemEL);

