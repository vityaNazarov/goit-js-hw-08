// import throttle from 'lodash.throttle';
// const refs = {
//   form: document.querySelector('.feedback-form'),
//   email: document.querySelector('input'),
//   message: document.querySelector('textarea'),
//   button: document.querySelector('button'),
// };
// refs.form.addEventListener('submit', onButtonClick);
// refs.form.addEventListener('input', throttle(onInputClick, 500));

// const LOCALSTORAGE_KEY = 'feedback-form-state';
// const formDate = {};

// function onButtonClick(e) {
//   e.preventDefault();
//   if (refs.email.value === '') {
//     alert('всі поля повинні бути заповнені!');
//   } else if (refs.message.value === '') {
//     alert('всі поля повинні бути заповнені!');
//   } else {
//     localStorage.removeItem(LOCALSTORAGE_KEY);
//     console.log(formDate);
//     e.currentTarget.reset();
//   }
// }

// function onInputClick(e) {
//   formDate[e.target.name] = e.target.value;
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formDate));
// }
// if (localStorage.getItem(LOCALSTORAGE_KEY)) {
//   console.log(localStorage);
// }

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const formEl = document.querySelector('form');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onformEl, 500));

fillForm();

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.target;

  console.log({ Email: email.value, Message: message.value });

  formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onformEl(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillForm() {
  const savedForm = localStorage.getItem(STORAGE_KEY);

  if (savedForm) {
    const parceSavedForm = JSON.parse(savedForm);

    const keys = Object.keys(parceSavedForm);
    for (const key of keys) {
      formEl.elements[key].value = parceSavedForm[key];
      formData[key] = parceSavedForm[key];
    }
  }
}
