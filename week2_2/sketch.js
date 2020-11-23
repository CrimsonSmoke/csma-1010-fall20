var centerX;      // declaring a global variable,
var centerY;      // this is done outside of a
var speedX;       // function
var speedY;
var angle = 0;
var sunX = 0;
var sunY = 0;

function setup() {
  createCanvas(400, 400);
  centerX = 200;  // assigning its initial value,
  centerY = 200;  // in setup
  speedX = 5;
  speedY = 0;
}

function draw() {
  //background(255);
  
  angle = angle + radians(35/10);
  
  sunX = sunY + random(-1, 1);
  sunY = sunY + random(-1, 1);
  
  var x = 50+sin(angle)*sunX;
  var y = 50+cos(angle)*sunY;

  // update the speed (gravity pulls it down)
  speedY = speedY + 0.5;
  
  // this conditional makes it change its
  // direction (= negative speed) when it
  // is hitting the floor
  if (centerY > 350) {
    speedY = speedY * -0.96;
  }  

  // update the position
  centerY = centerY + speedY;
  centerX = centerX + speedX;

  // this conditional makes it wrap around
  // the canvas
  if (centerX > 500) {
    centerX = -100;
  }
  fill(0, 0, 200);
  rect(centerX, centerY, 50, 50);
  fill(255, 214, 0);
  ellipse(x, y, 50, 50);
}
