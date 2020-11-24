var state = "inactive";
var resetX = 100;
var resetY = 450;
var active1X = 225;
var active1Y = 425;
var active2X = 375;
var active2Y = 425;
var y = 400;
var s = 30;
r = 0;
r1 = 0;
r2 = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  s = s+floor(random(5.85, 20)-floor(random(6.75,20)));
  r =r+random(-1,1);
  r1 =r1+random(-1,1);
  r2 =r2+random(-1,1);
  if (state == "inactive") {
    fill("grey");
  rect(0, 400, 500, 100);
  fill(0);
  ellipse(resetX, resetY, 50, 50);
  fill(0);
  rect(active1X, active1Y, 50, 50);
  fill(0);
  rect(active2X, active2Y, 50, 50);
  fill(255);
  text('R',95, 455);
  fill(255);
  text('1',245, 455);
  fill(255);
  text('2',395, 455);
    let d1 = dist(mouseX, mouseY, active1X+25, active1Y+25);
    if(mouseIsPressed && d1 < 25) {
      state = "active1"
    }
    
    let d2 = dist(mouseX, mouseY, active2X+25, active2Y+25);
    if (mouseIsPressed && d2 < 25) {
      state = "active2"
    }
    
  } else if (state == "active1") {
    for (i=0; i < height; i=i+30) {
      fill(0);
      rect(i, y, 30, s);
    }
      let d2 = dist(mouseX, mouseY, active2X+25, active2Y+25);
    if (mouseIsPressed && d2 < 25) {
      state = "active2"
    }
    
    let d = dist(mouseX, mouseY, resetX, resetY);
    if (mouseIsPressed && d < 25) {
      state = "inactive"
    }
    
  } else if (state == "active2") {
    noFill();
  stroke(0);
  rect(200, 50, 120, 90, 50);
  circle(260, 90, 70);
  circle(260, 90, 30);
    fill(0);
  rect(185+r, 143, 150, 40);
  rect(165+r1, 184, 185, 80);
  rect(115+r2, 265, 285, 100);
  rect(0, 365, 500, 35);
    
    let d = dist(mouseX, mouseY, resetX, resetY);
    if (mouseIsPressed && d < 25) {
      state = "inactive"
      r = 0
      s = 30
    }
    
    let d1 = dist(mouseX, mouseY, active1X+25, active1Y+25);
    if(mouseIsPressed && d1 < 25) {
      state = "active1"
    }
    
  }
    
  fill(0, 0, 0);
  rect(0, 400, 500, 100);
  fill("white");
  ellipse(resetX, resetY, 50, 50);
  fill("white");
  rect(active1X, active1Y, 50, 50);
  fill("white");
  rect(active2X, active2Y, 50, 50);
  fill(0);
  text('R',95, 455);
  fill(0);
  text('1',245, 455);
  fill(0);
  text('2',395, 455);
  print(state);
}