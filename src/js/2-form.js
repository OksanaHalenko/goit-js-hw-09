const form = document.querySelector(".feedback-form");

let formState;
getFormInput();
form.addEventListener("submit", handelSubmit);
form.addEventListener("input", onFormInput);

function handelSubmit(event) {
    event.preventDefault;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;
    if (email && message) {
        console.log({ email, message });
        localStorage.removeItem("feedback-form-state");
        event.currentTarget.reset();
}
}
function onFormInput(event) {
     formState[event.target.name] = event.target.value.trim();
     localStorage.setItem("feedback-form-state", JSON.stringify(formState));
   
}
function getFormInput() {
   formState = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
    let savedEmail = formState.email;
    let savedMessage = formState.message;
    if (savedEmail) {form.elements.email.value = savedEmail }; 
    if (savedMessage) { form.elements.message.value = savedMessage }; 
     
}