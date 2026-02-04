// Failure screen

// ------------------------------------------------------------
// // Main draw function for failure screen
// ------------------------------
// drawFose() is called from main.js
// only when currentScreen === "failure"
function drawFailure() {
  // Red-tinted background to communicate failure
  background(255, 210, 210);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main failure message
  textSize(40);
  text("Your first date was unsuccessful!", width / 2, 300);

  // Explanation text
  textSize(20);
  text("Your date is unimpressed and ghosts you.", width / 2, 360);

  // Instruction text
  textSize(18);
  text("Click or press R to return to Start.", width / 2, 500);
}

// ------------------------------
// Mouse input for failure screen
// ------------------------------
// Any mouse click returns the player to the start screen
// (no buttons needed for this simple end state)
function failureMousePressed() {
  currentScreen = "start";
}

// ------------------------------
// Keyboard input for failure screen
// ------------------------------
// R is commonly used for “restart” in games
function failureKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
