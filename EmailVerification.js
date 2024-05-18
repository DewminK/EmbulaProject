function OTPverify() {
    const email = document.getElementsByName('Email')[0].value; // Get the email value
    const otpInput = document.getElementsByClassName('input-field')[0];
    
    let otp_val = Math.floor(Math.random() * 10000);
    let emailbody = `<h3>Your OTP value is ${otp_val}</h3>`;

    Email.send({
        SecureToken: "d4d8de78-9708-422e-b736-5846d9006823",
        To: email,
        From: "dewminkasmitha30@gmail.com",
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
