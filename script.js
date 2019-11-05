/** Canvas playground for Codebar's tutorial Drawing in Canvas **/

function draw() {
 var canvas = document.getElementById('canvas-id');
 var context = canvas.getContext("2d");

 context.fillStyle = 'yellow';
 context.strokeStyle = "#FF0000";
 context.lineWidth = 3;

 context.strokeRect(300, 100, 50, 100);

 context.fillRect(100, 100, 50, 100);

 //draw items
}

function reset() {
  var canvas = document.getElementById('canvas-id');
  var context = canvas.getContext("2d");

  context.clearRect(0, 0, canvas.width, canvas.height);

  // reset canvas
}
