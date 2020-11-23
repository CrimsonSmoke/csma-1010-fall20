function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  if (mouseX < 200) {
  fill(255, 0, 0);
  } else if (mouseX < 400) {
  fill(0, 255, 0);
  } else if (mouseX < 500) {
  fill(127, 127, 127);
  } else {
    fill(0, 0, 255);
  }
  ellipse(mouseX, mouseY, 50, 50);
}