import throttle from 'lodash.throttle';

const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const formEl = document.querySelector('.feedback-form');
const formDataInput = {};

fillingInput();

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmitClick);

function onInput(event) {
  formDataInput[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formDataInput));
}

function onSubmitClick(event) {
  event.preventDefault();
  if (!inputEl.value || !textareaEl.value) {
    alert('Необхідно заповнити всі поля форми');
  } else {
    event.currentTarget.reset();
    console.log(localStorage.getItem('feedback-form-state'));
    localStorage.removeItem('feedback-form-state');
  }
}

function fillingInput() {
  if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
    const savedInput = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (savedInput.email) {
      inputEl.value = savedInput.email;
    }
    if (savedInput.message) {
      textareaEl.value = savedInput.message;
    }
  }
}
