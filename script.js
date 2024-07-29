
const sform = document.getElementById('signupForm');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
// const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// const phonenumber = document.getElementById('phonenumber');

sform.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());   
}

const isValidPhonenumber = phonenumber => {
    var regx = /^[6-9]\d{9}$/ ;
    return regx.test(phonenumber);   
}
const isValidPassword = password => {
    var regx = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/ ;
    return regx.test(password);   
}

 

const validateInputs = () => {
    const emailValue = email.value.trim();
    const fnameValue=fname.value.trim();
    const lnameValue=lname.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const phonenumberValue=phonenumber.value.trim();

    if(fnameValue === '') {
        setError(fname, 'First name is required');
    } else {
        setSuccess(fname);
    }
    if(lnameValue === '') {
        setError(lname, 'Last name is required');
    } else {
        setSuccess(lname);
    }
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(phonenumberValue === '') {
        setError(phonenumber, 'Phonenumber is required');
    } else if (!isValidPhonenumber(phonenumberValue)) {
        setError(phonenumber, 'Provide a valid phone number');
    } else {
        setSuccess(phonenumber);
    }
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (!isValidPassword(passwordValue)) {
        setError(password, 'Please follow the instructions below');
    } else {
        setSuccess(password);
    }
    

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};
