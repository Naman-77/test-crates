var backgroundIMG, roadImg, playerImg, enemiesImg, cityImg;
var road, player, enemies, obstacles, city;
var obstacleImg1, obstacleImg2, obstacleImg3;
var playerJumpImg;
var enemyImg;
var powerUp, powerUpImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;

var obstacleLane1group;
var obstacleLane2group;
var obstacleLane3group;
var spawnPowerUpGrp;

function preload (){
backgroundIMG = loadImage("Objects/722735.png");
roadImg = loadImage("Objects/naman's finnal looping road.png");
playerImg = loadAnimation("Objects/run0.png","Objects/run1.png","Objects/run2.png","Objects/run3.png","Objects/run4.png","Objects/run5.png","Objects/run6.png","Objects/run7.png","Objects/run8.png", "Objects/run9.png");
playerJumpImg = loadImage("Objects/Jump.png");
obstacleImg1 = loadImage("Objects/Barrel1.png");
obstacleImg2 = loadImage("Objects/Barrel2.png");
obstacleImg3 = loadImage("Objects/png/Obj/crate.png");
enemyImg = loadImage("Objects/enemy1.png");
powerUpImg = loadAnimation("Objects/png/Obj/SpinningObject/Blue/frame1.png", "Objects/png/Obj/SpinningObject/Blue/frame2.png", "Objects/png/Obj/SpinningObject/Blue/frame3.png", "Objects/png/Obj/SpinningObject/Blue/frame4.png", "Objects/png/Obj/SpinningObject/Blue/frame5.png", "Objects/png/Obj/SpinningObject/Blue/frame6.png")
}


function setup() {

  createCanvas(1360,626);

   obstacleLane1group = new Group();
   obstacleLane2group = new Group();
   obstacleLane3group = new Group();
   spawnPowerUpGrp = new Group();
   CrateGrp = new Group();

  road = createSprite(680,512, 1360, 100);
  road.addImage(roadImg);
  road.velocityX = -9
  road.velocityX = road.velocityX - 0.01
  road.x = road.width/2;

  player = createSprite(500, 375, 20, 20);
  player.scale = 0.25;
  player.addAnimation("running",playerImg);

 road.velocityX = -(6 + 3*score/100);

 
 

  console.log(road.velocityX);
  
}


function draw() {
  background(backgroundIMG);  

  score = score + Math.round(getFrameRate() / 60);
  //textSize(3)
  text("score:" + score, 300, 70);

  if (road.x < 0){
    road.x = road.width/2;
  }

  if (keyDown(DOWN_ARROW)){
    player.y = player.y +10;
  }
  if (keyDown(UP_ARROW)){
    player.y = player.y -10;
  }

  if(keyDown("space")){
    player.changeImage(playerJumpImg);
  }

  if(player.isTouching(spawnPowerUpGrp)){
    score = score + 50
  }
  

spawnObstacles();
spawnObstacles2();
spawnObstacles3();
spawnPowerUps1();
spawnPowerUps2();
spawnPowerUps3();
spawnCrate();
spawnCrate2();
spawnCrate3();
  
  drawSprites();
}


function spawnObstacles() {
  if(frameCount % 200 === 0) {
    var obstacle = createSprite(random(1500, 7200),400,10,40);
    obstacle.velocityX = -6;
    obstacle.scale = 0.3;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImg1);
              break;
      case 2: obstacle.addImage(obstacleImg2);
              break;
      
    }
    obstacleLane1group.add(obstacle)
  }
  
}


function spawnObstacles2() {
  if(frameCount % 200 === 0) {
    var obstacle2 = createSprite(random(1500, 7200),500,10,40);
    obstacle2.velocityX = -6;
    obstacle2.scale = 0.3;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle2.addImage(obstacleImg1);
              break;
      case 2: obstacle2.addImage(obstacleImg2);
              break;
      
    }
    obstacleLane2group.add(obstacle2); 
  }
   
}


function spawnObstacles3() {
  if(frameCount % 200 === 0) {
    var obstacle3 = createSprite(random(1500, 7200),600,10,40);
    obstacle3.velocityX = -6;
    obstacle3.scale = 0.3;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle3.addImage(obstacleImg1);
              break;
      case 2: obstacle3.addImage(obstacleImg2);
              break;
      
        
    }
    obstacleLane3group.add(obstacle3);  
  }
  
}


function spawnCrate(){
  if(frameCount % 250 === 0){
  var crate = createSprite(random(1500, 7200), 400, 10, 40);
  crate.velocityX = -6;
  crate.scale = 0.6;
  crate.addImage("crate",obstacleImg3);
  CrateGrp.add(crate);
  }
}

function spawnCrate2(){
  if(frameCount % 250 === 0){
  var crate2 = createSprite(random(1500, 7200), 500, 10, 40);
  crate2.velocityX = -6;
  crate2.scale = 0.6;
  crate2.addImage("crate",obstacleImg3);
  CrateGrp.add(crate2);
  }
}

function spawnCrate3(){
  if(frameCount % 250 === 0){
  var crate3 = createSprite(random(1500, 7200), 600, 10, 40);
  crate3.velocityX = -6;
  crate3.scale = 0.6;
  crate3.addImage("crate",obstacleImg3);
  CrateGrp.add(crate3);
  }
}

function spawnPowerUps1(){
  if(frameCount % 400 === 0) {
  powerUp1 = createSprite(random(1300, 7000), 390, 90, 20);
  powerUp1.addAnimation("powerUp1",powerUpImg);
  powerUp1.scale = 0.2;
  powerUp1.velocityX = -9;
  spawnPowerUpGrp.add(powerUp1);
  }
  
}

function spawnPowerUps2(){
  if(frameCount % 400 === 0) {
  powerUp2 = createSprite(random(1300, 7000), 490, 90, 20);
  powerUp2.addAnimation("powerUp1",powerUpImg);
  powerUp2.scale = 0.2;
  powerUp2.velocityX = -9;
  spawnPowerUpGrp.add(powerUp2);
  }
  
}
  
  
  
  
function spawnPowerUps3(){
  if(frameCount % 400 === 0) {
  powerUp3 = createSprite(random(1300, 7000), 590, 90, 20);
  powerUp3.addAnimation("powerUp1",powerUpImg);
  powerUp3.scale = 0.2;
  powerUp3.velocityX = -9;
  spawnPowerUpGrp.add(powerUp3); 
  }
  
}

