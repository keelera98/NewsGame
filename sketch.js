var makeSprite;
var x;
var y;
var money = 0;
var time;
var spill;
var i = 1;
function preload(){
  img = loadImage("tanker.png", 50, 50);
  img2 = loadImage("ocean.png", 900,700);
}

function setup() {
  createCanvas(900, 700);
  makeSprite = createSprite(300, 300, 50, 50);
  spill = new oilBlot(makeSprite.position.x, makeSprite.position.y);
}


function draw() {
  time = millis();
  if(time < 3000){
    background(0);
    textSize(50);
    fill(255);
    text("What Spill?", 300, 350);
  }else{
    background(img2);
    if(keyIsDown(88)){
      money += 10000;
      spill.size += .5;
      i++;
    }
    spill.display();
    textSize(50);
    fill(0, 255, 0);
    text("$", 70, 100);
    text(money, 100, 100);
    fill(255);
    text("Use arrow keys to move, press X to drill", 10, 50);
    drawSprites();
    makeSprite.addImage(img);
    makeSprite.setCollider("circle", 0, 0, 80);
    if(keyDown(UP_ARROW)){
      makeSprite.addSpeed(.3, makeSprite.rotation);
    }
    if(keyDown(DOWN_ARROW)){
      makeSprite.setSpeed(0, makeSprite.rotation);
    }
    if(keyDown(RIGHT_ARROW)){
      makeSprite.rotation += 4;
    }
    if(keyDown(LEFT_ARROW)){
      makeSprite.rotation -= 4;
    }
    //text(makeSprite.position, 100, 100);
    if(makeSprite.position.x > 900){
      makeSprite.position.x = 0;
    }
    if(makeSprite.position.x < 0){
      makeSprite.position.x = 900;
    }
    if(makeSprite.position.y > 900){
      makeSprite.position.y = 0;
    }
    if(makeSprite.position.y < 0){
      makeSprite.position.y = 900;
    }
  }
}

function oilSpill(x, y){
  var oil = createSprite(x, y);
  //var spill = ellipse(x, y, 50, 50);
  oil.setCollider("circle", 0, 0, 80);
  return oil;
}




