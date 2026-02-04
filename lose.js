// Scene 2 - Option 2

// Buttons for two story decision options
const gameBtn5 = {
  x: 250, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Talking about yourself, listing all your acheivements and strengths", // text shown on the button
};

const gameBtn6 = {
  x: 550, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Asking them about their hobbies and interests", // text shown on the button
};

function drawLose() {
  // Set background colour for the game screen
  background(198, 187, 237);

  // ---- Game title, scene title, and story text ----
  fill(0); // black text
  textSize(25);
  textAlign(CENTER, CENTER);
  text("First Date", width / 2, 100);

  textSize(32);
  textAlign(CENTER, CENTER);
  text("Scene 2: Dinner", width / 2, 160);

  textSize(18);
  text(
    "Your joke doesn't land. Your date becomes becomes quiet and awkward.",
    width / 2,
    210,
  );
  text(
    "After ordering and receiving your food, you lead the conversation by...",
    width / 2,
    250,
  );

  // ---- Draw the button ----
  // We pass the button object to a helper function
  drawGameButton(gameBtn5);
  drawGameButton(gameBtn6);
  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(gameBtn5) ? HAND : ARROW);
  cursor(isHover(gameBtn6) ? HAND : ARROW);
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
// only when currentScreen === "lose"
function loseMousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(gameBtn5)) {
    currentScreen = "failure"; // failure screen if first button is chosen
  }
  // Check if the second button was clicked
  if (isHover(gameBtn6)) {
    currentScreen = "success"; // success screen if first button is chosen
  }
}
