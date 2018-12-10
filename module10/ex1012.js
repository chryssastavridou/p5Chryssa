// define two variables for the images
let choco1, choco2;
// use preload to load the image before setup
function preload() {
  choco1 = loadImage("images/choco.jpg");
}
function setup() {
  // create canvas with the same size as the images
  createCanvas(110,110);
  // create a new image
  choco2 = createImage(110, 110);
  // load the pixel array of the image in order to be able to manipulate them
  choco2.loadPixels();
  // go through each row of the choco1 image
  for (let y = 55; y < height; y++) {
    // go through each column of the choco1 image
    for (let x = 25; x < width; x++) {
      // use get() to take each pixel
      let myPixel = choco1.get(x, y);
      // set it to the opposite corner (turn image upside down)
      choco2.set(width - x, height - y, myPixel);
    }
  }
  // update the pixel array of the choco2 image
  choco2.updatePixels();
  // display the new image
  image(choco2, 0, 0);
}