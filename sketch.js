function setup() {
    createCanvas(700, 700);
    background("black");
  }
  
  function draw() {
    stroke("blue");
    fill("purple");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 16, 20);
    }
  }
  
