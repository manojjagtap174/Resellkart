// js/script.js
console.log("Website script loaded successfully!");

// Example: Basic form submission handler (client-side only, for demonstration)
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // In a real application, you would send this data to a server.
            // For now, let's just log it and show an alert.
            const formData = new FormData(signupForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            console.log('Form Data:', formObject);
            alert('Form submitted successfully! (This is a client-side alert)');

            // You might want to reset the form after successful submission
            signupForm.reset();
        });
    }
});