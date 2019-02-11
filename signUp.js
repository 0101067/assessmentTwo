function bCSignUpForm()
  {
    // These variable declarations gets the values from the user's input
    var bCUsername = document.getElementById("bCUsername").value;
    var bCPassword = document.getElementById("bCPassword").value;
    var bCPasswordConfirm = document.getElementById("bCPasswordConfirm").value;
    
    // These statements resets the problem text area below the droopdowns
    document.getElementById("usernameText").style.color = "#000000";
    document.getElementById("usernameText").innerHTML = "Username: ";
    
    document.getElementById("passwordText").style.color = "#000000";
    document.getElementById("passwordText").innerHTML = "Password: ";
    
    document.getElementById("passwordConfirmTextOne").style.color = "#000000";
    document.getElementById("passwordConfirmTextTwo").style.color = "#000000";
    
    document.getElementById("passwordConfirmTextOne").innerHTML = "Confirm ";
    
    document.getElementById("bCPassword").value = "";
    document.getElementById("bCPasswordConfirm").value = "";
    document.getElementById("problemTextArea").innerHTML = "";
    
    // This if statements checks if the password and confirm pass word dont' match
    if (bCPassword != bCPasswordConfirm)
      {
        // It will display the issue int the problem text are if they don't match
        document.getElementById("passwordText").style.color = "#ff0000";
        document.getElementById("passwordConfirmTextOne").style.color = "#ff0000";
        document.getElementById("passwordConfirmTextTwo").style.color = "#ff0000"
        
        document.getElementById("passwordText").innerHTML = "*Password: ";
        document.getElementById("passwordConfirmTextOne").innerHTML = "*Confirm";
        
        document.getElementById("problemTextArea").innerHTML = "Passwords do not match. Please confirm your password.";
      }
    else
      {
        // This if statement checks the username length and if it includes spaces
        if ((bCUsername.length < 6) || (bCUsername.includes(" ") === true))
          {
            // It will display the isee if the username is not suitable
            document.getElementById("usernameText").style.color = "#ff0000";
            document.getElementById("usernameText").innerHTML = "*Username: ";
            
            document.getElementById("problemTextArea").innerHTML = "Username has to be longer than six characters and contain no spaces. Please try again.";
          }
        else
          {
            var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                           "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"];
            
            var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            
            var errorCounter = true;
            var errorCounterTwo = true;
            var errorCounterThree = false;
            
            // This checks that if the password doesn't include a letter
            for (i = 0; i < letters.length; i++)
              {
                if (bCPassword.includes(letters[i]) === true) 
                  { 
                    errorCounter = false; 
                  }
              }
            
            // This checks that if the password doesn't include numbers
            for (i = 0; i < digits.length; i++)
              {
                if (bCPassword.includes(digits[i]) === true)
                  {
                    errorCounterTwo = false
                  }
              }
            
            // This if statement will check if the password is suitablly long, contain no spaces or semi-colons
            if ((bCPassword.length < 8) || (bCPassword.includes(" ") === true) || (bCPassword.includes(";")))
              {
                errorCounterThree = true;
              }
            
            // This if statement will display any errors if any come up
            if ((errorCounter === true) || (errorCounterTwo === true) || (errorCounterThree === true))
              {
                document.getElementById("passwordText").style.color = "#ff0000";
                document.getElementById("passwordConfirmTextOne").style.color = "#ff0000";
                document.getElementById("passwordConfirmTextTwo").style.color = "#ff0000"
        
                document.getElementById("passwordText").innerHTML = "*Password: ";
                document.getElementById("passwordConfirmTextOne").innerHTML = "*Confirm";
        
                document.getElementById("problemTextArea").innerHTML = "Password must contain both letters and numbers, be longer than eight characters and contain no spaces.<br> Please try again.";
              }
            else
              {
                // This will create a cookie that will expire in 365 days of the username and password
                var d = new Date();
                var exdays = 365;
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires="+ d.toUTCString();
                document.cookie = "username=" + bCUsername + "; " + expires + "; path=/";
                document.cookie = "password=" + bCPassword + "; " + expires + "; path=/";
                
                alert("Your account will expire in 365 days. You will need to recreate your account after this time. Please sign in.")
                
                window.open("/", "_self");
              }
          }
      }
  }