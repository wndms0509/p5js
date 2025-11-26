function setup() {
  createCanvas(600, 400);
  background(0);
  
  fill(200);      
  stroke(255);    
  ellipse(300, 200, 200, 200);

  line(220, 140, 260, 100);
  line(260, 100, 280, 150);

  line(380, 140, 340, 100);
  line(340, 100, 320, 150);

  fill(255, 255, 0);
  ellipse(260, 200, 40, 40);
  ellipse(340, 200, 40, 40);

  fill(0);
  ellipse(260, 200, 15, 15);
  ellipse(340, 200, 15, 15);

  fill(255, 100, 100);
  ellipse(300, 230, 20, 20);
  

  stroke(255);
  line(280, 230, 220, 220);
  line(280, 240, 220, 240);
  line(280, 250, 220, 260);

  line(320, 230, 380, 220);
  line(320, 240, 380, 240);
  line(320, 250, 380, 260);
  
  noStroke();
  fill(255, 100, 150);

  ellipse(500 - 20, 200, 40, 40); 
  ellipse(500 + 20, 200, 40, 40);
  triangle(500 - 42, 200, 500 + 42, 200, 500, 258);
  saveCanvas("cat ch love")
}