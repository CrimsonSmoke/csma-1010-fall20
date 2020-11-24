let table;
let row = 0;
let row1 = 0;
var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
var chosenstate = 0;  // let's make this a string
function preload() {
  table = loadTable("US State Migration 2018.csv", "csv", "header");
  us = loadImage("US Map.jpg");
}

function setup() {
  createCanvas(750, 750);
  image(us, 0, 0, 750, 750);

  print(lookupMigration("California", "Texas") + " people moved from California to Texas");

textSize(13);
  textFont('Helvetica');
  fill("black");
  text("A random state will be chosen(white)", 500, 30);
  text("All other states hue's will brighten", 510, 50);
  text("depending on number of New", 520, 70);
  text("residents from chosen state", 525, 90);
}


function draw() {
  let pop = table.getNum(row, "Population");
  let NewRes = table.getNum(row1, "Moved Last Year");
  // Random state is chosen, states with more new residents
  //from that selected state have greater color hue's compared to 
  //states with less new residents.
  
  //let CA = ellipse(375, 375, 50, 50);
  
  colorMode(HSB);
  noStroke();
  fill(calculateColor("California"));
  ellipse(75, 380, 30, 30); //California
  fill(calculateColor("Texas"));
  ellipse(340, 525, 30, 30); //Texas
  fill(calculateColor("Oregon"));  // (you would add this to the other rows below as well)
  ellipse(50, 165, 30, 30); // Oregon
  fill(calculateColor("Washington"));
  ellipse(65, 80, 30, 30); //Washington
  fill(calculateColor("Idaho"));
  ellipse(150, 190, 30, 30); //Idaho
  fill(calculateColor("Nevada"));
  ellipse(105, 300, 30, 30); //Nevada
  fill(calculateColor("Utah"));
  ellipse(175, 300, 30, 30); //Utah
  fill(calculateColor("Montana"));
  ellipse(210, 80, 30, 30); //Montana
  fill(calculateColor("Wyoming"));
  ellipse(225, 200, 30, 30); //Wyoming
  fill(calculateColor("Colorado"));
  ellipse(250, 315, 30, 30); //Colorado
  fill(calculateColor("New Mexico"));
  ellipse(250, 450, 30, 30); //New Mexico
  fill(calculateColor("Arizona"));
  ellipse(175, 450, 30, 30); //Arizona
  fill(calculateColor("Kansas"));
  ellipse(340, 335, 30, 30); //Kansas
  fill(calculateColor("Nebraska"));
  ellipse(330, 245, 30, 30); //Nebraska
  fill(calculateColor("South Dakota"));
  ellipse(315, 155, 30, 30); //South Dakota
  fill(calculateColor("North Dakota"));
  ellipse(315, 70, 30, 30); //North Dakota
  fill(calculateColor("Minnesota"));
  ellipse(395, 120, 30, 30); //Minnesota
  fill(calculateColor("Iowa"));
  ellipse(410, 230, 30, 30); //Iowa
  fill(calculateColor("Missouri"));
  ellipse(420, 335, 30, 30); //Missouri
  fill(calculateColor("Arkansas"));
  ellipse(420, 435, 30, 30); //Arkansas
  fill(calculateColor("Oklahoma"));
  ellipse(360, 425, 30, 30); //Oklahoma
  fill(calculateColor("Louisiana"));
  ellipse(420, 550, 30, 30); //Louisiana
  fill(calculateColor("Mississippi"));
  ellipse(455, 500, 30, 30); //Mississippi
  fill(calculateColor("Alabama"));
  ellipse(495, 500, 30, 30); //Alabama
  fill(calculateColor("Georgia"));
  ellipse(535, 500, 30, 30); //Georgia
  fill(calculateColor("Florida"));
  ellipse(555, 630, 30, 30); //Florida
  fill(calculateColor("South Carolina"));
  ellipse(565, 460, 30, 30); //South Carolina
  fill(calculateColor("North Carolina"));
  ellipse(580, 420, 30, 30); //North Carolina
  fill(calculateColor("Tennessee"));
  ellipse(500, 410, 30, 30); //Tennessee
  fill(calculateColor("Kentucky"));
  ellipse(515, 360, 30, 30); //Kentucky
  fill(calculateColor("Indiana"));
  ellipse(500, 290, 30, 30); //Indiana
  fill(calculateColor("Illinois"));
  ellipse(460, 290, 30, 30); //Illinois
  fill(calculateColor("Wisconsin"));
  ellipse(450, 150, 30, 30); //Wisconsin
  fill(calculateColor("Michigan"));
  ellipse(520, 190, 30, 30); //Michigan
  fill(calculateColor("Ohio"));
  ellipse(545, 280, 30, 30); //Ohio
  fill(calculateColor("West Virginia"));
  ellipse(570, 330, 30, 30); //West Virginia
  fill(calculateColor("Virginia"));
  ellipse(600, 360, 30, 30); //Virginia
  fill(calculateColor("Maryland"));
  ellipse(620, 310, 20, 20); //Maryland
  fill(calculateColor("Delaware"));
  ellipse(640, 330, 10, 10); //Delaware
  fill(calculateColor("Pennsylvania"));
  ellipse(610, 270, 30, 30); //Pennsylvania
  fill(calculateColor("New Jersey"));
  ellipse(650, 280, 20, 20); //New Jersey
  fill(calculateColor("New York"));
  ellipse(640, 200, 30, 30); //New York
  fill(calculateColor("Vermont"));
  ellipse(673, 170, 20, 20); //Vermont
  fill(calculateColor("Massachusetts"));
  ellipse(680, 220, 20, 20); //Massachusetts
  fill(calculateColor("Connecticut"));
  ellipse(670, 240, 20, 20); //Connecticut
  fill(calculateColor("Rhode Island"));
  ellipse(690, 240, 10, 10); //Rhode Island
  fill(calculateColor("New Hampshire"));
  ellipse(685, 190, 20, 20); //New Hampshire
  fill(calculateColor("Maine"));
  ellipse(715, 140, 30, 30); //Maine
  fill(calculateColor("District of Columbia"));
  ellipse(600, 320, 10, 10); //District of Columbia
  fill(calculateColor("Alaska"));
  ellipse(30, 30, 30, 30); //Alaska
  fill(calculateColor("Hawaii"));
  ellipse(20, 450, 30, 30); //Hawaii
  fill(calculateColor("Peurto Rico"));
  ellipse(420, 725, 30, 30); //Peurto Rico
 
  chosenstate = random(states);
  
  
}

/*
function ChosenColor(state, color) {
  
  for (i=0; i < table.getNum(row, "Moved Last Year"); i++) {
    if (i > 54) { // I chose 54 because after the 54th row there isn't any data
      i = 0;
    }
  floor(random(i));
    
    if (i == table.getNum(row, "Moved Last Year")) {
      i = i/100
    }
    
  }
}
  
function SelectedState () {
  for (i=0; i < states.length; i++){
    chosenstate.push(floor(random(states[i])));
  }
}
*/


function calculateColor(state) {
  if (state == chosenstate) {
    // what is currently the chosen state will get a color of blue (always)
    return color(200, 0, 100);
  }

  // otherwise let's find out how many people moved
  // from chosenstate to state
  let moved = lookupMigration(chosenstate, state);
  print(moved + " from " + chosenstate + " to " + state);

  // okay, now we know how many people moved, but
  // we don't know how big or small a number this is
  // in relation to other states

  // for this, I made another helper function below
  // this one gives us the highest migration number
  // *from* a given state
  let maxMoved = maxPeopleMovedFrom(chosenstate);
  print(maxMoved + " is the highest for " + chosenstate);

  // now you can use the two numbers to calculate the color
  // e.g.
  return color(220, 80, 75+(moved/maxMoved) * 75);
}


function lookupMigration(from, to) {
  // let's find the row we're interested in
  // this will hold the destination state (to)
  for (let row=0; row < table.getRowCount(); row++) {

  if (to == table.getString(row, "Destination")) {
      // we have the right row, now pull out the column
      // that corresponds to the origin state (from)

      let movedString = table.getString(row, from);
      // using getString() here because the table is
      // throwing us a curve ball: the numbers are
      // formatted like so "98,194"
      
      // we need to get rid of the "," before we can
      // work with it
      movedString = movedString.replace(",", "");

      // now we can turn it into a number
      let moved = int(movedString);

      // return the number
      return moved;
    }
  }

  // we didn't find anything? let's print a message
  // to the console and return zero then
  print("No match for " + to);
  return 0;
}


function maxPeopleMovedFrom(state) {
  // here we want to find the state with the highest
  // number of people that moved *from* that state,
  // and return this number

  let max = 0;  // assume the lowest possible maximum
  for (let row=1; row < table.getRowCount(); row++) {

    // same dance as in lookupMigration()
    let movedString = table.getString(row, state);
    movedString = movedString.replace(",", "");
    let moved = int(movedString);

    if (moved > max) {  // if we found a row with a higer number
      max = moved;  // update the maximum
    }
  }

  return max;  // return the maximum
}