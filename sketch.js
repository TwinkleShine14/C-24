const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box3,box4,box5;
var pig,pig2;
var log,log2,log3,log4;
var bird
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20)
    pig = new Pig (810,320)
    log=new Log(810,280,300,PI/2)
    box3 = new Box(700,260,70,70)
    box4 = new Box(920,260,70,70)
    box5 = new Box(810,200,70,70)
    pig2 = new Pig (810,260)
    log2 =new Log(810,240,300,PI/2)
    log3 =new Log(870,140,150,-PI/7)
    log4 =new Log(760,140,150,PI/7)
    bird = new Bird (100,100)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
    bird.display();
}