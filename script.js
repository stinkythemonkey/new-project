//What I want in my javascript:
// Validation of name, email and phone number
//Show alert message when a validation fails
//Show an alert message when all the validation check are correct 
//Reset the form after submission
// === - checks the equal value and equal type  

//Form values

const username = document.getElementById('username').value();
const phone = document.getElementById('phone').value();
const email = document.getElementById('email').value();
const age = document.getElementById('age').value();


// Check the validation of the values in the form

let ifIsValid = true;

/*Name Validation */
if(username ==== "") {
    ifIsValid = false;
    alert("Please enter a valid name");
}

//Phone Validation */
if(phone === ''){
    isValid = false;
    alert("Please enter your phone number.")
} else if (phone.length < 10) {
    alert("Please enter a phone number that is 10 digits.");
}


/*Email validation*/
if (email === "" || !email.includes("@")|| email.includes(".")){
    ifIsValid = false;
    alert("please enter a valid email address please.");
}

/*if(isValid){
    completedForm();
}

function completedForm(){
alert("Thank you for submitting an enquiry about Didsbury Good Neighbours, someone will be in touch with you soon. ");
}
*/

