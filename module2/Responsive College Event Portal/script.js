```javascript
// Event Registration
function registerEvent(eventName) {

    alert(
        "You have successfully registered for " +
        eventName + "!"
    );

}


// Contact Form
const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thank you, " + name +
        "! Your message has been submitted successfully.";

    contactForm.reset();

});
```