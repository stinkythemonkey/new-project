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
}

if(phone === ''){
    isValid = false;
    alert("Please enter your phone number.")
} else if {
    phone.length < 10
    alert("Please enter a phone number longer than 10 numbers.")
}

if(!email){
    ifIsValid = false;
    alert("please enter a valid email address please.")
}

//If all the checks are correct then it will display this message.
function finishFunction() {
    alert("Thank you for completing the quiz.")
}



function checkAnswers() {
    /*Assign "0" to the score variable*/
    var score = 0;

    /*Assign the quiz elements to the quiz variable*/
    quiz = document.form.quiz.elements;

    /*Assign the answer to the question to the answer1 variable*/
    answer1 = quiz.growth.value; 

    //Check if the answer to the first question
        if(answer1 == "55") {
            //add 1 to the score if the user was correct
            score = score +1;
        }

        answer2 = quiz.talent.value;
            if(answer2 == "10"){
                score = score +1;
            }

            answer3 = quiz

    alert('Well done, your score was ...' + score);
*/}

function completedForm()(){
alert("Thank you for submitting an enquiry about Didsbury Good Neighbours, someone will be in touch with you soon. ")
}


const 