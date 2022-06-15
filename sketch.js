let grids = [];
let us = [];
let choicesrgbs = [0,255];
let myFont;


let grid;


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 10);
  background(0);
  myFont = loadFont('CourierStd-Bold.otf');
  textAlign(CENTER);

}

function mousePressed(){
   
   let grid = new Grid(); 
   grids.push(grid);
   
 }

function draw() {
  blendMode(MULTIPLY);
  background(0);
  clear();
  if(grids.length > 0){
   for(i = 0; i < grids.length; i ++){

    
   grids[i].move();
   grids[i].display();
    
   }
  }
}


class Grid {
  constructor(){
    this.x = 10;
    this.y = 10;
  
    this.rippleStartX = mouseX;
    this.rippleStartY = mouseY;
    
 
      this.r = random(220);
      this.g = random(200);
      this.b = abs(120);
 

      
    this.ripple = 0;
  }
  move(){
    this.ripple = this.ripple + 1.5;
    
   
  }
  display(){ 
if(this.ripple < width/8){
    for(this.x = 10; this.x <= windowWidth; this.x = this.x + 20){
      for( this.y = 10;  this.y <= windowHeight;  this.y =  this.y + 20){
        if(dist( this.rippleStartX,this.rippleStartY,this.x, this.y) < this.ripple + 20 && dist(this.rippleStartX,this.rippleStartY,this.x, this.y) > this.ripple - 20){
          
          noStroke();
          fill(this.r,this.g,this.b);
        ellipse(this.x, this.y, random((dist( -this.rippleStartX/2,-this.rippleStartY/2,-this.x/2, -this.y/2))*0.3));
textFont(myFont);
    //textSize(random(-this.x*0.03,this.y*0.03));
          textSize(random(10,-10));
		fill(0);
text('POP', this.x, this.y);
textAlign(CENTER,CENTER);         
   
        }
  }
  
        }
      }
    }

  
  }
function keyTyped() {
  if (key === '1') {
    clear();
    background(0);
}

   }
function keyPressed() {
 if (key === '2') {
    save(`${(new Date()).toISOString()}.png`)
    }
   }

