/*
Write a function that buids an HTML table with the data below. The table should have four columns:
first name, last name, position, and year. If the player is a Senior, her information should be in bold.
*/
var players = [
  {
    first:'Angela',
    last: 'Smith',
    position: 'Guard',
    year: 'Junior'
  },
  {
    first:'Ashley',
    last: 'Roberts',
    position: 'Guard',
    year: 'Senior'
  },
  {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    year: 'Freshman'
  },
  {
    first:'Catherine',
    last: 'McAllister',
    position: 'Forward',
    year: 'Senior'
  },
  {
    first:'Haley',
    last: 'Bishop',
    position: 'Center',
    year: 'Sophomore'
  },
  {
    first:'Renee',
    last: 'Williams',
    position: 'Guard',
    year: 'Senior'
  },
  {
    first:'Jennifer',
    last: 'Olsen',
    position: 'Forward',
    year: 'Junior'
  }
];
//sets up table div and html for changing html elements
var res = document.getElementById('table-content');
var html = '';

//function to display table and bold Senior information
function playerTable(){
  //added headers
  html += '<tr><th>First</th><th>Last</th><th>Position</th><th>Year</th></tr>';

  //for loop, for every player in the array, iterate through the list
  for(i = 0; i < players.length; i++){
    //if a player is a senior, make their attributes (first, last, position, year) bolded and separate columns
    if (players[i].year == 'Senior'){
      html += '<td><b>' + players[i].first + '</b>';
      html += '<td><b>' + players[i].last + '</b>';
      html += '<td><b>' + players[i].position + '</b>';
      html += '<td><b>' + players[i].year + '</b> <tr> </tr>';
      html += '</td>';
    }
    //if a player is not a senior, make their attributes (first, last, position, year) into separate columns
    else{
      html += '<td>' + players[i].first;
      html += '<td>' + players[i].last;
      html += '<td>' + players[i].position;
      html += '<td>' + players[i].year + '<tr> </tr>';
      html += '</td>';
    }
  }
  //place the html in the table div
  res.innerHTML = '<table>' + html + '</table>';
}
//call the function
playerTable();


/*
EXTRA CREDIT CHALLENGE (5 POINTS): Write a function that compares the list above with the list below, finds the players that made the All-State team, and displays a message with the results: "Congratulations to Springfield's 2018 North Carolina All-State honorees: ____." Display the message in a div below the table.
Hint: You need two loops, one of which will be 'nested'.*/
var allStars = [
  {
    first:'Melanie',
    last: 'Akers',
    position: 'Forward',
    school:'Johnson High School'
  },
  {
    first:'Olivia',
    last: 'Carter',
    position: 'Foward',
    school:'Providence Day School'
  },
  {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    school:' Springfield High School'
  },
  {
    first:'Ursula',
    last: 'Jones',
    position: 'Guard',
    school: 'Chatham Senior High School'
  },
  {
    first:'Theresa',
    last: 'Hollinger',
    position: 'Guard',
    school: 'St. Joseph Academy'
  },
  {
    first:'Darleen',
    last: 'Lawrence',
    position: 'Guard',
    school: 'Everton High School'
  },
  {
    first:'Jennifer',
    last: 'Olsen',
    position: 'Forward',
    school: 'Springfield High School'
  }
];

//function to cross-examine both lists of players and find similarities, then place the common names in a div
function madeAllState(){
  //build a div in JS where the info will go
  var section = document.createElement("div");
  //the default text the div will show (not placed inside if statement so it is not repeated for every name)
  section.innerHTML += "Congratulations to Springfield's 2018 North Carolina All-State honorees: ";
  //for the list of players and list of all stars, check if there are any names that are in both arrays
  for (i = 0; i < players.length; i++){
    for (i = 0; i < allStars.length; i++){
      if(players[i].first === allStars[i].first){
        //if there are names in both lists, add to the inner html the first and last names of the players
        section.innerHTML += players[i].first + " " + players[i].last + " " + '<br />';
        //where the slogan div will go in the html sheet (adding to table-content made it part of the table, so made a separate div in html)
        var container = document.getElementById('slogan');
        //attach the div made in JS to go inside the html div
        container.appendChild(section);
        //give the div a css id so it can be changed
        section.id = 'section-id' ;
      }

    }
  }
}
//call the function
madeAllState();




/*
Some Sources I used for reference:
https://www.w3schools.com/js/js_htmldom_html.asp
https://www.w3schools.com/js/js_htmldom_elements.asp
https://www.w3schools.com/js/js_htmldom_css.asp
https://www.w3schools.com/jsref/jsref_bold.asp
https://www.w3schools.com/tags/tag_b.asp
https://www.w3schools.com/jsref/dom_obj_div.asp
https://www.w3schools.com/js/js_htmldom_nodes.asp
https://www.thesitewizard.com/javascripts/insert-div-block-javascript.shtml
*/
