var ball,img,paddle;
var edges;

function preload() {
  ballimg = loadImage("ball.png");
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  
  ball = createSprite(40,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=9; 
  ball.velocityY=5;
  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  
  edges=createEdgeSprites();

}

function draw() {
  background(255,223,0);
  
   paddle.y=mouseY;
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  
  paddle.collide(edges);

  drawSprites();
  
}


