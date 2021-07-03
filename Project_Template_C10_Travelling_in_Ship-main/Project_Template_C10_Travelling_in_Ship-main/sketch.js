var shipImg1
var shipImg2
var seaImage
var ship_moveing

function preload(){
seaImage= loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png", "ship-2.png")

}

function setup(){
  createCanvas(600,400);

  
 
  sea = createSprite(400,200,400,20);
  sea.addImage(seaImage);
  sea.velocityX=-5
  sea.scale=0.3
 

  ship = createSprite(200,180,400,20);
  ship.addAnimation("moving",shipImg1);
  ship.x = ship.width /2;
  ship.scale=0.3
}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
 drawSprites();
  }
 
