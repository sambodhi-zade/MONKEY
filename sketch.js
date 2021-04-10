
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,ground
var survivalTime


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
}


function setup() {
  createCanvas(560,405);
  
  
  FoodGroup = new Group()
  obstacleGroup = new Group()
  
  score=0
  survivalTime=0;       
  
  ground=createSprite(0,400,1500,10)
  ground.velocityX=-15
  
  monkey=createSprite(90,370,10,10)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1

  
}


function draw() {
  background("skyblue")
  
  if(keyDown("space") && monkey.y>=350){
    monkey.velocityY=-10
  }
  
  monkey.velocityY=monkey.velocityY + 0.3
  monkey.collide(ground)
  
  
  
  
  if(World.frameCount%200===0){
    fruits()
  }
  
  if(World.frameCount%300===0){
    stones()
  }
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score=score+1
  }
  
    if (ground.x < 0){
      ground.x = ground.width/2;
      
    }
  
  
    
  
  drawSprites();
  fill("white")
  text("Score: "+ score,500,50);
  
  fill("red")
  var survivalTime=Math.round(frameCount/frameRate());
  text("Survival Time: " + survivalTime,350,50)
}


function fruits(){
  banana=createSprite(670,Math.round(random(170,230)),10,10)
  banana.addImage("bananaImage",bananaImage)
  banana.scale=0.1
  banana.velocityX=-6
  FoodGroup.add(banana)
}


function stones(){
  obstacle=createSprite(630,380,101,10)
  obstacle.addImage("obstacleImage", obstacleImage)
  obstacle.velocityX=-7
  obstacle.scale=0.2
  obstacleGroup.add(obstacle)
  obstacle.lifetime=610;
  obstacle.depth = obstacle.depth;
   obstacle.depth = obstacle.depth + 2;
    
}
