function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
stroke(0);
  pattern();
  stroke(0);
  pattern(frameCount/4);
}

function pattern(angle) {
  push();                  
  noFill();
  translate(200, 200);      
  rotate(radians(angle));   
  for (var x=-300; x < 300; x=x+40) {
    for (var y=-300; y < 300; y=y+40) {
      rect(x - 25, y - 25, 50, 50);
      circle(x, y, 30)
    }
  }
  pop();                    
}