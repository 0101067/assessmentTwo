var signUpButtonExist = false;
var attemptsCounter = 0;

// This function opens a page
function openPage(pageName)
  {
    window.open(pageName, "_self");
  }

// This function reads the cookie that stores the username and password
function cRead()
  {
    var cSpool = document.cookie;
   
    var bCUsernameSplitOne = cSpool.split("username=");
    var bCUsernameSplitOneResult = bCUsernameSplitOne[1];
    var bCUsernameSplitTwo = bCUsernameSplitOneResult.split(";");
    
    var bCPasswordSplitOne = cSpool.split("password=");
    
    var bCUsername = bCUsernameSplitTwo[0];
    var bCPassword = bCPasswordSplitOne[1];
    
    return [bCUsername, bCPassword];
  }

function bCIndexForm(event)
  {
    event.preventDefault();
    
    // These statements save the username and password from the cookie as variables for the duration of the function    
    var bCAccount = cRead();
    var bCUsername = bCAccount[0];
    var bCPassword = bCAccount[1];
    
    // These statements gets the guesses from the user
    var bCUsernameGuess = document.getElementById("bCUsernameGuess").value;
    var bCPasswordGuess = document.getElementById("bCPasswordGuess").value;
    
    // This if statement checks that the user hasn't failed too many times to login
    if (attemptsCounter < 3)
      {
          // This adds one to the attempts counter
          attemptsCounter += 1;  
        
          // This if statement checks if the guesses doesn't match the variables from the cookie
          if ((bCUsername != bCUsernameGuess) || (bCPassword != bCPasswordGuess))
            {
              // This statement displays a message to the user
              document.getElementById("problemTextArea").innerHTML = "The Username or Password you entered is incorrect.<br> Would you like to sign up."
              
              // This statement empties the password input box
              document.getElementById("bCPasswordGuess").value = "";
              
              // This checks if the sign up button next to the sign in button exists if it doesn't it will create one
              if(signUpButtonExist === false)
                {
                  signUpButtonExist = true;

                  var button = document.createElement("button");
                  button.innerHTML = "Sign Up";
                  var buttonArea = document.getElementById("buttonArea");
                  buttonArea.appendChild(button);

                  button.className = "button";

                  button.addEventListener("click", openPage("/"));
                }
            }
          else
            {
              // If the guesses matches the variables from the cookie it will open the booking page
              window.open("booking", "_self");
            }
        }
      else
        {
          // This else statements is triggered when the user fails to login too many times and will delete the cookie
          document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          
          // This displays a message to the user
          alert("You failed to log in. You will need to recreate your account.");
                    
          // This reloads the page
          openPage("/");
        }
   }