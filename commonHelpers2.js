import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */console.log("dfd");const e=document.querySelector(".feedback-form"),a="feedback-form-state-email",l="feedback-form-state-message";e.elements.email.value=localStorage.getItem(a)??"";e.elements.message.value=localStorage.getItem(l)??"";e.elements.email.addEventListener("input",t=>{localStorage.setItem(a,t.target.value)});e.elements.message.addEventListener("input",t=>{localStorage.setItem(l,t.target.value)});e.addEventListener("submit",t=>{t.preventDefault(),localStorage.removeItem(a),localStorage.removeItem(l),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map
