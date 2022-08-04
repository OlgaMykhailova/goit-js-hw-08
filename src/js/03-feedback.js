import throttle from 'lodash.throttle';

const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const formEl = document.querySelector('.feedback-form');
const formDataInput = {};

fillingInput();

formEl.addEventListener('input', onInput);
formEl.addEventListener('submit', onSubmitClick);

function onInput(event) {
  formDataInput[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formDataInput));
  console.log(formDataInput);
}

function onSubmitClick(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
}

function fillingInput() {
  if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
    const savedInput = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(savedInput);

    if (savedInput.email) {
      inputEl.value = savedInput.email;
    }
    if (savedInput.message) {
      textareaEl.value = savedInput.message;
    }
  }
}
