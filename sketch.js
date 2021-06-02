var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles ;
var plinkos ;

var divisionHeight=300;
var score =0;

var count =0

var yellowline

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    yellowline = new Yellowline(550,550,800,20)

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(plinkos.isTouching(Ground)){
    score=score+50;
    textSize(35)
    text("score",30,20)
   }
   gameState = PLAY;
 
if(particle!=null){
  particle.display();

  if(particle.body.position.x < 300){
    score=score+500;
    particle=null
  }
}
if(count>=5){
gameState ="end"
}

if(frameCount % 50===0){
  divisions =Math.round(random(217,20))
  divisions[x],[y];
}

   }


function mousePressed(){
  if(gameState!=="end"){
    particle = new Particle(mouseX, 10, 10, 10)
  }
}