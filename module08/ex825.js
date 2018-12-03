let xPos;
function setup() {
  // create canvas
  createCanvas(800,500);
  // set background color
  background('orange');
}
function draw () {
  // use a for loop and create points with a distance of 30px
  for (xPos = 1; xPos<width; xPos = xPos +30) {
    // in order to create a diagonal line of points going from up left to down right
    // you will have to use the appropiate geometry to define the y coordinate
    point (xPos,5/8*xPos);
  }
}