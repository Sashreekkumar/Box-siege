const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1200,20);
    platform1 = new Ground(650, 550, 250, 20);
    platform2 = new Ground(1000, 350, 170, 20);

    box1= new Box(650,520, 30,40 );
    box2= new Box(680,520, 30,40 );
    box3= new Box(710,520, 30,40 );
    box4= new Box(740,520, 30,40 );
    box5= new Box(620,520, 30,40 );
    box6= new Box(590,520, 30,40 );
    box7= new Box(560,520, 30,40 );
    box8= new Box(650,480, 30,40 );
    box9= new Box(680,480, 30,40 );
    box10= new Box(710,480, 30,40 );
    box11= new Box(620,480, 30,40 );
    box12= new Box(590,480, 30,40 );
    box13= new Box(650,440, 30,40 );
    box14= new Box(680,440, 30,40 );
    box15= new Box(620,440, 30,40 );
    box16= new Box(650,400, 30,40 );

    box1a= new Box(1000,320, 30,40 );
    box2a= new Box(970,320, 30,40 );
    box3a= new Box(940,320, 30,40 );
    box4a= new Box(1030,320, 30,40 );  
    box5a= new Box(1060,320, 30,40 );  
    box6a= new Box(1000,290, 30,40 );  
    box7a= new Box(1030,290, 30,40 );  
    box8a= new Box(970,290, 30,40 );  
    box9a= new Box(1000,250, 30,40 ); 

  poly= new Polygon(100, 500, 50, 50)    
    slingshot = new Hook(poly.body,{x:100, y:500});
}

function draw(){
    background("black");
    Engine.update(engine);
  
    ground.display();
    platform1.display();
    platform2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box7.display();
    box6.display();
    box8.display();
    box9.display();
    box10.display();
    box12.display();
    box11.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    
    box1a.display();
    box2a.display();
    box3a.display();
    box4a.display();
    box5a.display();
    box6a.display();
    box7a.display();
    box8a.display();
    box9a.display();

    slingshot.display(); 
    
    poly.display();
}

function mouseDragged(){
   Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
  }


function mouseReleased(){
   slingshot.fly();
}