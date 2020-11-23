function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
  if(mouseX < 200) {
      fill(100, 100, 100);
  ellipse(200, mouseX, mouseY, 50);
} else {
fill(200, 200, 200);
  ellipse(200, mouseY, mouseX, 50);
}
  }
}