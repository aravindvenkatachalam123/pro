
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground;

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(790,690,1200,20)
	box1 = new Box(500,690,250,10);
    box2=new Box(600,640,20,100);
    box3=new Box(400,640,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display() ;
  box2.display();
  box3.display();
  drawSprites();
 
  drawSprites();
 
}



