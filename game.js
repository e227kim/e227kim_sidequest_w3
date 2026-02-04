// Scene 1

// Buttons for two story decision options
const gameBtn1 = {
  x: 250, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Apologize for making them wait and compliment how they look", // text shown on the button
};

const gameBtn2 = {
  x: 550, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Joke about how you're always late to things", // text shown on the button
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame() is called from main.js *only*
// when currentScreen === "game"
function drawGame() {
  // Set background colour for the game screen
  background(240, 230, 140);

  // ---- Game title, scene title, and story text ----
  fill(0); // black text
  textSize(25);
  textAlign(CENTER, CENTER);
  text("First Date", width / 2, 100);

  textSize(32);
  textAlign(CENTER, CENTER);
  text("Scene 1: Arrival", width / 2, 160);

  textSize(18);
  text(
    "You arrive at the resturaunt to find your date already seated at a table",
    width / 2,
    210,
  );
  text("As you take your seat and get settled you..", width / 2, 250);

  // ---- Draw the button ----
  // We pass the button object to a helper function
  drawGameButton(gameBtn1);
  drawGameButton(gameBtn2);
  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(gameBtn1) ? HAND : ARROW);
  cursor(isHover(gameBtn2) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGameButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Change button color when hovered
  fill(
    hover
      ? color(180, 220, 255, 220) // lighter blue on hover
      : color(200, 220, 255, 190), // normal state
  );

  // Draw the button rectangle
  rect(x, y, w, h, 14); // rounded corners

  // Draw the button text
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(18);

  const padding = 10; // padding from button edges
  const maxTextWidth = w - padding * 2;

  // Use p5.js text wrapping
  text(label, x, y, maxTextWidth, h - padding * 2);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "game"
function gameMousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(gameBtn1)) {
    currentScreen = "win"; // next scene if second button is chosen
  }
  // Check if the second button was clicked
  if (isHover(gameBtn2)) {
    currentScreen = "lose"; // next scene if second button is chosen
  }
}
