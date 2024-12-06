document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name &&  message) {
        const templateParams = {
            user_name: name,
            user_email: email,
            message: message
        };

        // Mengirim email menggunakan EmailJS
        emailjs.send('service_x9dzuus', 'template_xocwtfw', templateParams)
            .then(function(response) {
                alert('Thank you for your message, ' + name + '! I will get back to you soon.');
            }, function( error ) {
                alert('Failed to send message. Please try again later.');
            });
    } else {
        alert('Please fill out all fields before submitting.');
    }
});