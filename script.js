const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = form.checkValidity();
    console.log(isValid);
    
    if(!isValid) {
        const firstInvalid = form.querySelector(":invalid");
        firstInvalid.focus();
        const invalidArray = form.querySelectorAll(':invalid');
        for (let invalid of invalidArray ) {
            invalid.classList.add("outline-rose-500", "outline-1");
            invalid.setAttribute("aria-invalid", "true");
        }
    }
    else {
        showSuccessMessage();
    }

})

form.querySelectorAll("input, select, textarea").forEach(field => {
    field.addEventListener("input", ()=> {
        field.classList.remove("outline-rose-500", "outline-1");
        field.removeAttribute("aria-invalid");
    });
});

function showSuccessMessage() {
    const message = document.createElement('div');
    message.textContent = "Application submitted successfully!";
    message.classList.add("fixed", "top-4", "right-4",  "bg-cyan-700",  "text-white","p-3", "rounded-md", "shadow-lg");
    message.setAttribute("aria-live", "polite");
    message.setAttribute("role", "status");
    document.body.appendChild(message);
    setTimeout(() => message.remove()
    ,3000)
}