let camVideo;
function setup(){
  createCanvas(600,600);
  // make the connection to the webcam
  camVideo = createCapture('VIDEO');
  background(244,98,44);
  //hide initial video
  camVideo.hide();

}
function draw(){
  // display video on the canvas
  tint (0,0,255);
  image(camVideo,0,0);
}