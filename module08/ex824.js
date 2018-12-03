let i = 20;
function setup() {
  // create canvas
  createCanvas(800,500);
  // set background color
  background('orange');
}
function draw () {
  // left line
  line (350,100, 350,300);
  // right line
  line (450,100, 450,300);
  // draw horizontal lines across the height of the two vertical lines
  for (i; i<200; i= i+50){
    line (350,100+i, 450,100+i);
  }
}