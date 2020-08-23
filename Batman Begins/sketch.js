var umbrella;

var raindrop;

function setup(){
    canvas = createCanvas(400,400);
    umbrella = createSprite(200, 200);
    raindrop = createSprite(randomNumber(0,400), 0);
    raindrop.setCollider("circle");
    umbrella.setCollider("circle", 0, 10);
}

function preload(){
    umbrella = loadImage("Images/Umbrella.jpg");
    raindrop = loadImage("Images/Raindrop.jpg");
}

function draw() {
  background("black");

  umbrella.displace(raindrop);

  if (raindrop.y > 400) {
    raindrop.x = randomNumber(100, 300);
    raindrop.y = 0;
  }

  raindrop.velocityY = 10;


  drawSprites();


}