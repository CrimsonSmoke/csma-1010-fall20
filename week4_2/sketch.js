function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  pattern(0);
  pattern(frameCount / 10);
}

function pattern(angle) {
  push();
  fill(255);
  translate(200, 200);
  rotate(radians(angle));
  for (var x = -300; x < 300; x = x + 40) {
    for (var y = -300; y < 300; y = y + 40) {
      //rect(x, y, 10, 35);
      stroke(255);
      line(x, y, -200, 200);
      line(x, y, 200, -200);
    }
  }
  pop();
}