import throttle from 'lodash.throttle';

const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formDataInput =
  JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

fillingInput();

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmitClick);

function onInput(event) {
  console.log(event.target.value);
  if (event.target.value) {
    formDataInput[event.target.name] = event.target.value;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formDataInput));
}

function onSubmitClick(event) {
  event.preventDefault();
  if (!inputEl.value || !textareaEl.value) {
    alert('Необхідно заповнити всі поля форми');
  } else {
    event.currentTarget.reset();
    console.log(localStorage.getItem(STORAGE_KEY));
    localStorage.removeItem(STORAGE_KEY);
  }
}

function fillingInput() {
  if (JSON.parse(localStorage.getItem(STORAGE_KEY))) {
    const savedInput = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedInput.email) {
      inputEl.value = savedInput.email;
    }

    if (savedInput.message) {
      textareaEl.value = savedInput.message;
    }
  }
}
