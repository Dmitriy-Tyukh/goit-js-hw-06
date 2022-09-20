// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// ==================== Вар-1 ===============================

// const refs = {
//     allLists: document.querySelector('#categories'),
//     allListCategory: document.querySelectorAll('#categories > ul'),
//     allItem: document.querySelectorAll('.item'),
// };
// const allListChild = refs.allLists.children;

// console.log(`Number of categories: ${allListChild.length}`);

// function categoriesName() {
//     for (const item of refs.allItem) {
//         const itemTitle = item.firstElementChild.textContent;
//         const ElemCategorys = item.lastElementChild.children.length;

//         console.log(`Category: ${itemTitle}
// Elements: ${ElemCategorys}`);
//     }
// }
// categoriesName();

// ====================== Вар-2 ===============================

const liItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${liItemEl.length}`);

let ListCategoryEL = liItemEl.forEach(item => {
    const itemTitle = item.firstElementChild.textContent;
    const itemCategory = item.lastElementChild.children.length;
   
    console.log(`Category: ${itemTitle}
Elements: ${itemCategory}`);
});

// ======================== Вар-3 =============================

// const liItemEl = document.querySelectorAll('.item');
// console.log(`Number of categories: ${liItemEl.length}`);

// const newArr = [];
// let ListCategoryEL = liItemEl.forEach(item => {
//     const itemTitle = item.firstElementChild.textContent;
//     const itemCategory = item.lastElementChild.children.length;

//     newArr.push(`Category: ${itemTitle} Elements: ${itemCategory}`);
// });

// console.log(newArr.join(' '));






