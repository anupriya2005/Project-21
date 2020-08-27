var wall, thickness;
var bullet, speed, weight;
var damage;



function setup() {
  createCanvas(1600,400);
 car = createSprite(1300, 100, 30, 70);
 bullet = createSprite(1275,100,20,10);
 bullet.shapeColor="white";
 wall = createSprite(20,200,20,400);
wall.shapeColor=(80,80,80);
bullet.collide(wall);
}

function draw () {
  background("black");
  thickness = random(22,83);
  speed=random(223,321)
  weight=random(30,52)
  hasCollided();
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
  wallLeftEdge+wall.x;
  if (bulletRightEdge>= wallLaftEdge){
    return true
  }
  return false
}









