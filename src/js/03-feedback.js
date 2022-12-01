import throttle from 'lodash.throttle';
const form = document.querySelector('form');
const key = 'feedback-form-state';

// form.elements[required];
form.elements[0].setAttribute('required', '');
form.elements[1].setAttribute('required', '');

// check if storage has data when the page loaded
const storageData = localStorage.getItem(key);
if (storageData) {
  let storageDataObj = JSON.parse(storageData);

  form.email.value = storageDataObj.email;
  form.message.value = storageDataObj.message;
}

// on input

const storageDataUpdate = () => {
  localStorage.setItem(
    key,
    JSON.stringify({
      email: form.email.value,
      message: form.message.value,
    })
  );
};
form.addEventListener('input', throttle(storageDataUpdate, 500));

// // on submit click
const onSubmit = ev => {
  ev.preventDefault();
  console.log(JSON.parse(localStorage.getItem(key)));
  localStorage.removeItem(key);
  form.reset();
};
form.addEventListener('submit', onSubmit);
