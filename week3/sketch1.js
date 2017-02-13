//Star poop;
//Star poop2;

Star[] poopStarArray;

function setup(){
   createCanvas(800,800);
   //background(0);
   noStroke();
   poopStarArray = new Star[250];
   
   //poop = new Star(width/2, height/2, 2, color(50,150,200));
   //poop = new Star(width/2, height/2, 3, color(150,50,250));
   
    for( var i = 0; i < 250; i++){
        
        poopStarArray[i] = new Star(random(width), random(height), random(4), color(random(255),0, random(255)));
    }
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
}

void draw(){
   var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  background(r, g, b);
  text("red", 165, 35);
  text("green", 165, 65);
  text("blue", 165, 95);
  
  for ( int i= 0; i< 250; i++){
    poopStarArray[i].colorize();
    poopStarArray[i].display();
  
  }
}

class Star{
  //feilds
 var x;
 var y;
 var radius;
 color starColor;
   Star(
     var tempx, var tempy, var tempRad, color tempColor){
     x = tempx;
     y = tempy;
     radius = tempRad;
     starColor = tempColor;
   }
    function colorize(){
      if (mouseIsPressed)
     fill(starColor);
     else{fill(255);
     }
    }
    function display(){
   
    ellipse(x, y, radius*2, radius*2);
    }
}