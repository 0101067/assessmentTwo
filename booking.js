var ticket = {username: "", artist: "", venue: "", bookedDate: "", price: 0.00};
var submitButtonExist = false;

// Function that puts all the details about the ticket into Session Storage to be used on the Ticket page
function bCBookingForm()
  {
    var cSpool = document.cookie;
    
    var bCUsernameSplitOne = cSpool.split("username=");
    var bCUsernameSplitOneResult = bCUsernameSplitOne[1];
    var bCUsernameSplitTwo = bCUsernameSplitOneResult.split(";");
    
    ticket.username = bCUsernameSplitTwo[0];
        
    sessionStorage.setItem("ticket0", ticket.username);
	  sessionStorage.setItem("ticket1", ticket.artist);
	  sessionStorage.setItem("ticket2", ticket.venue);
	  sessionStorage.setItem("ticket3", ticket.bookedDate);
    sessionStorage.setItem("ticket4", ticket.price);
    
    window.open("ticket", "_self");
  }

function artistSelected()
  {
    // This statement gets the value of the artist dropdown
    ticket.artist = document.getElementById("bookingArtist").value;
    
    // This statement disables the artist dropdown
    document.getElementById("bookingArtist").disabled = true;
    
    var x = document.getElementById("bookingVenue");
    
    // This adds a null option to the next dropdown that asks to select the venue
    var optionNull = document.createElement("option");
	  optionNull.text = "Please select a venue.";
	  optionNull.value = "null";
    optionNull.disabled = true;
    optionNull.selected = true;
	  x.add(optionNull);
    
    // Based on the artist selected it will add venues to the venue dropdown
    switch (ticket.artist) {
      case "againstMe":
        var optionOne = document.createElement("option");
        optionOne.text = "House of Blues - Boston";
        optionOne.value = "boston";
        x.add(optionOne);
        break;
      case "helloween":
        var optionTwo = document.createElement("option");
        optionTwo.text = "O2 Academy Brixton - London";
        optionTwo.value = "london";
        x.add(optionTwo);
        
        var optionThree = document.createElement("option");
        optionThree.text = "Palladium - Worcester";
        optionThree.value = "worcester";
        x.add(optionThree);
        
        var optionFour = document.createElement("option");
        optionFour.text = "Irving Plaza - New York City";
        optionFour.value = "hNyc";
        x.add(optionFour);
        break;
      case "monsterCity":
        var optionFive = document.createElement("option");
        optionFive.text = "B2 Venue - Norwich";
        optionFive.value = "b2";
        x.add(optionFive);
        
        var optionSix = document.createElement("option");
        optionSix.text = "Walnut Tree Shades - Nowrwich";
        optionSix.value = "walnut";
        x.add(optionSix);
        break; 
      case "overnight":
        var optionSeven= document.createElement("option");
        optionSeven.text = "The Horseshoe Tavern - Toronto";
        optionSeven.value = "horseshoe";
        x.add(optionSeven);
        
        var optionEight = document.createElement("option");
        optionEight.text = "Christie Pits - Toronto";
        optionEight.value = "pits";
        x.add(optionEight);
        
        var optionNine = document.createElement("option");
        optionNine.text = "Raw Sugar Café - Ottawa";
        optionNine.value = "sugar";
        x.add(optionNine);
        
        var optionTen = document.createElement("option");
        optionTen.text = "BBAM! Gallery - Montréal";
        optionTen.value = "bbam";
        x.add(optionTen);
        break;
      case "queen":
        var optionEleven = document.createElement("option");
        optionEleven.text = "Scotiabank Arena - Toronto";
        optionEleven.value = "scotiabank";
        x.add(optionEleven);
        
        var optionTwelve = document.createElement("option");
        optionTwelve.text = "Madison Square Garden - New York City";
        optionTwelve.value = "qNyc";
        x.add(optionTwelve);
        break;
    }
    
    x.disabled = false;
  }

function venueSelected()
  {
    // This statement gets the value of the venue dropdown
    ticket.venue = document.getElementById("bookingVenue").value;
    
    // This statement disables the venue dropdown
    document.getElementById("bookingVenue").disabled = true;
    
    var x = document.getElementById("bookingDate");
    
    // This adds a null option to the next dropdown that asks to select a date
    var optionNull = document.createElement("option");
	  optionNull.text = "Please select a date.";
	  optionNull.value = "null";
    optionNull.disabled = true;
    optionNull.selected = true;
	  x.add(optionNull);
    
    // Based on the venue selected it will add dates to the date dropdown
    switch (ticket.venue) {
      case "boston":
        var optionOne = document.createElement("option");
        optionOne.text = "16th May 2019";
        optionOne.value = "bostonOne";
        x.add(optionOne);
        
        var optionTwo = document.createElement("option");
        optionTwo.text = "19th May 2019";
        optionTwo.value = "bostonTwo";
        x.add(optionTwo);
        break;
      case "london":
        var optionThree = document.createElement("option");
        optionThree.text = "14th November 2019";
        optionThree.value = "londonOne";
        x.add(optionThree);
        break;
      case "worcester":
        var optionFour = document.createElement("option");
        optionFour.text = "14th September 2019";
        optionFour.value = "worcesterOne";
        x.add(optionFour);
        break;
      case "hNyc":
        var optionFive = document.createElement("option");
        optionFive.text = "15th September 2019";
        optionFive.value = "hNycOne";
        x.add(optionFive);
        
        var optionSix = document.createElement("option");
        optionSix.text = "16th September 2019";
        optionSix.value = "hNycTwo";
        x.add(optionSix);
        break;
      case "b2":
        var optionSeven = document.createElement("option");
        optionSeven.text = "29th September 2019";
        optionSeven.value = "b2One";
        x.add(optionSeven);
        break;
      case "walnut":
        var optionEight = document.createElement("option");
        optionEight.text = "13th April 2019";
        optionEight.value = "walnutOne";
        x.add(optionEight);
        
        var optionNine = document.createElement("option");
        optionNine.text = "14th September 2019";
        optionNine.value = "walnutTwo";
        x.add(optionNine);
        
        var optionTen = document.createElement("option");
        optionTen.text = "2nd December 2019";
        optionTen.value = "walnutThree";
        x.add(optionTen);
        break;
      case "horseshoe":
        var optionEleven = document.createElement("option");
        optionEleven.text = "14th September 2019";
        optionEleven.value = "horseshoeOne";
        x.add(optionEleven);
        break;
      case "pits":
        var optionTwelve = document.createElement("option");
        optionTwelve.text = "20th September 2019";
        optionTwelve.value = "pitsOne";
        x.add(optionTwelve);
        break;
      case "sugar":
        var optionThirteen = document.createElement("option");
        optionThirteen.text = "4th April 2019";
        optionThirteen.value = "sugarOne";
        x.add(optionThirteen);
        break;
      case "bbam":
        var optionFourteen = document.createElement("option");
        optionFourteen.text = "4th May 2019";
        optionFourteen.value = "bbamOne";
        x.add(optionFourteen);
        break;
      case "scotiabank":
        var optionFifteen = document.createElement("option");
        optionFifteen.text = "28th September 2019";
        optionFifteen.value = "scotiabankOne";
        x.add(optionFifteen);
        break;
      case "qNyc":
        var optionSixteen = document.createElement("option");
        optionSixteen.text = "6th August 2019";
        optionSixteen.value = "qNycOne";
        x.add(optionSixteen);
        break;
    }
    
    x.disabled = false;
  }

function dateSelected()
  {
    // This statement get the value of the date dropdown
    ticket.bookedDate = document.getElementById("bookingDate").value;
    
    // Based on the artist, venue and artist selected the price is added to the ticket array
    if (ticket.bookedDate === "bostonOne")
      {
        ticket.price = 32.34;
      }
    else if (ticket.bookedDate === "bostonTwo")
      {
        ticket.price = 38.74;
      }
    else if (ticket.bookedDate === "londonOne")
      {
        ticket.price = 104.00;
      }
    else if (ticket.bookedDate === "worcesterOne")
      {
        ticket.price = 121.00;
      }
    else if (ticket.venue === "hNyc")
      {
        ticket.price = 151.00;
      }
    else if ((ticket.artist === "monsterCity") || (ticket.bookedDate === "horseshoeOne") || (ticket.bookedDate === "pitsOne"))
      {
        ticket.price = 0.00;
      }
    else if ((ticket.bookedDate === "sugarOne") || (ticket.bookedDate === "bbamOne"))
      {
        ticket.price = 15.81;
      }
    else if (ticket.bookedDate === "scotiabankOne")
      {
        ticket.price = 140.00;
      }
    else if (ticket.bookedDate === "qNycOne")
      {
        ticket.price = 180.00;
      }
    
    // This sets the colour of the font in the text area below the dropdowns to black
    document.getElementById("problemTextArea").style.color = "#000000";
    
    // These statements puts the variables into an array
    var cSVSpool = createShowVar();
    var showArtist = cSVSpool[0];
    var showVenue = cSVSpool[1];
    var showDate = cSVSpool[2];
    
    // This displays the ticket chosen and price in the text area below the dropdowns
    document.getElementById("problemTextArea").innerHTML = "You have selected to see:<br><b>" + showArtist + "</b><br>at:<br><b> " + 
      showVenue + "</b><br>on the:<br><b>" + showDate + "</b><br>If that is correct please click the Submit Button. <br>This ticket will cost: £" + 
      parseFloat(ticket.price).toFixed(2);
    
    // This checks if the submit button exists and if it doesn't it will create one
    if (submitButtonExist === false)
      {
        submitButtonExist = true;
        
        var button = document.createElement("button");
        button.innerHTML = "Submit";

        var buttonArea = document.getElementById("buttonArea");
        buttonArea.appendChild(button);

        button.className = "button";

        button.addEventListener("click", bCBookingForm);
      }
  }

// This function turns the unreadable variable into readable statements
function createShowVar()
  {
    var cSVSpool = ["", "", ""];
    
    if (ticket.artist === "againstMe")
      {
        cSVSpool[0] = "Against Me!";
      }
    else if (ticket.artist === "helloween")
      {
        cSVSpool[0] = "Helloween";
      }
    else if (ticket.artist === "monsterCity")
      {
        cSVSpool[0] = "Monster City";
      }
    else if (ticket.artist === "overnight")
      {
        cSVSpool[0] = "Overnight";
      }
    else if (ticket.artist === "queen")
      {
        cSVSpool[0] = "Queen and Adam Lambert"
      }
    
    if (ticket.venue === "boston")
      {
        cSVSpool[1] = "House of Blues - Boston";
      }
    else if (ticket.venue === "london")
      {
        cSVSpool[1] = "O2 Academy Brixton - London";
      }
    else if (ticket.venue === "worcester")
      {
        cSVSpool[1] = "Palladium Worcester";
      }
    else if (ticket.venue === "hNyc")
      {
        cSVSpool[1] = "Irving Plaza - Ney York City";
      }
    else if (ticket.venue === "b2")
      {
        cSVSpool[1] = "B2 Venue - Norwich";
      }
    else if (ticket.venue === "walnut")
      {
        cSVSpool[1] = "Walnut Tree Shades - Norwich";
      }
    else if (ticket.venue === "horseshoe")
      {
        cSVSpool[1] = "The Horseshoe Tavern - Toronto";
      }
    else if (ticket.venue === "pits")
      {
        cSVSpool[1] = "Christie Pits - Toronto";
      }
    else if (ticket.venue === "sugar")
      {
        cSVSpool[1] = "Raw Sugar Café - Ottawa";
      }
    else if (ticket.venue === "bbam")
      {
        cSVSpool[1] = "BBAM! Gallery - Montréal";
      }
    else if (ticket.venue === "scotiabank")
      {
        cSVSpool[1] = "Scotiabank Arena - Toronto";
      }
    else if (ticket.venue === "qNyc")
      {
        cSVSpool[1] = "Madison Square Garden - New York City";
      }
    
    if (ticket.bookedDate === "bostonOne")
      {
        cSVSpool[2] = "16th May 2019";
      }
    else if (ticket.bookedDate === "bostonTwo")
      {
        cSVSpool[2] = "19th May 2019";
      }
    else if (ticket.bookedDate === "londonOne")
      {
        cSVSpool[2] = "14th November 2019";
      }
    else if (ticket.bookedDate === "worcesterOne")
      {
        cSVSpool[2] = "14th September 2019";
      }
    else if (ticket.bookedDate === "hNycOne")
      {
        cSVSpool[2] = "15th September 2019";
      }
    else if (ticket.bookedDate === "hNycTwo")
      {
        cSVSpool[2] = "16th September 2019";
      }
    else if (ticket.bookedDate === "b2One")
      {
        cSVSpool[2] = "29th September 2019";
      }
    else if (ticket.bookedDate === "walnutOne")
      {
        cSVSpool[2] = "13th April 2019";
      }
    else if (ticket.bookedDate === "walnutTwo")
      {
        cSVSpool[2] = "14th September 2019";
      }
    else if (ticket.bookedDate === "walnutThree")
      {
        cSVSpool[2] = "2nd December 2019";
      }
    else if (ticket.bookedDate === "horseshoeOne")
      {
        cSVSpool[2] = "14th September 2019";
      }
    else if (ticket.bookedDate === "pitsOne")
      {
        cSVSpool[2] = "20th September 2019";
      }
    else if (ticket.bookedDate === "sugarOne")
      {
        cSVSpool[2] = "4th April 2019";
      }
    else if (ticket.bookedDate === "bbamOne")
      {
        cSVSpool[2] = "4th May 2019";
      }
    else if (ticket.bookedDate === "scotiabankOne")
      {
        cSVSpool[2] = "28th September 2019";
      }
    else if (ticket.bookedDate === "qNycOne")
      {
        cSVSpool[2] = "6th August 2019";
      }
    
    return(cSVSpool);
  }