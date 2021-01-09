var thickness, wall;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(1600, 400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  bullet = createSprite(50, 200, 10, 5);
  bullet.shapeColor = color("white")
  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = color("white");
  bullet.velocityX = speed;
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false;
  }


function draw() {
  background(51);
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if(damage > 10){
      wall.shapeColor = color("red")
    }

    if(damage<10){
      wall.shapeColor = color("green");
    }
  }
 
  
  drawSprites();
}