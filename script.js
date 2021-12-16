$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});




/* 
function sendEmail() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var msg = document.getElementById("msg");
    var body = 'Name : ' + name + '<br>Email : ' + email + '<br>Subject: ' + subject + '<br>Message: ' + msg;
    Email.send({
        Host: "smtp.gmail.com",
        To: 'ayoubamerrr290@gmail.com',
        From: 'buoyadevlopper@mail.com',
        Subject: 'Contact Us',
        Body: body,
    }).then(
        message => {
            if (message == "ok") {
                alert("Email Send It.");
            } else {
                alert("Not Sent!!");
            }
        }
    );
}
*/
//Pure JavaScript 

/*
document.querySelector(document).ready(function() {
    document.querySelector('#menu').click(function() {
        document.querySelector(this).classList.toggle('fa-times');
        document.querySelector('header').classList.toggle('toggle');
    });
    document.querySelector(window).addEventListener('scroll load',function() {
        document.querySelector('#menu').removeClass('fa-times');
        document.querySelector('header').removeClass('toggle');
    });
});
*/