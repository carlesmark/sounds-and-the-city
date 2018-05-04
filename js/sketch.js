var slide_array=[];
var presscount=1;

function preload() {
    slide_array[1]=loadImage("img/soundchart1.jpg");
    slide_array[2]=loadImage("img/soundchart2.jpg");
    slide_array[3]=loadImage("img/soundchart3.jpg");
    slide_array[4]=loadImage("img/soundchart4.jpg");
    slide_array[5]=loadImage("img/soundchart5.jpg");
    slide_array[6]=loadImage("assets/f.svg");
    slide_array[7]=loadImage("assets/g.svg");
    slide_array[8]=loadImage("assets/h.svg");
    slide_array[9]=loadImage("assets/i.svg");
    slide_array[10]=loadImage("assets/j.svg");
    
}
function setup() {
  createCanvas(displayWidth,displayHeight);
}  

function draw() {
   image(slide_array[presscount],100,0);
}

function mousePressed(){
 if(presscount==18)
 {
  presscount=0;
 }
presscount++;
clear();
}

