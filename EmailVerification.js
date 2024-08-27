// const email = document.getElementsByName('Email')[0].value;
// window.alert(email);    
OTPverify();

function OTPverify() {
    const email = document.getElementsByName('Email')[0].value; // Get the email value
    // alert(email);
    const otpInput = document.getElementsByClassName('input-field')[0];
    
    let otp_val = Math.floor(Math.random() * 10000);
    let emailbody = `<h3>Your OTP value is ${otp_val}</h3>`;

    Email.send({
        SecureToken: "5b4b6298-68aa-4555-b043-f69c55e1776b",
        To: email.value,
        From: "aparaelpitiya@gmail.com",
        Subject: "Email Verification",
        Body: emailbody
    }).then(message => {
        if (message === "OK") {
            alert("OTP sent to your email " + email);

            // OTP Verification
            const otpValue = document.querySelector('.Email-card-inputs');
            const verifyBtn = document.querySelector('.Email_val');

            verifyBtn.addEventListener('click', () => {
                const enteredOTP = otpValue.value.replace(/\D/g, ''); // Remove non-numeric characters
                if (enteredOTP === otp_val.toString()) {
                    alert("Email address verified ");
                    // Redirect to SignIn.html
                    window.location.href = 'SignIn.html';
                } else {
                    alert("Invalid OTP");
                }
            });
        }
    });
}
