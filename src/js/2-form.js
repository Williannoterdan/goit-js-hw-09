let baseUser = { email: '', password: '' };

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
baseUser = JSON.parse(localStorage.getItem(localStorageKey));
form.elements.email.value = baseUser.email;
form.elements.message.value = baseUser.password;
console.log(localStorage);

form.elements.email.addEventListener('input', evt => {
  baseUser.email = evt.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(baseUser));
});
form.elements.message.addEventListener('input', evt => {
  baseUser.password = evt.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(baseUser));
});
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(baseUser);
  localStorage.removeItem(localStorageKey);
  form.reset();
});