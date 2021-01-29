var hou;
var minut;
var secon;

var mi;
var sc;
var hr;

function setup() 
{
  createCanvas(600,400);

  angleMode(DEGREES);
}

function draw() 
{
  background(0);  

  textSize(30);
  textFont("bembo");
  fill(255,0,0);
  text("24",450,170); 
  fill(0,255,0);
  text("HOUR",430,210);
  fill(0,0,255);
  text(" CLOCK",412,250);

  translate(200,200);
  rotate(-90);
  
  hou = hour();
  minut = minute();
  secon = second();

  sc = map(secon, 0, 60, 0, 360);
  mi = map(minut, 0, 60, 0, 360);
  hr = map(hou % 12, 0, 12, 0, 360);

  push();
  rotate(sc);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mi);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hr);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,225);
  noFill();
  point(0,0);
  strokeWeight(10);

  stroke(255,0,0);
  arc(0,0,300,300,0,sc);

  stroke(0,255,0);
  arc(0,0,280,280,0,mi);

  stroke(0,0,255);
  arc(0,0,260,260,0,hr);

  drawSprites();
}