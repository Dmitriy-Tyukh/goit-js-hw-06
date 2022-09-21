// Задание 8
// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

// ======================Вар-1=============================

// const formEL = document.querySelector('.login-form');
// formEL.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();

//     // кажеться что formData пустой обект
//     const formData = new FormData(event.currentTarget);
//     console.log(formData);

//     // проверяем formData
//     formData.forEach((value, name) => {
//         if (value === '') {
//             return alert('Все поля должны быть заполнены');
//         };
//     // console.log(value);
//     // console.log(name);
//     });
//      event.currentTarget.reset();
// } 


// =========================Вар-2=============================

const formEL = document.querySelector('.login-form');
formEL.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;
    
    const formSubmitValue = { Email: email.value, Password: password.value };
    console.log(formSubmitValue);
    
    if (email.value === '' || password.value === '') {
        alert('Все поля должны быть заполнены');
        return;
    }
    event.currentTarget.reset();
} 

// ============================Вар-3==================================

// !Решение согласно требований + стиль предупреждения - мигалка аля ZX - Specrum

// const formRef = document.querySelector(".login-form");

// formRef.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "") {
//     // console.log(email);
//     email.blinkBlink();
//     return;
//   }
//   if (password.value === "") {
//     password.blinkBlink();
//     return;
//   }

//   console.log({
//     email: email.value,
//     password: password.value,
//   });

//   event.currentTarget.reset();
// }

// // Функция-мигалка
// Object.prototype.blinkBlink = function () {
//   let counter = 3;

//   const firstColor = "red";
//   const secondColor = "white";

//   //   console.log("THIS в начале функции", this);

//   if (this.style.backgroundColor === secondColor) {
//     // this.value = "Fill me";
//     this.style.backgroundColor = firstColor;
//     this.style.color = secondColor;
//   } else {
//     this.style.backgroundColor = secondColor;
//     this.style.color = firstColor;
//   }

//   //   console.log("THIS в КОНЦЕ функции", this);
//   setTimeout(blinkBlink.bind(this), 350);
// };