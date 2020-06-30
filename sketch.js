var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(500, 500, 50, 80);
  fixedRect.shapeColor = 'yellow';
  movingRect = createSprite(700, 80, 80, 30);
  movingRect.shapeColor = 'yellow';

  fixedRect.debug = 'true';
  movingRect.debug = 'true';
}

function draw() {
  background(0); 
  movingRect.x = World.mouseX; 
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    &&  fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
    ){

      fixedRect.shapeColor = 'blue';
      movingRect.shapeColor = 'blue';

  }
  else{
    fixedRect.shapeColor = 'yellow';
    movingRect.shapeColor = 'yellow';

  }
  drawSprites();
}