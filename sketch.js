const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score;
var particle;
var score;
var turn;
var lines;


function setup() 
{
  createCanvas(480,800);
  score = 0;
  turn = 0;
  engine = Engine.create();
  world = engine.world;
  
  lines = createSprite (10,450,1000,5);
  


    ground = new Ground(width/2,height,width,20);

    for (var k = 0; k <= width; k = k + 80)
    {
      divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    }
 
     for (var j = 75; j <= width; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,75,20));
     }
 
     for (var j = 50; j <= width-10; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,175,20));
     }
 
      for (var j = 75; j <=width; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,275,20));
     }
 
      for (var j = 50; j <=width-10; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,375,20));
     }
}

function draw() 
{
  background("black");  
  Engine.update(engine);

 
  lines.display();
  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0)
  {
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var j = 0; j < particles.length; j++) 
 {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) 
  {
    
    divisions[k].display();
  }

  if(particle != null)
  {
    particle.display();
    if(particle.body.position.y > 760)
    {
      if(particle.body.position.x < 300)
      {
        score = score+500;
        particle = null;
        if(count >=5) gameState = "end";
      }
    }
  }

  drawSprites();
  textSize(15);
  stroke("yellow");
  text ("SCORE:" +score , 400,20);
  stroke("red");
  text("500" ,20,500);
  stroke("red");
  text("500" ,110,500);
  stroke("red");
  text("100" ,200,500);
  stroke("red");
  text("100" ,270,500);
  stroke("red");
  text("200" ,350,500);
  stroke("red");
  text("200" ,450,500);
}

function mousePressed()
{
 if(gameState !== "end")
 {
   count ++;
   particle = new Particle(mouseX , 10,10,10);
 }
}