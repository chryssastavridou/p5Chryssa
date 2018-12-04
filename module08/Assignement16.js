let xPos;
let yPos;
function setup() {
	// create canvas
	createCanvas(800, 500);
	// set background color
	background('red');
}
function draw() {


	for (xPos = 20; xPos < width; xPos = xPos + 40) {
		for (yPos = 50; yPos < height; yPos = yPos + 100) {
			fill(xPos / 3 * 50, yPos / 2 * 50, 20);
			ellipse(xPos, yPos, 20);
			if (yPos==250) {
			fill('green');
			stroke('#f12e78');
			ellipse(xPos, yPos, 10);
		}
	}
}
}


