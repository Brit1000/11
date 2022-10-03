var mar,navio;
var marImg,navioImg1;

function preload(){
  marImg = loadImage("sea.png");
  navioImg1 = loadAnimation("ship-1.png","ship-1.png", "ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // mover o plano de fundo
   mar=createSprite(400,200);
   mar.addImage(marImg);
   mar.velocityX=+5;
   mar.scale=0.3;

  navio=createSprite(130,200,30,30);
  navio.addAnimation("movingShip",navioImg1);
  navio.scale=0.25;

}

function draw() {
  background(0);
  
  drawSprites();
}