function setup() {
  createCanvas(windowWidth, windowHeight);
  // set background color in the setup so sketches will leave traces
  background('white');
}
function draw() {
  noStroke();
  fill(0, 0, 0, 30);
  // ellipse will change according to the mouseX and mouseY position
  if (MousePressed) {
  ellipse(mouseX, mouseY, 30, 30);
}
}
// clear the canvas every time the user presses the mouse
function keyPressed() {
  clear();
}
