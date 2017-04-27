String msg;
int gap = 20;
PFont font;

void setup(){
  size(500, 500);
  smooth();
  frameRate(10);
  font = createFont("Kont.ttf", 31);
  msg = "P";
}

void draw(){
  background(255);
  for(int i = 0; i <width; i= i + 30){
    for(int j = 0; j<height; j = j + 30){
      fill(255, 100,150, random(100));
       textFont(font, abs(random(i - 230))); 
       text(msg, i, random(j));
    }
  }
}