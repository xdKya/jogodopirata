const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;

var fundo;
var tower, towerimg;

function preload() {
  fundo = loadImage("assets/background.gif"); 
  towerimg = loadImage("assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);



  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1,options);
  World.add(world, ground);

  tower = Bodies.rectangle(160,350,160,310,options);
  World.add(world,tower);
 
}

function draw() {
  background(189);

  rect(ground.position.x,ground.position.y,width*2,1);


  image(fundo,0,0,1200,600);

  push();
  imageMode(CENTER);
  image(towerimg,tower.position.x,tower.position.y,160,310);
  pop();
  
  Engine.update(engine);
 
}
