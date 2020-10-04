
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	boy = boyloadImage(10,100,10,30);
    this.boy = Constraint.create(options);
    World.add(world,this.sling);
	boyloadImage =loadImage("PM/boy.png");
	tree = new Tree(10,120,20,45);
	mango= new Mango(11,100,10,10);
	mango2= new Mango(10,113,10,10);
	mango3= new Mango(9,107,10,10);
	mango4= new Mango(7,99,10,10);
	mango5= new Mango(8,118,10,10);
	stone= new Stone(8,118,10,10);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();
  tree.display();

  detectCollision(stone,mango5);
  detectCollision(stone,mango4);
  detectCollision(stone,mango3);
  detectCollision(stone,mango2);
  detectCollision(stone,mango1);
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(boy.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
	rock.fly();
	this.bodyA = null;

}
function detectCollision(mango,stone){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.r+stone.r){
		Matter.body.setStatic(mango.body.false);
	}
}
function keyPressed(){
	if(keyCode===32){
		Matter.body.setPosition(stone.body,{x:235,y:420});
		launcherObject.attach(stone.body)

	}
}


