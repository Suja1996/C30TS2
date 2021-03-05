
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new ground(700,300,800,10,"images/base.png")

	//tree=new Ground(800,300,800,600,"images/tree.png")
	//tree.scale=0.5
	mango1=new Box(320,298,30,30);
  mango2=new Box(352,298,30,30);
	 mango3=new Box(384,298,30,30);
	mango4=new Box(416,298,30,30);
	mango5=new Box(448,298,30,30);
	mango6=new Box(482,298,30,30);
	mango7=new Box(352,288,30,30);
	mango8=new Box(384,288,30,30);
	mango9=new Box(416,288,30,30);
	mango10=new Box(448,288,30,30);
	mango11=new Box(780,278,30,30);
  mango12=new Box(384,278,30,30);
  mango13=new Box(416,278,30,30);
	mango14=new Box(400,260,30,30);
	
	stone1=new stone(84,100,50)


console.log()
slingshot1=new slingshot(stone1.body,{x:84,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("cyan");
  drawSprites();
 // tree.display()
  mango1.display();
  mango2.display();
 mango3.display();
  mango4.display();
  mango6.display();
mango5.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  text(mouseX+','+mouseY,mouseX,mouseY)
  ground1.display();

  //ground1.display()
 stone1.display()
 slingshot1.display()
 mangoFall(stone1,mango1)
 mangoFall(stone1,mango2)
 mangoFall(stone1,mango3)
 mangoFall(stone1,mango4)
 mangoFall(stone1,mango5)
 mangoFall(stone1,mango6)
 mangoFall(stone1,mango7) 
 mangoFall(stone1,mango8)
 mangoFall(stone1,mango9)
 mangoFall(stone1,mango10)
 mangoFall(stone1,mango11)
 mangoFall(stone1,mango12)
// console.log(stone1.body)
if (keyDown("space")){
	Matter.Body.setPosition(stone1.body,{x:120,y:460});
		slingshot1.attach(stone1.body);
	}
}



function mouseDragged(){

   Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot1.fly();
}

function mangoFall(stone,Box){

	if(isTouching(stone,Box)){
	//	console.log("mangofall")
		Matter.Body.setStatic(Box.body,false);
	 }
}

