let showHeart = false;
let mouthOpen = 0;
let bgColor;

let showButterfly = false;
let bfx = 0, bfy = 0;

let shirtR = 90;
let shirtG = 160;
let shirtB = 255;
let shirtRR = 70
let shirtGG = 120
let shirtBB = 210

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
  bgColor = color(250, 245, 240);
}

function draw() {
  background(bgColor);

  //나비
  if (showButterfly) {
    noStroke();
    fill(60, 50, 80);
    ellipse(bfx, bfy, 14, 38);
    ellipse(bfx, bfy - 22, 16, 16);
    stroke(40, 30, 50);
    strokeWeight(2);
    line(bfx - 6, bfy - 26, bfx - 14, bfy - 36);
    line(bfx + 6, bfy - 26, bfx + 14, bfy - 36);
    noStroke();
    fill(40, 30, 50);
    ellipse(bfx - 14, bfy - 36, 4, 4);
    ellipse(bfx + 14, bfy - 36, 4, 4);
    fill(100, 170, 255);
    ellipse(bfx - 24, bfy - 6, 46, 36);
    ellipse(bfx + 24, bfy - 6, 46, 36);
    fill(80, 150, 240);
    ellipse(bfx - 26, bfy + 18, 52, 40);
    ellipse(bfx + 26, bfy + 18, 52, 40);
    fill(255, 220, 90);
    ellipse(bfx - 30, bfy - 6, 10, 8);
    ellipse(bfx + 30, bfy - 6, 10, 8);
    fill(255, 120, 160);
    ellipse(bfx - 30, bfy + 18, 12, 10);
    ellipse(bfx + 30, bfy + 18, 12, 10);
  }


  let cx = width / 2;
  let cy = height / 2;
  
  
//얼굴 및 머리
  noStroke();
  fill(230, 180, 150);
  rect(cx - 100, cy - 100, 200, 300, 50);
  fill(255, 220, 185);
  ellipse(cx, cy - 20, 200, 235);
  fill(230, 180, 150);
  arc(cx, cy - 40, 200, 200, 180, 360);
  
  fill(230, 180, 150);
  ellipse(cx, cy + 20, 14, 10);
  
  fill(255, 150, 170, 180);
  ellipse(cx - 60, cy + 28, 32, 20);
  ellipse(cx + 60, cy + 28, 32, 20);

  noFill();
  stroke(110, 60, 25);
  strokeWeight(4);
  arc(cx - 45, cy - 45, 58, 28, 190, 360);
  arc(cx + 45, cy - 45, 58, 28, 180, 350);
  noStroke();
  fill(0);
  ellipse(cx - 45, cy - 7, 50, 50);
  ellipse(cx + 45, cy - 7, 50, 50);

  noFill();
  stroke(0);
  strokeWeight(2);
  arc(cx - 45, cy - 16, 50, 36, 180, 360);
  arc(cx + 45, cy - 16, 50, 36, 180, 360);
  noStroke();
  

  
 //l키 누르면 바뀌도록
  if (showHeart) {
    let size = 14;
    fill(255, 100, 150);
    ellipse(cx - 32 - size * 0.3, cy - 18, size, size);
    ellipse(cx - 32 + size * 0.3, cy - 18, size, size);
    triangle(cx - 32 - size * 0.65, cy - 18 + size * 0.1,
             cx - 32 + size * 0.65, cy - 18 + size * 0.1,
             cx - 32, cy - 18 + size * 0.95);
    ellipse(cx + 55 - size * 0.3, cy - 18, size, size);
    ellipse(cx + 55 + size * 0.3, cy - 18, size, size);
    triangle(cx + 55 - size * 0.65, cy - 18 + size * 0.1,
             cx + 55 + size * 0.65, cy - 18 + size * 0.1,
             cx + 55, cy - 18 + size * 0.95);
    mouthOpen = 8;
  } else {
    fill(255);
    ellipse(cx - 32, cy - 18, 15, 15);
    ellipse(cx + 55, cy - 18, 15, 15);
    mouthOpen = 0;
  }
 
  // 입
  fill(180, 60, 100);
  arc(cx, cy + 46, 46 + mouthOpen, 28 + mouthOpen / 2, -15, 195);

  // 셔츠
  noStroke();
  fill(shirtR, shirtG, shirtB);
  rect(cx - 95, cy + 120, 190, 120, 25);
  fill(255, 220, 185);
  arc(cx, cy + 120, 120, 85, 0, 180);
  rect(cx - 25, cy + 85, 50, 75, 8);
  noFill();
  stroke(shirtRR, shirtGG, shirtBB);
  strokeWeight(3);
  arc(cx, cy + 120, 120, 85, 0, 180);
  noStroke();
  
  //목걸이
  noFill();
  stroke(60, 40, 20);
  strokeWeight(1);
  arc(cx, cy+120, 55, 28, 0, 180 );
  fill(225)
  ellipse(cx, cy+135, 5, 5);

  
}

// 키입력 시
function keyPressed() {
  if (key === 'l' || key === 'L') {
    showHeart = !showHeart;
  }
  if (key === 'k' || key === 'K') {
    if(red(bgColor) === 250) {
      bgColor = color(180, 220, 255);
    } else {
      bgColor = color(250, 245, 240);
    }
  }
  if (key === 'j' || key === 'J') {
    shirtR = random(255);
    shirtG = random(255);
    shirtB = random(255);    
    shirtRR = random(255);
    shirtGG = random(255);
    shirtBB = random(255);
  }
  
  if (key === 'i') {
    saveGif('mySketch', 10);
    }
}
// 마우스 이동 시 나비
function mouseMoved() {
  showButterfly = true;
  bfx = mouseX;
  bfy = mouseY;
}



