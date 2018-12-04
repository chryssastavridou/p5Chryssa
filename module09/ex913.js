let i = 'white';
function setup() {
  createCanvas(800, 500);
  // set background color
  background('#D66761');
}
function draw() {
  fill(i);
  // create an ellipse
  ellipse(400, 250, 50);
}
// everytime the mouse is clicked
function mouseClicked(){
  // if the mouse x and y position is inside the ellipse
  if (mouseX >=350 && mouseX <=450 && mouseY >=200 && mouseY <=300){
    //change its color to red
    i = 'red';
  }
  // else change the color to white
  else {
    i = 'white';
  }
}
