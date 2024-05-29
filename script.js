function validateInput() {

     var fname =
        document.getElementById("fname").value;
    var lname =
        document.getElementById("lname").value;
    var email =
        document.getElementById("email").value;
    
    var emailerror=document.getElementById("emailerror");
        
    const nameError =     document.getElementById("name-error");
    // const passwordError = document.getElementById("password-error");

    

    let isValid = true;
    let regex=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

    // if (fname === "" || /\d/.test(fname)) {
    //     nameError.textContent =
    //         "Please enter your first name properly.";
    //     isValid = false;
    // }
    if (!regex.test(email)||email =="") {
        emailerror.innerText =
            "Please enter a valid email address.";
        isValid = false;
    }

    // if (password === "" || password.length < 6) {
    //     passwordError.textContent =
    //         "Please enter a password with at least 6 characters.";
    //     isValid = false;
    // }

    return isValid;

}


// function validateInput(){

//     var email=document.getElementById("email");
//     var emailerror=document.getElementById("emailerror");

//     if(email.value.trim()==""){
//         emailerror.innerText="Invalid";
//         return false;
//     }else{
//         return true;
//     }

// }