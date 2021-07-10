var aeroplane,aeroplane_img;
var bomb1,bomb2,bomb1_img,bomb2_img;
var bg;
var stone;
var Bomb1,Bomb2;

function preload(){
   aeroplane_img=loadImage("aeroplane.png");
   bomb1 = loadImage("bomb1.png");
 //   bomb2 = loadImage("bomb2.jpg");  
    bg = loadImage("bg.png"); 
   //stone = loadImage("");
}

function setup() {
  createCanvas(800,400);
  rectMode(CENTER);
  aeroplane=createSprite(width/2, 200, 10,10);
  aeroplane.addImage(aeroplane_img);

//Bomb1= createsprite(width/2, 80, 10,10);
//Bomb1.addImage(bomb1_img);

//Bomb2 = createSprite();
//Bomb2.addImage(bomb2_img);

//stone = createSprite()
//stone.addImage()
}

function draw() {
  background(bg);  



  drawSprites();

}