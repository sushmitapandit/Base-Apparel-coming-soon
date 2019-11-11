//jshint esversion:6
function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // check email value against regex
}

function Validate() {
    var error = document.getElementById("error-msg");
    var email = document.getElementById("email");
    var errorIcon = document.getElementById("error-icon");
    error.innerHTML = "" ;// clear error message

    // if email is valid test submit form

    if (emailIsValid(email.value)) {
        error.innerHTML = "";
        errorIcon.style.visibility = "hidden" ;// hide icon
        document.getElementById("email").classList.remove("error"); // remove error clas from email input
        //return true
        alert("Thank you.");
        email.value = "" ;// clear email input


    } else {

        // if email is not valid do not submit and add error messages

        error.innerHTML = "Please provide a valid email" ;// populate error message
        errorIcon.style.visibility = "visible"; // make icon visible
        document.getElementById("email").classList.add("error"); // add error clas to email input
    }
    return false;
}
