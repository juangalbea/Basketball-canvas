const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(250, 150, 36, 0, Math.PI * 2);
ctx.strokeStyle = 'white';
ctx.fillStyle = '#CC7722';
ctx.fill();
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 102);
ctx.lineTo(110, 102);
ctx.lineTo(110, 199);
ctx.lineTo(0, 199);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(500, 102);
ctx.lineTo(390, 102);
ctx.lineTo(390, 199);
ctx.lineTo(500, 199);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 115);
ctx.lineTo(110, 114);
ctx.lineTo(110, 186);
ctx.lineTo(0, 186);
ctx.fillStyle = '#CC7722';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(500, 115);
ctx.lineTo(390, 114);
ctx.lineTo(390, 186);
ctx.lineTo(500, 186);
ctx.fillStyle = '#CC7722';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 0);
ctx.lineTo(250, 300);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 30);
ctx.lineTo(40, 30);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 270);
ctx.lineTo(40, 270);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(500, 30);
ctx.lineTo(460, 30);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(500, 270);
ctx.lineTo(460, 270);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(25, 130);
ctx.lineTo(25, 170);
ctx.lineWidth = 3;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(475, 130);
ctx.lineTo(475, 170);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(25, 150);
ctx.lineTo(34, 150);
ctx.stroke();

ctx.beginPath();
ctx.arc(34, 150, 4, 0, Math.PI * 2);
ctx.fillStyle = 'white';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(475, 150);
ctx.lineTo(465, 150);
ctx.stroke();

ctx.beginPath();
ctx.arc(466, 150, 4, 0, Math.PI * 2);
ctx.fillStyle = 'white';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(25, 150, 121, -Math.atan(120 / 15), Math.atan(120 / 15));
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.arc(475, 150, 121, Math.PI - Math.atan(120 / 15), Math.PI + Math.atan(120 / 15));
ctx.stroke();

ctx.beginPath();
ctx.arc(110, 150, 36, -Math.PI/2, Math.PI/2);
ctx.stroke();

ctx.beginPath();
ctx.arc(110, 150, 36, Math.PI/2, -Math.PI/2);
ctx.setLineDash([4, 2]);
ctx.stroke();

ctx.beginPath();
ctx.arc(390, 150, 36, -Math.PI/2, Math.PI/2);
ctx.stroke();

ctx.beginPath();
ctx.arc(390, 150, 36, Math.PI/2, -Math.PI/2);
ctx.setLineDash([]);
ctx.stroke();

ctx.closePath();