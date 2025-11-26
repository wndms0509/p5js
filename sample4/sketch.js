let startTime;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100);
  startTime = millis();
}

function draw() {
  background(0);

  let t = (millis() - startTime) * 0.001;   
  let starCount = 20 + (frameCount % 20);  

  noStroke();
  for (let i = 0; i < starCount; i++) {
    fill(60, 0, 80 + random(-20, 20));
    let x = random(width);
    let y = random(height / 2);
    ellipse(x, y, 2, 2);
  }


  let moonX = 300 + cos(t * 0.5) * 10;
  let moonY = 200 + sin(t) * 20;   

  fill(0, 0, 80);   
  stroke(0, 0, 100);
  ellipse(moonX, moonY, 200, 200);

  
  line(moonX - 80, moonY - 60, moonX - 40, moonY - 100);
  line(moonX - 40, moonY - 100, moonX - 20, moonY - 50);

  line(moonX + 80, moonY - 60, moonX + 40, moonY - 100);
  line(moonX + 40, moonY - 100, moonX + 20, moonY - 50);

  let eyeAmt = (sin(t * 2) + 1) / 2; 
  let eyeCol = lerpColor(
    color(60, 100, 100),  
    color(200, 100, 100),
    eyeAmt
  );
  noStroke();
  fill(eyeCol);
 
  ellipse(moonX - 40, moonY, 40, 40);
  ellipse(moonX + 40, moonY, 40, 40);

 
  fill(0, 0, 0);

  ellipse(moonX - 40, moonY, 15, 15);
  ellipse(moonX + 40, moonY, 15, 15);


  let noseCol = lerpColor(
    color(0, 80, 100),     
    color(330, 80, 100), 
    eyeAmt
  );
  fill(noseCol);
  ellipse(moonX, moonY + 30, 20, 20);
  stroke(0, 0, 100);
  let whiskerOffset = sin(t * 3) * 5;

  line(moonX - 20, moonY + 30 + whiskerOffset, moonX - 80, moonY + 20);
  line(moonX - 20, moonY + 40 + whiskerOffset, moonX - 80, moonY + 40);
  line(moonX - 20, moonY + 50 + whiskerOffset, moonX - 80, moonY + 60);

 
  line(moonX + 20, moonY + 30 + whiskerOffset, moonX + 80, moonY + 20);
  line(moonX + 20, moonY + 40 + whiskerOffset, moonX + 80, moonY + 40);
  line(moonX + 20, moonY + 50 + whiskerOffset, moonX + 80, moonY + 60);

 
  let heartScale = 1 + 0.2 * sin(t * 4);     
  let heartColorAmt = (sin(t * 1.5) + 1) / 2;
  let heartCol = lerpColor(
    color(340, 80, 100),  
    color(20, 80, 100), 
    heartColorAmt
  );

  noStroke();
  fill(heartCol);

  push();
  translate(500, 220);
  scale(heartScale);
  ellipse(-20, -20, 40, 40);
  ellipse(20, -20, 40, 40);
  triangle(-42, -20, 42, -20, 0, 38);
  pop();
}
