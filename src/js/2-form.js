let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';


if (localStorage.getItem(localStorageKey)!== null) {
  formData = JSON.parse(localStorage.getItem(localStorageKey));
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.elements.email.addEventListener('input', evt => {
  formData.email = evt.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});
form.elements.message.addEventListener('input', evt => {
  formData.message = evt.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email !== "" && formData.message !== "") {
    console.log(formData);
    formData = { email: '', message: '' };
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
  else {
    alert('fill in all text fields ');
  }
});