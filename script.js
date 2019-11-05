/** Canvas playground for Codebar's tutorial Drawing in Canvas **/

function draw() {
 var canvas = document.getElementById('canvas-id');
 var context = canvas.getContext("2d");

 context.fillStyle = 'yellow';
 context.strokeStyle = "#FF0000";
 context.lineWidth = 3;

 context.strokeRect(300, 100, 50, 100);
 context.fillRect(100, 100, 50, 100);

 context.moveTo(0,300);
 context.lineTo(400,500);
 context.stroke();

 context.beginPath();

  context.lineWidth = 1;
  context.strokeStyle = 'purple';

  context.moveTo(0,0);
  context.lineTo(0,200);
  context.lineTo(200,200);
  context.lineTo(200,0);
  context.lineTo(0,0);

  context.stroke();

  context.beginPath();
  context.arc(200, 100, 50, 0, Math.PI*2, true);
  context.closePath();
  context.lineWidth = 4;
  context.stroke();

  context.beginPath();
  context.arc(100, 200, 50, 0, Math.PI*2, true);
  context.closePath();
  context.lineWidth = 8;
  context.stroke();
  context.fillStyle = 'blue';
  context.fill()

 //draw items
}

function reset() {
  var canvas = document.getElementById('canvas-id');
  var context = canvas.getContext("2d");

  context.clearRect(0, 0, canvas.width, canvas.height);

  // reset canvas
}
