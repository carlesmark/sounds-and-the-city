var slide_array=[];
var presscount=1;

function preload() {
    slide_array[1]=loadImage("img/soundchart1.gif");
    slide_array[2]=loadImage("img/soundchart2.gif");
    slide_array[3]=loadImage("img/soundchart3.jpg");
    slide_array[4]=loadImage("img/soundchart4.jpg");
    slide_array[5]=loadImage("img/soundchart5.jpg");
    slide_array[6]=loadImage("img/soundchart6.jpg");
    slide_array[7]=loadImage("img/soundchart7.jpg");
    slide_array[8]=loadImage("img/soundchart8.jpg");
//     slide_array[9]=loadImage("img/soundchart9.jpg");
//     slide_array[10]=loadImage("img/soundchart10.jpg");
//     slide_array[11]=loadImage("img/soundchart11.jpg");
//     slide_array[12]=loadImage("img/soundchart12.jpg");
//     slide_array[13]=loadImage("img/soundchart13.jpg");
//     slide_array[14]=loadImage("img/soundchart14.jpg");
//     slide_array[15]=loadImage("img/soundchart15.jpg");
//     slide_array[16]=loadImage("img/soundchart16.jpg");
//     slide_array[17]=loadImage("img/soundchart17.jpg");
//     slide_array[18]=loadImage("img/soundchart18.jpg");
    
}
function setup() {
  createCanvas(600,600);
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

