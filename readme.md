Jamie Crowther

# Journal

I have used the same repo that I used to host my website on gh-pages in assessment 2.
To keep it clean and start fresh, I removed all previous commits. This was done by:
1. git checkout --orphan latest_branch (create and checkout new branch)
2. git add -A (add files to the new branch)
3. git commit -m "this becomes the first commit in the new branch" (Commit the changes)
4. git branch -D gh-pages (Deletes the old branch)
5. git branch -m gh-pages (Rename the current branch to replace the just deleted gh-pages)
6. git push -f origin master (force updates the repository)

### Troubleshooting the login/signup forms resetting

At first, I wasn't sure if I should hard code in some user account objects, and then write a loop to check all object records in local storage and return success if the users input matches an existing registration. I decided to only accept Log In's that the user has entered into local storage themselves through the registration/signup function.
When the user completes the sign up form, the registration function is run, it checks that all the fields meet the requirements, and then adds the users input email and password to the browsers localstorage.
The user is then redirected to the log in screen to enter their newly created account details. This function also checks that all fields meet the requirements, and if a matching email and password are found, the user recieves a success message and is redirected to the shopping page.

It took me quite a bit of trial and error to get the form to stop resetting. All the info I found was with 'click' events and the event functions.
I found this page -'How to prevent default event handling in an onclick method.' (August 14, 2011). which helped me figure out how that I could use return false at the end of the function, this stops the form from always submitting and resetting when the function is called/button is clicked. For the false method, I found that it would not work if i didnt also have the 'return' in the html onclick tag aswell.

onclick='registerUser'(); would not work, but onclick='return registerUser'(); would work, as it gives it a real return value.

Stack Overflow. (August 14, 2011).  How to prevent default event handling in an onclick method. https://stackoverflow.com/questions/7056669/how-to-prevent-default-event-handling-in-an-onclick-method.

### Payment form function

This function I wrote checks if the input fields are equal to 0, similar to the login and register functions.
Once successful the user will be redirected back to the home screen where they can see a dynamic greeting and background depending on the time of day.

For the login, register, and payment pages forms and form inputs, I used the SignUp-Javascript repo from Ali for reference on the styling. -Ali Kahwaji. (October 20, 2020). SignUp-JavaScript. GitHub https://github.com/alikahwaji/SignUp-JavaScript.

### Cleaning up code

I then went through and tidied up all of the html and css. I have added in comments to explain most of whats happening on each page/function/style.
I removed redundant code and improved the existing design and layout of the website.

### Making the home page a dynamic display 

I have made multiple functions to add some dynamic features to the website, primarily on the home/landing page.

1. I have included a clock that updates every second. This is a great feature that I saw while studying. This video was the biggest help to me for this area -Traversy Media, (June 11, 2019), 'Dynamic Landing Page'.
2. I have wrote a function for the home page that checks if a user has registered, if they have, it retrieves their username from localstorage, and displays it on the header, letting the user know that they are logged into their account.
3. The home page greeting also changes depending on the users username in localstorage, it will use the users name for the greeting text.

### Considerations

1. In a real scenario, localstorage and JS code would never be used to store sensitive PII, as this is a huge security risk and is very simple to access the data. For this type of site, software like Firebase would be used to securely store and retrieve users account information.
As we were practicing with the localStorage, i just kept this as is.

2. Some Input entry fields dont check for all requirements, such as email doesnt check if its a valid email.
The payment form function has been set up to rigorously check that the input data meets the requirements, such as cvc being only 3 digits etc.


#### References / Resources Used

Ali Kahwaji. (October 20, 2020). SignUp-JavaScript. GitHub https://github.com/alikahwaji/SignUp-JavaScript.

Stack Overflow. (August 14, 2011).  How to prevent default event handling in an onclick method. https://stackoverflow.com/questions/7056669/how-to-prevent-default-event-handling-in-an-onclick-method.

Traversy Media. (June 11, 2019). Dynamic Landing Page | Javascript. Youtube. https://www.youtube.com/watch?v=fSTQzlprGLI&t=1049s