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

 //draw items
}

function reset() {
  var canvas = document.getElementById('canvas-id');
  var context = canvas.getContext("2d");

  context.clearRect(0, 0, canvas.width, canvas.height);

  // reset canvas
}
