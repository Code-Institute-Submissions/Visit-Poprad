/* Code from Sending Emails lessons */
function sendMail(contactForm) {
    emailjs.send("gmail", "poprad", {
        "from_email": contactForm.emailadd.value
})
.then(
    function(response) {
         alert('Congratulations you have subscribed!'),
        console.log("SUCCESS", response);
/* Below clears the input form field after submission - from Slac and CI */        
        location.reload();
    },
    function(error) {
        console.log("FAILED", error);
    });
    return false;
}
