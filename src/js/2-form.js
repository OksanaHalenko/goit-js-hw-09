const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const input = form.querySelector("input");

form.addEventListener("submit", handelSubmit);

function handelSubmit(event) {
    event.preventDefault;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;
    console.log(email);
    console.log(message);
    
    if (email && message) {
        console.log({ email, message });
        localStorage.removeItem("feedback-form-state");
        event.currentTarget.reset();
}
}
