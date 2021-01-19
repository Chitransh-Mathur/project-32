const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ballImg,ball;
var ground1,ground2;
var ground3;
var score=0;



function setup(){
 var canvas= createCanvas(1200,400);
    engine = Engine.create();
    
    world = engine.world;
    ballImg=loadImage("polygon.png");
    ball=Bodies.circle(50,200,20);
    World.add(world,ball);

slingshot=new SlingShot(this.ball,{x:100,y:200});
    Engine.run(engine);
    ground1=new Ground(390,300,270,20);
    ground2=new Ground(800,225,210,20);
    ground3=new Ground(0,400,5000,30);
  

    block1=new Block(300,275,30,40);
    block2=new Block(330,275,30,40);
    block3=new Block(360,275,30,40);
    block4=new Block(390,275,30,40);
    block5=new Block(420,275,30,40);
    block6=new Block(450,275,30,40);
    block7=new Block(480,275,30,40);
    block8=new Block(330,235,30,40);
    block9=new Block(360,235,30,40);
    block10=new Block(390,235,30,40);
    block11=new Block(420,235,30,40);
    block12=new Block(450,235,30,40);
    block13=new Block(360,195,30,40);
    block14=new Block(390,195,30,40);
    block15=new Block(420,195,30,40);
    block16=new Block(390,155,30,40);
    block17=new Block(740,205,30,40);
    block18=new Block(770,205,30,40);
    block19=new Block(800,205,30,40);
    block20=new Block(830,205,30,40);
    block21=new Block(860,205,30,40);
    block22=new Block(770,165,30,40);
    block23=new Block(800,165,30,40);
    block24=new Block(830,165,30,40);
    block25=new Block(800,125,30,40);

    
}

function draw(){
    background(56,44,44);
    textSize(35);
    fill("white");
    text("score:"+score,750,40);
    Engine.update(engine);0
    
    fill("brown");
    ground1.display();
    ground3.display();
    slingshot.display();
    fill("blue");
    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();
    fill("pink");
    block8.display();
    block8.score();
    block9.display();
    block9.score();
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();
    fill("blue");
    block13.display();
    block13.score();
    block14.display();
    block14.score();
    block15.display();
    block15.score();
    fill("pink");
    block16.display();
    block16.score();
    fill("brown");
    ground2.display();
    fill("blue");
    block17.display();
    block17.score();
    block18.display();
    block18.score();
    block19.display();
    block19.score();
    block20.display();
    block20.score();
    block21.display();
    block21.score();
    fill("pink");
    block22.display();
    block22.score();
    block23.display();
    block23.score();
    block24.display();
    block24.score();
    fill("pink");
    block25.display();
    block25.score();
    fill("gold");
   

    imageMode(CENTER);
    image(ballImg,ball.position.x,ball.position.y,40,40);

    slingshot.display();
}

function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
slingshot.attach(this.ball);
    }
}

async function getBackgroundImg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJSON=await response.json()
   var datetime=responseJSON.datetime;
   var hour=datetime.slice(11,13);
   if (hour>=06&&hour<=19){
    bg="sprite/bg.png";
}
else{
    bg="sprites/bg2.jpg";
}
backgroundImg=loadImage(bg);
 console.log(backgroundImg);
   }
   