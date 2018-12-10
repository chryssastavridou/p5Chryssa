function preload() {
  mySound = loadSound('sounds/Sg.mp3');
 }
 
 function setup() {
   // define the sound level
   mySound.setVolume(0.1);
   // play the sound
   mySound.play();
 }
 function mousePressed() {
   // increase sound level when mouse is pressed
   mySound.setVolume(0.5);
 }
 function mouseReleased() {
   // return to the original sound level
   mySound.setVolume(0.1);
 }