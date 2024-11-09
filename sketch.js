let ballx = 300;
let bally = 300;
let ballSize = 40;
let score = 0;
let highScore = 0;
let gameState = "L1"; // Starting game state at Level 1

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(220);

  // Display the current score and high score at the top
  fill(0);
  text("Score: " + score, width / 2, 40);
  text("High Score: " + highScore, width / 2, 70);

  // Manage game state to determine the current level
  if (gameState === "L1") {
    levelOne();
  } 
  else if (gameState === "L2") {
    levelTwo();
  } 
  else if (gameState === "L3") {
    levelThree();
  }
}

// Level 1: Basic gameplay, advance to Level 2 at score > 5
function levelOne() {
  fill(0);
  text("Level 1", width / 2, height - 20);
  
  let distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2 && mouseIsPressed) {
    ballx = random(ballSize, width - ballSize);
    bally = random(ballSize, height - ballSize);
    score += 1;
  }
  
  if (score > 5) {
    gameState = "L2"; // Move to Level 2
  }

  // Draw ball and line to cursor
  fill(255, 0, 0);
  ellipse(ballx, bally, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
}

// Level 2: Background color change, advance to Level 3 at score > 10
function levelTwo() {
  background(200, 100, 0);
  fill(0);
  text("Level 2", width / 2, height - 20);
  
  let distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2 && mouseIsPressed) {
    ballx = random(ballSize, width - ballSize);
    bally = random(ballSize, height - ballSize);
    score += 1;
  }
  
  if (score > 10) {
    gameState = "L3"; // Move to Level 3
  }

  fill(255, 0, 0);
  ellipse(ballx, bally, ballSize, ballSize);
}

// Level 3: Background color change, ball size decreases, level completion at score > 15
function levelThree() {
  background(200, 100, 200);
  fill(0);
  text("Level 3", width / 2, height - 20);
  
  let distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2 && mouseIsPressed) {
    ballx = random(ballSize, width - ballSize);
    bally = random(ballSize, height - ballSize);
    ballSize = max(10, ballSize - 1); // Decrease ball size, but don't go below 10
    score += 1;
  }
  
  if (score > 15) {
    text("Congratulations! You completed Level 3!", width / 2, height / 2);
    highScore = max(highScore, score); // Update high score if current score is higher
    noLoop(); // Stop the game
  }

  fill(255, 0, 0);
  ellipse(ballx, bally, ballSize, ballSize);
}

// Restart the game if "r" is pressed
function keyPressed() {
  if (key === 'r' || key === 'R') {
    score = 0;
    ballSize = 40;
    gameState = "L1";
    loop(); // Restart the game
  }
}
