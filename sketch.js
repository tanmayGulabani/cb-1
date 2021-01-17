
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    dustbin1 = new Dustbin(970,550,20,100)
    dustbin2 = new Dustbin(1080,590,200,20)
    dustbin3 = new Dustbin(1180,550,20,100)
    paper = new Paper(100,300,25)
	ground = new Ground (width/2, 400, width,10)
	
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
    }
}



