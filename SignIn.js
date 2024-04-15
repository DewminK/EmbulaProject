function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}
var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");
function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}
function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

//Form Validation

function validateForm(event,form){
    var fname=form.FName.value;
    var lname=form.LName.value;
    var mobnumber=form.MobileNum.value;
    var password=form.Password.value;
    var conpassword=form.ConfirmPassword.value;
    var email=form.Email.value;
    var returnval=false;
    var a=true;//by default the values are set to be zero
    var b=true;
    var c=true;
    var d=true;

    if(fname=="" || lname=="" || password=="" ||mobnumber=="" || conpassword=="" || email==""){
        alert("Warning !!! Empty Fields");
        a=false;
    }
    if(confirmpassword(password,conpassword)==false){
        alert("Passwords Are Not Matching ");
        b=false;
    }
    if(validateEmail(email)==false){
        alert("Invalid Email Address");
        c=false;
    }
    if(validateMobNumber(mobnumber)==false){
        alert("Invalid Mobile Number");
        d=false;
    }
    if(a==true && b==true && c==true &&d==true){
        returnval=true;
    }else{
        returnval=false;
        event.preventDefault();//prevent form submitting the form
    }

    return returnval;
}

function confirmpassword(p1,p2){
    if(p1==p2){
        return true;
    }
    else{
        return false;
    }
}

function validateEmail(form){
    var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
    var address=form;
    if(reg.test(address)==false){
        return false;
    }
    else{
        return true;
    }
}

function validateMobNumber(mobnum){
    var reg=/^[0-9]{10}$/;

    if(reg.test(mobnum)==false){
        return false;
    }else{
        return true;
    }
}
