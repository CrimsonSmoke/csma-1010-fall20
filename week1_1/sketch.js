function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
  if(mouseX < 200) {
      fill(random(255), random(255), random(255));
  rect(mouseX, mouseY, random(50), random(50));
} else {
fill(random(255), random(255), random(255));
  ellipse(mouseX, mouseY, random(50), random(50));
}
  }
}
