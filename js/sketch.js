var mapimg;

var lat = 0;
var lon = 0;


function preload() {
  mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/streets-v9/static/-122.4241,37.78,14.25,0,0/1024x512?access_token=pk.eyJ1IjoibWFya2NhcmxlcyIsImEiOiJjamV5eWlxMHMwNG1rMndvOTV6YW05OG55In0.ZgvmYWzuVeTkM8AuD3EHIQ');

}

function setup(){
  createCanvas(1024, 512);
  image(mapimg, 0, 0);

}
function draw(){


}
