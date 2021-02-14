var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score , ground
var survivaltime

function preload(){
  
  
monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(650,450);
  score = 0;
  survivaltime = 0;
  
  
  monkey = createSprite(75,405,10,10);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale = 0.11;
  
  ground = createSprite(325,445,650,7);
  
  Fruitgroup = new Group();
  Obstaclesgroup = new Group();
  
}


function draw() {
  background("green");
  ground.velocityX = -7; 
  ground.x = ground.width/2;
  
  
  if(World.frameCount%200===0){
    fruit()
 }
  
  if(World.frameCount%300===0){
    obstacles()
 }
  
  if(keyDown("space")&&monkey.y >= 350){
    monkey.velocityY=-10;
  }
  monkey.velocityY = monkey.velocityY + 0.3;
  monkey.collide(ground);
  
  if(monkey.isTouching(Fruitgroup)){
    Fruitgroup.destroyEach();
    score=score+1;
  }
  
  
  
drawSprites();
  textSize(20);
  fill("white") 
  text("Score: "+ score, 400,50);
  
  fill("black")
  var survivaltime = survivaltime+ Math.round(frameCount/60);
  text("Survival Time: "+ survivaltime,200,50);
}

function fruit(){
  banana = createSprite(650,Math.round(random(170,230)),10,10);
  banana.addImage(bananaImage);
  banana.velocityX = -3;
  banana.scale = 0.1;
  Fruitgroup.add(banana);
}

function obstacles(){
  stones = createSprite(650,410,10,10);
  stones.addImage(obstacleImage);
  stones.velocityX = -3;
  stones.scale = 0.2;
  Obstaclesgroup.add(stones);
}
  


