function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  for (i=0; i < width; i=i+50) {
    fill("yellow");
    arc(100, i+20, 30, 30, 0, PI + 1.5/QUARTER_PI);
  }
  
  for (z=2; z < height; z=z+30) {
    fill("white");
    ellipse(300, z, 15, 15);
     ellipse(200, z, 15, 15);
     ellipse(400, z, 15, 15);
  }
  
  fill("blue");
  rect(450, 0, 20, 150);
  rect(450, 500, 20, -150);
}