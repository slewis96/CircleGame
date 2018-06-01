var clicks = 0;
var score = 0;

function dotClick(){
  var maxwidth = $('#gameFrame').width()-50;
  var maxheight = $('#gameFrame').height()-50;
  var circle = document.getElementById("circle");
  circle.setAttribute("cx", (Math.floor((Math.random() * maxwidth) + 50)));
  circle.setAttribute("cy", (Math.floor((Math.random() * maxheight) + 50)));
  clicks++;
}
function gameOver(){
  alert("Game Over!")
  location.reload();
}
