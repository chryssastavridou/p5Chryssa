let myVideo;

function preload() {
    // similar with images we can also preload a video
    myVideo = createVideo('videos/Star.mp4');
}

function setup() {
    // make canvas same size with video
    let canvas = createCanvas(640, 360);
    //play the video
     myVideo.play();
    // automatically replay the video
    myVideo.loop();
  }

function draw() {
    background(255);
    // load the pixels of video so we can do things with them
    myVideo.loadPixels();

    // constrain the value of mouseX between 10 and 50 px
    let stepSizeX = round(constrain(mouseX,10,50 ));
    // constrain also the value of mouseY
    let stepSizeY = round(constrain(mouseY,20,70 ));

    for (let y = 0; y < height; y += stepSizeY) {
        for (let x = 0; x < width; x += stepSizeX) {
          // go through all pixels
          let i = (y * width + x) * 4;
          // make ellipse radius equal with stepSize which will be changing according to mouseX+mouseY position
          let radius = stepSizeX + stepSizeY ;
          // set as fill color the rgb values of video, change alpha according to mouseX
          fill(myVideo.pixels[i], myVideo.pixels[i + 1], myVideo.pixels[i + 2],stepSizeX);
          ellipse(x, y, radius, radius);        }
    }
}
