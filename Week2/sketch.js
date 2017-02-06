function setup(){
  createCanvas(500,500);
}

function draw(){
  background(0);
  fill(255);
  if (touchStarted) {
     for( var y = 0; y < height; y=y+200) {
       for( var r= 500; r > 0; r-= 50 ) {
         stroke(random(255),random(255),random(255));
         strokeWeight(random(5,50));
         fill(random(100,255));
         ellipse(250,250,r,r);
       }
     }
   } else {
      for( var y = 0; y < height; y=y+200){
         for( var r= 500; r > 0; r-= 50 ){
             stroke(0);
             strokeWeight(random(5,50));
             fill(255);
             ellipse(250,250,r,r);
             }
         }
      }
}