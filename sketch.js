var wall, thickness;
var bullet, speed, weight;
var damage;



function setup() {
  createCanvas(1600,400);
 //car = createSprite(1300, 100, 30, 70);
 bullet = createSprite(50,200,50,5);
 bullet.shapeColor="white";
 bullet.velocityX = random(223, 321);

 wall = createSprite(1200,200,random(22, 83),height/2);
wall.shapeColor=(230, 230, 230);

}

function draw () {
  background("black");
  
    if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage= 0.5* weight * speed* speed/(thickness* thickness* thickness);
    if (damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge= bullet.x+bullet.width;
  wallLeftEdge= wall.x;
  if (bulletRightEdge>= wallLeftEdge){
    return true
  }
  return false
}









