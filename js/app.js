$(document).ready(function(){
  $('#circle').click(function(){
    event.stopPropagation();
    dotClick();
  })
  $('.background').click(function(){
    event.stopPropagation();
    gameOver();
  })
});
var clicks = 0;
var score = 0;
var timer;
var difficulty = {
  size: 100,
  time: 2000,
  scrMult: 1
};
var diffToggle = true;
var fadeToggle = true;

function dotClick(){
  clearInterval(timer);
  var maxwidth = $('.background').width()-200;
  var maxheight = $('.background').height()-200;
  var newPosX = (Math.floor(Math.random() * maxwidth));
  var newPosY = (Math.floor(Math.random() * maxheight));
  $('#circle').css({
    transition : "opacity 0s",
    opacity    : '1',
    left       : newPosX,
    top        : newPosY,
    width      : difficulty.size,
    height     : difficulty.size,
  });
  fadeOut();
  clicks++;
  setDifficulty();
  setScore(difficulty.scrMult);
  timer = setInterval(gameOver, difficulty.time);
}
function fadeOut(){
  if(fadeToggle){
    var transtime = 'opacity '+(difficulty.time/600)+'s';
    $('#circle').css({
      transition : transtime,
      opacity    : 0
    });
  }
}
function setDifficulty(){
    if(diffToggle){
      difficulty.size = 100-(clicks/2);
      difficulty.time = 2000-(clicks*10);
      difficulty.scrMult = Math.floor(clicks/2);
    }
}
function setScore(x){
  score += x;
  $('#score').html("Score: " + score);
}
function gameOver(){
  alert("Game Over!");
  location.reload();
}
