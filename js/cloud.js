var canvas;
var x = [];
var speed;

function setup() {
  canvas = createCanvas(300, 500);

  for (var i=10; i<95; i+=15) {
    x[i] = random(0, height);
  }
}

function draw() {

  for (var i=0; i<x.length; i++) {

    x[i]+=(random(.3, 2));

    if (x[i] > width + 100) {
      x[i] = -100;
    }

	fill(255);
    noStroke();
    ellipse (x[i]-12,(i*15)+5, 30, 30);
    ellipse (x[i]+20,(i*15)-10, 70, 70);
    ellipse (x[i]+55,(i*15)-24, 30, 30);
    ellipse (x[i]+50,(i*15)+12, 35, 35);
    ellipse (x[i]+70,(i*15), 45, 45);
   	}

}

window.onresize = function() {
  // var w = window.innerWidth;
  // var h = window.innerHeight;
  // canvas.size(w,h);
  // width = w;
  // height = h;
};