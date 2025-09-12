
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwMsS_U9MNweP1dJq8eSQxl4aCCTV1x7AI3MrWh2IDPPbgRgfRGufB_vfRxpu92TVR3lA/exec'; // Replace with your Google Apps Script URL

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);

    fetch(scriptURL, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset(); // Clear the form
        } else {
            alert('Failed to send message.');
        }
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert('An error occurred.');
    });
});
