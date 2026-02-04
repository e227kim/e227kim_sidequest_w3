// Success screen

// ------------------------------------------------------------
// Main draw function for success screen
// ------------------------------------------------------------
// drawSuccess() is called from main.js
// only when currentScreen === "success"
function drawSuccess() {
  // Green-tinted background to communicate success
  background(200, 255, 200);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("Your first date was a success!", width / 2, 300);

  // Explanation text
  textSize(20);
  text("You and your date schedule a second meetup.", width / 2, 360);

  // Instruction text
  textSize(18);
  text("Click or press R to return to Start.", width / 2, 500);
}

// ------------------------------------------------------------
// Mouse input for success screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function successMousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for success screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function successKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
