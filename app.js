(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function sendEmail(e) {
    e.preventDefault()
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var subject = document.getElementById("subject").value
    var message = document.getElementById("message").value
    if(!name || !email || !subject || !message) {
        alert("Fill all fields and try again")
        return
    }
	Email.send({
        isNotMendrill: true,
        Username: 'naimbiswas221@gmail.com',
        Password: '9BA9EF98F5228278BEA892E78C1D1E07E073',
        Host: 'smtp.elasticemail.com',
        Port: '2525',
        From: "naimbiswas221@gmail.com",
        To : 'nayeembiswas2@gmail.com',
        Subject :subject,
        Body :  `email: ${email} <br/> name:${name} <br/> Subject: ${subject} <br/> message: ${message}`,
	}).then(res =>{ 
        alert('Message has been send');
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("subject").value = ""
        document.getElementById("message").value = ""
    }, function(error) {
        console.log('FAILED...', error);
    });

}