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
var res = document.getElementById('table-content');
var html = '';

//Write your function here
function playerTable(array){
for(i = 0; i < array.length; i++){
  if (array[i].year == 'Senior'){
      html += '<tr> <b>' + array[i].first + '</b>';
      html += '<tr><b>' + array[i].last + '</b>';
      html += '<tr><b>' + array[i].position + '</b>';
      html += '<tr><b>' + array[i].year + '</b>';
      html += '</tr>';
      console.log("you're a senior");
    }
  else{
    html += '<td>' + array[i].first;
    html += '<td>' + array[i].last;
    html += '<td>' + array[i].position;
    html += '<td>' + array[i].year + '<tr> </tr>';
    html += '</td>';
  }
}
res.innerHTML = '<table>' + html + '</table>';
}
playerTable(players);


/*
EXTRA CREDIT CHALLENGE (5 POINTS): Write a function that compares the list above with the list below, finds the players that made the All-State team, and displays a message with the results: "Congratulations to Springfield's 2018 North Carolina All-State honorees: ____." Display the message in a div below the table.
Hint: You need two loops, one of which will be 'nested'.*/
/*var allStars = [
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
*/
/*
https://www.w3schools.com/js/js_htmldom_html.asp
https://www.w3schools.com/js/js_htmldom_elements.asp
https://www.w3schools.com/js/js_htmldom_css.asp
https://www.w3schools.com/jsref/jsref_bold.asp
*/
