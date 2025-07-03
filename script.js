
const canvas = document.getElementById('fieldCanvas');
const ctx = canvas.getContext('2d');

// Simulate a red tracer line
ctx.beginPath();
ctx.moveTo(100, 400);
ctx.lineTo(400, 200);
ctx.strokeStyle = 'red';
ctx.lineWidth = 3;
ctx.stroke();

// Update metrics as an example
document.getElementById('velo').textContent = '92';
document.getElementById('angle').textContent = '24';
