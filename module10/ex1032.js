// create a variable for the button
let myBtn;
function preload() {
 mySound = loadSound('sounds/Sg.mp3');
}

function setup() {
  createCanvas(200,200);
  // create the button to control sound
  myBtn = createButton('play');
  // call the function playPause when the user presses the mouse
  myBtn.mousePressed(playPause);
}
function playPause(){
  //use the isPlaying to determine whether the sound is playing or not
  // if the sound is not playing
  if (!mySound.isPlaying()){
    // make it play
    mySound.play();
    // define the sound level
    mySound.setVolume(0.5);
  }
  // else stop it
  else {
    mySound.stop();
  }
}
