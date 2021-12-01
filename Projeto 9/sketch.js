
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

 
  
  
 //muda a cor do fundo quando a tecla é pressionada 
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }

  if (keyIsDown(RIGHT_ARROW))
  {
    background("red");
  }


  
  drawSprites();
}

