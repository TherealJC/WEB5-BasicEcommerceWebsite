//function registerUpser() has been set to run when the user clicks the submit button on the sign up page.
//It checks that all required fields are valid, and adds the users details to the local storage to use for the log in function

function registerUser(){
    var username = document.getElementById('username'); //set variables equal to the input fields
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
        localStorage.setItem('username', username.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        alert('Your account has been successfully created, you will now be redirected to the Log In screen');
        window.open('/pages/login.html' , '_self'); //opens the login page after details have been added to localstorage.
    } return false; //similar to prevent default, in that it stops the page from submitting when click function is run and input details are incorrect
}

//----------------------------------------------------------------------------------------------------------

//loginUser() checks if the users input account details match an existing registry in localstorage (declared through sign up page or registerUser function)
function logInUser(){
    var savedEmail = localStorage.getItem('email'); //gets the email from localStorage from register function, and applies it to a js variable
    var savedPassword = localStorage.getItem('password'); //retrieves the password from localStorage and applies to var

    var inputEmail = document.getElementById('inputEmail'); //gets users input email when function is run
    var inputPassword = document.getElementById('inputPassword'); //gets users input password when function is run

    if(inputEmail.value == savedEmail && inputPassword.value == savedPassword){ //if users input matches existing localStorage entry, proceed
        alert('Log in succeeded, you will now be redirected to the Home page.');
        window.open('../index.html','_self'); //opens new window (_self makes the page open on the same tab)
    } else {
        alert('Incorrect Username or Password, Please Try Again');
    } return false; //like prevents default, stops the forms from submitting/resetting when onclick function is run
}

//----------------------------------------------------------------------------------------------------------

//Checks the input fields in the payment page
function checkPayment(){
    var cardNo = document.getElementById('cardNo');
    var cvc = document.getElementById('CVC');

    if (cardNo.value.length == 0){ //checks card number length, returns error if empty
        alert('Please enter your card number');
    } 
    else if (cardNo.value.length <16 || cardNo.value.length >=19) { //If cardNo length is LESS THAN 16 or more than 19, return error, this allows for 16 digits (and 3 hyphens).
        alert('The Card number must be be 16 digits, hyphens can be used in regular spaces');
    } 
    else if (cvc.value.length == 0){ //return error if cvc is empty
        alert('Please enter your cards CVC');
    } 
    else if (cvc.value.length == 1 || cvc.value.length == 2 || cvc.value.length >3 ){ //return error if CVC length 1, 2, or more than 3. This only accepts 3 digits max
        alert('CVC only contains 3 digits');
    } 
    else { //If successful, transfer back to shopping page.
        alert('Transaction Success ! (Nothing happens, you will now be redirected to the Shopping page')
        window.open('/pages/shop.html','_self');
    } return false;
}

//----------------------------------------------------------------------------------------------------------

//Creating a dynamic home page clock
//set DOM elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');

// Options
const showAmPm = true; 

function showCurrentTime() {
    let today = new Date(), //create current date and time
     hour = today.getHours(), //(number between 0-23) sets var equal to current times hours
     min = today.getMinutes(),
     sec = today.getSeconds();
    
    //Set AM or PM
    const amOrPm = hour >= 12 ? 'PM' : 'AM'; //if current hour is greater than or equal to 12 show PM, else show AM

    //change to a 12 hour format
    hour = hour % 12 || 12; //stops time format from going over 12

    //Output time, pushes curent time to update the innerHTML of the time tag
    time.innerHTML = `${hour}<span>:</span>
    ${addZero(min)}<span>:</span>
    ${addZero(sec)}
    ${showAmPm ? amOrPm : ''}`;

    //call function every second to update clock time
    setTimeout( showCurrentTime, 1000);
}

//Adds zeroes into the date to format correctly, makes 1:01:01 instead of 1:1:1
function addZero(n) { //called on minutes and seconds
    return (parseInt(n, 10) < 10 ? '0' : '') + n; //If 'n' (current minutes/seconds) = less than 10, add 0, else add nothing, add the date number add the end
}

//----------------------------------------------------------------------------------------------------------

//Change the greeting text depending on time of day
function setGreeting() {
    let today = new Date(),
    hour = today.getHours();
    
    if (hour < 12) {
        // Morning home screen
        document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
        greeting.textContent = "Good Morning, It's a beautiful day. Welcome";
    
    } else if (hour < 18) {
        // Midday home screen
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon, Welcome to The Crowther Express';

    } else {
        // Night time home screen
        document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = "Good Evening, Welcome to The Crowther Express";
        document.body.style.color = 'white';
      }
    }

//----------------------------------------------------------------------------------------------------------

// Get Name, changes the NAME displayed on home page depending on Username input when registering.
function getUsersName() {
    if (localStorage.getItem('username') === null) {
      name.textContent = '';
    } else {
      name.textContent = localStorage.getItem('username');
    }
  }

//----------------------------------------------------------------------------------------------------------

//This function displays the users name in the header of home page if they have registered their acc to local storage
const userAcc =  document.getElementById('userAcc'); //set var for p tag in header to display username

function displayUser() {
    if (localStorage.getItem('username') === null) { //If no username has been set, 
        userAcc.textContent = 'Guest';
      } else {
        userAcc.textContent = localStorage.getItem('username'); //change the tags inner html to the users localstorage username
      }
}

//----------------------------------------------------------------------------------------------------------

//Call the functions
showCurrentTime(); //Dynamic clock
getUsersName(); //display current username in home page welcome
displayUser(); //Displays cuurent user in header
setGreeting(); //changes the home page text and background image depending on the clock time