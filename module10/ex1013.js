// create a variable for the image
let chocos;
// preload image
function preload() {
  chocos = loadImage("images/chocos.jpg");
}

function setup() {
  // create canvas the same size as the image
  createCanvas(800,562);
}

function draw() {
  // show the 'initial image
  chocos.loadPixels();
  console.log (chocos.pixels.lenght);
  // go through each row
  for (let y = 0; y < height; y++) {
    // and each column
    for(let x = 0; x < width; x++) {
      // go through all pixels of image, R, G, B, and A
      let index = (x + y * width) * 4;
      // play with rgb values
      // create an old television effect
        chocos.pixels[index] = random(255); // red
        chocos.pixels[index + 2] = random(0,155); // blue
     
      }
    }
    chocos.updatePixels();
    // display manipulated image
  image(chocos, 0, 0);
}