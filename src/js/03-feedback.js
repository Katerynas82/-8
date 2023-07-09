import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';

const ref = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const formData = {};

ref.form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));

  console.log(evt.target.name);
  console.log(evt.target.value);
});

function populateFormFields() {
  const savedFormData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (savedFormData) {
    ref.input.value = savedFormData.input || '';
    ref.textarea.value = savedFormData.textarea || '';
  }
}

const clearForm = function () {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  ref.form.reset();
};

const throttledSubmit = throttle(function (evt) {
  evt.preventDefault();
  clearForm();
  updateFormData();
}, 500);

window.addEventListener('DOMContentLoaded', populateFormFields);

// formData.addEventListener('submit', populateFormFields);

// import throttle from 'lodash.throttle';

// const LOCAL_STORAGE_KEY = 'feedback-form-state';

// const ref = {
//   form: document.querySelector('.feedback-form'),
//   input: document.querySelector('.feedback-form input'),
//   textarea: document.querySelector('.feedback-form textarea'),
// };

// const formData = {};

// ref.form.addEventListener('input', evt => {
//   formData[evt.target.name] = evt.target.value;
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));

//   console.log(evt.target.name);
//   console.log(evt.target.value);
// });

// function popularTextarea() {
//   const saveFormData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//   if (saveFormData) {
//     ref.textarea.value = saveFormData;
//   }
// }
// const clearForm = function () {
//   localStorage.removeItem(LOCAL_STORAGE_KEY);
//   form.reset();
// };

// const throttledSubmit = throttle(function (evt) {
//   evt.preventDefault();
//   updateFormData();
// }, 500);

// // formData.addEventListener('submit', throttledSubmit);

// function receivingLocalStorageValue() {
//   const localStorageValue = JSON.parse(
//     localStorage.getItem('feedback-form-state')
//   );

//   if (localStorageValue) {
//     form.email.value = localStorageValue.email;
//     form.message.value = localStorageValue.message;
//   }}

// ref.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// const formData = {
//   email: email.value,
//   message: message.value,
// };
// console.log(formData);
// saveFormData(formData);

// const saveFormData = function (formData) {
//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// };

// // const emailInput = document.querySelector('input');
// // const messageInput = document.querySelector('textarea');

// const { email, message } = evt.target.elements;

// // const updateFormData = function () {

// const clearForm = function () {
//   localStorage.removeItem('feedback-form-state');
//   form.reset();
// };

// const throttledSubmit = throttle(function (evt) {
//   evt.preventDefault();
//   clearForm();
//   updateFormData();
// }, 500);

// form.addEventListener('submit', throttledSubmit);
