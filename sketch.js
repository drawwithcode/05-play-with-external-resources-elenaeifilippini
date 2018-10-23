
var bitSong;
var analyzer;



function preload(){

bitSong= loadSound('./assets/10_arpanauts.mp3');

}
var inc = 0.1 ;
var scl =20;
var cols, rows;
var zoff=0;
var filter;
var filterFreq;

function setup() {
  createCanvas(windowWidth, windowHeight);

// per creare un vettore solo ogni 20px
  cols= floor(width/scl);
  rows= floor(height/scl);
  bitSong.play();
//per analyzer
  analyzer = new p5.Amplitude();
    analyzer.setInput(bitSong);

  bitSong.loop();


}

function draw() {
  background('#eea7a6');



var volume = analyzer.getLevel();
  //console.log(volume);
zoff= volume;
volume = map(volume,0,1,0,TWO_PI);


ellipse(width/2,height/2,filterFreq);


var yoff=0
for (var y = 0; y < rows; y++) {
    if(frameCount> 450) {
      xoff= volume
    } else { xoff=0}


    for (var x = 0; x < cols; x++) {
      var index = (x + y * width) * 4;
      var angle =noise(xoff,yoff,zoff) *TWO_PI ;

      //var v = createVector();
      //ma c'è una funzione per creare vector by un angolo
      var v = p5.Vector.fromAngle(angle );

      xoff += inc;
  // disegnamo vettore come una linea e poi vi applichiamo v nella rotazione
  stroke(255);

  push();
translate(x* scl, y* scl);
rotate(v.heading());
line(0,0,scl,0);

  pop();

    }
  yoff += inc;
  zoff += 0.002;
  }

}
