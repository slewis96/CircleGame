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

function dotClick(){
  clearInterval(timer);
  var maxwidth = $('.background').width()-200;
  var maxheight = $('.background').height()-200;
  $('#circle').css("left", (Math.floor(Math.random() * maxwidth)));
  $('#circle').css("top", (Math.floor(Math.random() * maxheight)));
  $('#circle').css("width", difficulty.size);
  $('#circle').css("height", difficulty.size);
  clicks++;
  setDifficulty();
  setScore(difficulty.scrMult);
  timer = setInterval(gameOver, difficulty.time);
}
function setDifficulty(){
    difficulty.size = 100-(clicks/2);
    difficulty.time = 2000-(clicks*12);
    difficulty.scrMult = Math.floor(clicks/2);
}
function setScore(x){
  score += x;
  $('#score').html("Score: " + score);
}
function gameOver(){
  alert("Game Over!");
  location.reload();
}
