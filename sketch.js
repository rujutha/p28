
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload() {
    boyImg = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree = new Tree(580,450,100,200);
mango1 = new Mango(600,390,30,30);
mango2 = new Mango(500,390,30,30);
mango3 = new Mango(700,390,30,30);
mango4 = new Mango(525,300,30,30);
mango5 = new Mango(650,300,30,30);
ground = new Ground(400,690,800,20);
stone = new Stone(150,540,5,5);

slingshot = new Slingshot(stone.body,{x:140,y:590});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  tree.display();
  mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
ground.display();
stone.display();
slingshot.display();

imageMode(CENTER);
        image(boyImg,200,630,200,200);

        detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
 
  drawSprites();

  
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.r+lstone.r){
	Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
	if (keyCode===32){
    Body.setPosition(stone.body,{x:140,y:590});
    slingshot = new Slingshot(stone.body,{x:140,y:590});
    //attach();
   // slingshot.attach();
   
	}
}