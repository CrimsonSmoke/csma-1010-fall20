var img1;
var img2;
var gridX;
var gridY;
var speedX;
var speedY;
var whichimg;
var pieces;


function preload() {
  img1 = loadImage("Buddha.jpg");
  img2 = loadImage("tool.jpg");
}


function setup() {
  createCanvas(800, 600);
  gridX = 0
  gridY = 0
  speedX = 15
  speedY = 2.5
  whichimg = 1
  pieces = 0
  frameRate(60);

}


function draw() {
  background(0);
  if (gridX > width) {
    gridX = -100
    speedX = speedX
  }

  if (gridY > height) {
    gridY = -100
    speedY = speedY
  }

  gridX = gridX + speedX;
  gridY = gridY + speedY;


  for (var x = 30; x < width; x = x + 8.25) {
    for (var y = 30; y < height; y = y + 8.25) {
      var c;
      if (whichimg == 1) {
        c = img1.get(x, y);
      } else {
        c = img2.get(x, y);
      }

      fill(c);
      rect(x+gridX, y+gridY, 5, 5);
    }
  }
pieces = pieces + 1;
  if (pieces > height / 30) {
    pieces = 0;
    whichimg = whichimg * -1;

  }
}