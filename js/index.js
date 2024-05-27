function showDialogue(active, inActive) {
    var activePage = document.getElementById(active);
    activePage.style.display = "flex";
    activePage.className = "animate__animated animate__fadeIn";
    var inActivePage = document.getElementById(inActive);
    inActivePage.style.display = "none";
}
window.onload = function() {
    var eyeButton = document.getElementById("eye-btn");
    var eyeIcon = document.getElementById("eye-icon");
    eyeButton.onclick = function() {
        var passwordInput = document.getElementById("password-input");
        if(passwordInput.type == "password") {
            passwordInput.type = "text";
            eyeIcon.className = "fa fa-eye-slash";
            eyeIcon.style.color = "deeppink";
            
        }
        else {
            passwordInput.type = "password";
            eyeIcon.className = "fa fa-eye";
            eyeIcon.style.color = "#323232";
            
        }

        
    }
    var signupButton = document.getElementById("signup-btn");
    signupButton.onclick = function() {
        Swal.fire({
            title: "Register success",
            icon: "success"
        })
    }
    var loginButton = document.getElementById("login-btn");
    loginButton.onclick = function() {
        Swal.fire({
            title: "Login success",
            icon: "success"
        })
    }
}
