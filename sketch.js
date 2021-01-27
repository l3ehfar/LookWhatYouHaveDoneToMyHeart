let unit=0, theta = 0;
let num = 25, frames=180;

var soundFile,amplitude, back;

function preload(){
  soundFile = loadSound('heartbeat.mp3');
  back = loadSound('Angst.mp3');
}

function setup() {
  createCanvas(windowWidth-15, windowHeight-20);
  unit = 500/num;
  amplitude = new p5.Amplitude();
  soundFile.loop();
  back.play();
}

var counter = 0;
var backVolume=0.0;
var amp2 = 1.0;
var amp3 = 1.0;
var amp4 = 1.0;
var amp5 = 1.0;
function draw() {
  counter = millis();
  let level = amplitude.getLevel();
  let amp = map(level, 0, 1, 1, 1.5);

  if(counter>15000){
    back.setVolume(backVolume);
    if(backVolume<1.0){
    backVolume+=0.0002;
    amp2 = map(level, 0, 0.5, amp, 2*amp);
}if(counter>71000){
  amp2 = map(level, 0, 0.5, amp, 5*amp);
}if(counter>100000){
  amp2 = map(level, 0, 0.5, amp, amp*7);
  amp = 1.0
  amp4 = map(level, 0, 0.5, amp, amp*5);
}if(counter>150000){
  amp3 = map(level,0,1, amp, amp*2);
}if(counter>207000){
  amp2 = map(level, 0, 0.5, amp, amp*5);
  amp4 = map(level, 0, 0.5, amp, amp*2);
}if(counter>247000){
  amp4 = map(level, 0, 0.5, amp, amp*5);
  amp3 = map(level,0,1, amp, amp*5);
}if(counter>303000){
  amp5 = map(level,0,1,amp,amp*2.5);
}if(counter>330000){
  amp5 = map(level,0,1,amp,amp*1.5);
}
// if(counter>133000){
//   amp2 = map(level, 0, 0.5, amp, amp*10);
//   amp = 1.0
// }

}else{
back.setVolume(0); 
amp2 = 1.0;
amp3 = 1.0;
}
  fill(0,30);
  noStroke();
  rect(0,0,width, height);
  fill(255);
  fill(255);
  translate(width/2-250,height/2-250)
  for (let y=0; y<=num; y++) {
    for (let x=0; x<=num; x++) {
      var distance = dist(500/2, 500/2, x*unit*amp3, y*unit*amp3);
      var offSet = map(distance, 0, sqrt(sq(500/2)+sq(500/2)), 0, TWO_PI*amp);
      var sz = map(sin(theta+offSet), -1, 1, unit*0.2*amp, unit*0.1*amp);
      var angle = atan2(y*unit-500/2, x*unit-500/2);
      push();
      translate(x*unit, y*unit);
      rotate(angle*amp5);
      var px = map(sin(theta+offSet),-1,1,0,50*amp*amp2);
      ellipse(px,0, sz, sz);
      pop();
    }
  }
  stroke(255);

  theta -= (TWO_PI/frames)*amp*amp4;
}
