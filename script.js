//What I want in my javascript:
// Validation of name, email and phone number
//Show alert message when a validation fails
//Show an alert message when all the validation check are correct 
//Reset the form after submission

//Form values

const username = document.getElementById('username').value();
const phone = document.getElementById('phone').value();
const email = document.getElementById('email').value();
const age = document.getElementById('age').value();


// Check the validation of the values in the form

let ifIsValid = true;



if(username == "") {
    ifIsValid = false;
    alert("Please enter a valid name")
}

if(phone === ''){
    isValid = false;
    alert("Please enter your phone number.")
} else if {
    phone.length < 10
    alert("Please enter a phone number longer than 10 numbers.")
}

if(!email[email]){
    ifIsValid = false;
    alert("please enter a valid email address please.")
}



function completedForm(){
alert("Thank you for submitting an enquiry about Didsbury Good Neighbours, someone will be in touch with you soon. ")
}


