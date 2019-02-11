function displayTicket()
  {
    // These statements takes the variables about the ticket out of session storage
    var printUsername = sessionStorage.getItem("ticket0");
    var printArtist = sessionStorage.getItem("ticket1");
    var printVenue = sessionStorage.getItem("ticket2");
    var printDate = sessionStorage.getItem("ticket3");
    var printPrice = sessionStorage.getItem("ticket4");
    
    // This if statement changes the unreadable artist variable into a readable statement
    if (printArtist === "againstMe")
      {
        printArtist = "Against Me!";
      }
    else if (printArtist === "helloween")
      {
        printArtist = "Helloween";
      }
    else if (printArtist === "monsterCity")
      {
        printArtist = "Monster City";
      }
    else if (printArtist === "overnight")
      {
        printArtist = "Overnight";
      }
    else if (printArtist === "queen")
      {
        printArtist = "Queen and Adam Lambert"
      }
    
    // This if statement changes the unreadable venue variable into a readable statement
    if (printVenue === "boston")
      {
        printVenue = "House of Blues - Boston";
      }
    else if (printVenue === "london")
      {
        printVenue = "O2 Academy Brixton - London";
      }
    else if (printVenue === "worcester")
      {
        printVenue = "Palladium Worcester";
      }
    else if (printVenue === "hNyc")
      {
        printVenue = "Irving Plaza - Ney York City";
      }
    else if (printVenue === "b2")
      {
        printVenue = "B2 Venue - Norwich";
      }
    else if (printVenue === "walnut")
      {
        printVenue = "Walnut Tree Shades - Norwich";
      }
    else if (printVenue === "horseshoe")
      {
        printVenue = "The Horseshoe Tavern - Toronto";
      }
    else if (printVenue === "pits")
      {
        printVenue = "Christie Pits - Toronto";
      }
    else if (printVenue === "sugar")
      {
        printVenue = "Raw Sugar Café - Ottawa";
      }
    else if (printVenue === "bbam")
      {
        printVenue = "BBAM! Gallery - Montréal";
      }
    else if (printVenue === "scotiabank")
      {
        printVenue = "Scotiabank Arena - Toronto";
      }
    else if (printVenue === "qNyc")
      {
        printVenue = "Madison Square Garden - New York City";
      }
    
    // This if statement changes the unreadable artist variable into a readable statement
    if (printDate === "bostonOne")
      {
        printDate = "16th May 2019";
      }
    else if (printDate === "bostonTwo")
      {
        printDate = "19th May 2019";
      }
    else if (printDate === "londonOne")
      {
        printDate = "14th November 2019";
      }
    else if (printDate === "worcesterOne")
      {
        printDate = "14th September 2019";
      }
    else if (printDate === "hNycOne")
      {
        printDate = "15th September 2019";
      }
    else if (printDate === "hNycTwo")
      {
        printDate = "16th September 2019";
      }
    else if (printDate === "b2One")
      {
        printDate = "29th September 2019";
      }
    else if (printDate === "walnutOne")
      {
        printDate = "13th April 2019";
      }
    else if (printDate === "walnutTwo")
      {
        printDate = "14th September 2019";
      }
    else if (printDate === "walnutThree")
      {
        printDate = "2nd December 2019";
      }
    else if (printDate === "horseshoeOne")
      {
        printDate = "14th September 2019";
      }
    else if (printDate === "pitsOne")
      {
        printDate = "20th September 2019";
      }
    else if (printDate === "sugarOne")
      {
        printDate = "4th April 2019";
      }
    else if (printDate === "bbamOne")
      {
        printDate = "4th May 2019";
      }
    else if (printDate === "scotiabankOne")
      {
        printDate = "28th September 2019";
      }
    else if (printDate === "qNycOne")
      {
        printDate = "6th August 2019";
      }
    
    // This statement declaration takes the price fixes it to two decimal places and puts a £ before it
    var showPrintPrice = "£ " + parseFloat(printPrice).toFixed(2);

    document.getElementById("printUsername").innerHTML = printUsername;
    document.getElementById("printArtist").innerHTML = printArtist;
    document.getElementById("printVenue").innerHTML = printVenue;
    document.getElementById("printDate").innerHTML = printDate;
    document.getElementById("printPrice").innerHTML = showPrintPrice;
    
    // This creates and displays a random string of letters and numbers
    document.getElementById("ticketCode").innerHTML = Math.random().toString(36).substring(2, 15);
    
    // This opens the print dialogue box
    window.print();
  }