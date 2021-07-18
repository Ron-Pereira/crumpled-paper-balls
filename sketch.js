const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,world;

function preload()
{
	
}

function setup() {
createCanvas(1600, 700);
ground = new Ground(width/2,670,width,20);

 var ball_options={
 isStatic:false,
 restitution:0.3,
 friction:0,
 density:1.2
 }

engine = Engine.create();
world = engine.world;
//Create the Bodies Here.
 ball = Bodies.circle(100,10,20,ball_options);
 World.add(world,ball); 

Engine.run(engine);

 
 }


function draw() {
  rectMode(CENTER);
  background(0);
 Engine.update(engine)
 ellipse(ball.position.x,ball.position.y,70);
 ground.display();


  
  
 
}



