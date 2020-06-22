var fixedRect, movingRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200,200,50,80);
  movingRect=createSprite(400,200,80,30);
  gameObject1=createSprite(100,100,50,50);
  gameObject2=createSprite(200,100,50,50);
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor="red";
    gameObject2.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="green";
   gameObject2.shapeColor="green";
  }
  drawSprites();
}
