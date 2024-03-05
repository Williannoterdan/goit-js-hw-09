let baseUser = { email: '', password: '' };
console.log('dfd');

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
let a = localStorage.getItem(localStorageKey);
a = a.p("");
console.log(a);
form.elements.email.value = localStorage.getItem(localStorageKey) ?? '';
form.elements.message.value = localStorage.getItem(localStorageKey) ?? '';
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
  let emailos = event.target.email.value;
  let passwordos = event.target.message.value;
  baseUser = {
    email: emailos,
    password: passwordos,
  };
  console.log(baseUser);
  localStorage.removeItem(localStorageKey);
  localStorage.removeItem(localStorageKey);
  form.reset();
});