let shapes = []

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(200);
  for (let shape of shapes) {
    fill(shape.color)
    if (shape.shapeType === 'square') {
      rectMode(CENTER)
      rect(shape.x, shape.y, random(20, 50), random(20, 50));
    }
    if (shape.shapeType == 'circle') {
      circle(shape.x, shape.y, random(20, 50));
    }
    if (shape.shapeType === 'blob'){
      ellipse(shape.x, shape.y, random(20, 50), random(20, 50))
    }
  }
}
function mousePressed() {
  addAShape();
}
function addAShape() {
  shape1 = {
    x: mouseX,
    y: mouseY,
    color: random(['green', 'yellow', 'blue']),
    shapeType: random(['square', 'circle', 'blob'])
  }
  shapes.push(shape1);
  }
function keyPressed(){
  removeAShape()
}
function removeAShape() {
  shapes.pop(shape1)
}
