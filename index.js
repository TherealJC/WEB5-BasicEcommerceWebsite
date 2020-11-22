//function signUpUpser() It has been set to run when the user clicks the submit button on the sign up page.
function signUpUser(){
    var username = document.getElementById('username') //set variables equal to the input fields
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var password2 = document.getElementById('password2');

    if(username.value.length == 0){ //IF the length of the 'username' user input is 0 (or nothing has been entered) return error message
        alert('Please fill in the username field'); //returns error if incorrect
    
    } else if(email.value.length == 0){ //checks if the input email value is equal to 0
        alert('Please fill in the email field');
    
    } else if(password.value.length == 0){ //checks if the input password value field is equal to 0
        alert('Please fill in the password field');

    } else if(password2.value.length == 0){ //checks if the password2 field is equal to 0
        alert('Please fill in both password fields');

    } else if(password.value !== password2.value){ //checks if the password2 field is equal to 0
        alert('Passwords entered do not match');

    } else if(username.value.length == 0 && email.value.length == 0 && password.value.length == 0 && password2.value.length == 0){ //checks all fields, displays when all fields are still empty
        alert('Please fill in email and password');

    } else { //successful account creation, saves the users input to local storage
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        alert('Your account has been successfully created, you will now be redirected to the Log In screen');
        window.open('/pages/login.html'); //opens the login page after details have been added to localstorage.
    } return false; //similar to prevent default, in that it stops the page from submitting when click function is run and input details are incorrect
}

// Check, checks if the users input matches an existing registry in localstorage
function logInUser(){
    var savedEmail = localStorage.getItem('email');
    var savedPassword = localStorage.getItem('password');

    var inputEmail = document.getElementById('inputEmail');
    var inputPassword = document.getElementById('inputPassword');

    if(inputEmail.value == savedEmail && inputPassword.value == savedPassword){
        alert('Log in succeeded, you will now be redirected to the Shopping page.');
        window.open('/pages/shop.html');
    } else {
        alert('Incorrect Username or Password, Please Try Again');
    } return false; //prevents default, stops the forms from submitting/resetting when onclick function is run
}


// //Setting a click event function for the submit button, 
// document.querySelector('#form').addEventListener('click', function(event) {
//         var savedEmail = localStorage.getItem('email');
//         var savedPassword = localStorage.getItem('password');
//         var inputEmail = document.getElementById('inputEmail');
//         var inputPassword = document.getElementById('inputPassword');
    
//         if(inputEmail.value == savedEmail && inputPassword.value == savedPassword){
//             alert('Congratulations, You are now logged in, you will now be redirected to the Home Page.');
//         }else{
//             alert('Incorrect Username or Password, Please Try Again');
//         }
//     event.preventDefault();
// }, false);