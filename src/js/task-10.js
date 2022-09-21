// Задание 10 (выполнять не обязательно)

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// ========================Вар-1==============================

// const input = document.querySelector('input');
// const createBtn = document.querySelector('[data-create]');
// const destroyBtn = document.querySelector('[data-destroy]');
// const divControls = document.querySelector('#controls');
// const boxes = document.querySelector('#boxes');

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function createBoxes(amount) {
//     let allElements = [];
//     for (let i = 1; i <= amount; i+=1) {
//         const div = document.createElement('div');
//         div.style.width = `${30 + 10 * i}px`;
//         div.style.height = `${30 + 10 * i}px`;
//         div.style.backgroundColor = getRandomHexColor();
//         allElements.push(div);
//     };
//     return allElements
// };

// input.addEventListener('input', onInputValue)
// function onInputValue(e) {
    
// }

// createBtn.addEventListener('click', onCreateBoxes)
// function onCreateBoxes() {
//     let createBoxesEl = createBoxes(input.value);
//     boxes.append(...createBoxesEl);
// }

// destroyBtn.addEventListener('click', () => {
//     destroyBoxes();
// });

// const destroyBoxes = () => {
//     boxes.innerHTML = '';
// };

// =======================Вар-2==================================

const input = document.querySelector('#controls>input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes (amount) {
    const allElements = [];
    for (let i = 1; i <= amount; i+=1) {
        const div = document.createElement('div');
        div.style.height = `${30 + 10 * i}px`;
        div.style.width = `${30 + 10 * i}px`;
        div.style.background = getRandomHexColor();
        allElements.push(div);
    }
    return allElements;
};

btnCreate.addEventListener('click', () => boxes.append(...createBoxes(input.value)));

btnDestroy.addEventListener('click', () => (boxes.innerHTML = ''));
