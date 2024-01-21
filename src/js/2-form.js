let baseUser = { email: '', password: '' };
console.log('dfd');

const form = document.querySelector('.feedback-form');
const localStorageKeyEmail = 'feedback-form-state-email';
const localStorageKeysMessage = 'feedback-form-state-message';
form.elements.email.value = localStorage.getItem(localStorageKeyEmail) ?? '';
form.elements.message.value =localStorage.getItem(localStorageKeysMessage) ?? '';

form.elements.email.addEventListener('input', evt => {
  localStorage.setItem(localStorageKeyEmail, evt.target.value);
});
form.elements.message.addEventListener('input', evt => {
  localStorage.setItem(localStorageKeysMessage, evt.target.value);
});
form.addEventListener('submit', event => {
  event.preventDefault();
  let emailos = event.target.email.value;
  let passwordos = event.target.message.value;
  baseUser = {
    email: emailos,
    password: passwordos,
  };
  console.log(baseUser);
  localStorage.removeItem(localStorageKeyEmail);
  localStorage.removeItem(localStorageKeysMessage);
  form.reset();
});