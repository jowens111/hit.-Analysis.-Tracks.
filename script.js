
const canvas = document.getElementById("fieldCanvas");
const ctx = canvas.getContext("2d");

// Draw baseball field with bases and diamond
function drawDiamond() {
  // Grass and infield
  ctx.fillStyle = "#228B22"; // outfield grass
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath(); // infield dirt diamond
  ctx.moveTo(450, 250);
  ctx.lineTo(550, 350);
  ctx.lineTo(450, 450);
  ctx.lineTo(350, 350);
  ctx.closePath();
  ctx.fillStyle = "#D2B48C"; // dirt
  ctx.fill();

  // Bases
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(445, 245, 10, 10); // pitcher's mound
  ctx.fillRect(445, 445, 10, 10); // home
  ctx.fillRect(345, 345, 10, 10); // 3rd
  ctx.fillRect(545, 345, 10, 10); // 1st
  ctx.fillRect(445, 345, 10, 10); // 2nd

  // Fence
  ctx.beginPath();
  ctx.arc(450, 450, 300, Math.PI, 2 * Math.PI);
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 5;
  ctx.stroke();
}

// Simulated red tracer line
function drawTracer() {
  ctx.beginPath();
  ctx.moveTo(450, 450); // home plate
  ctx.lineTo(600, 250); // flight path
  ctx.strokeStyle = "red";
  ctx.lineWidth = 3;
  ctx.stroke();
}

drawDiamond();
drawTracer();
