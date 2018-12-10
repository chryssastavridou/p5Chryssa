// initialize the angle
let theta = 0;
function setup() {
  createCanvas(800, 600);
  background(50);
}
function draw() {
  // move the origin to the center of the canvas
  push();
  translate(width / 2, height / 2);
  rotate(radians(theta / 12));

  rect(-15, -85, 30, 100);
  pop();

  push();
  // move the origin to the center of the canvas
  translate(width / 2, height / 2);
  rotate(radians(theta));
  rect(-15, -190, 20, 200);
  // increment the angle by one degree

  pop();
  push();
  // move the origin to the center of the canvas
  translate(width / 2, height / 2);
  rotate(radians(60 * theta));
  // draw the rect in relation with the origin
  // in this case the x pos will be (width/2-15) and the y position (height/2-85)
  rect(-15, -150, 5, 150);
  // increment the angle by one degree
  pop();
  theta += 1/600;

}