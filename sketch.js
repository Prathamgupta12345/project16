

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime;
var ground;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bananaImage=loadImage("banana.png");
}



function setup() {
  monkey=createSprite(40,360,50,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  ground=createSprite(200,360,800,10);
  FoodGroup=new Group;
 obstacleGroup=new Group;
 
}
 


function draw() {
  background("white");
  ground.velocityX = -6;
   if(keyDown("space")&& monkey.y >=320){
    monkey.velocityY=-12;
    
  }
   monkey.velocityY = monkey.velocityY + 0.5     
  monkey.collide(ground);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime:"+survivalTime,200,50);
 
  spawnObstacle()
  spawnBanana()
 drawSprites() 
}

function spawnObstacle(){
  if(frameCount%100===0){
    obstacle=createSprite(400,330,40,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-4;
    obstacle.lifetime=400;
    obstacleGroup.add(obstacle);
  }
}

function spawnBanana(){
   if(frameCount%100===0){
    banana=createSprite(400,180,40,40);
    banana.y=Math.round(random(180,130));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=400;
    FoodGroup.add(banana);
  }
}


