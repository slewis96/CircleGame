//INITIALISE
$(document).ready(function(){
  //game
  $('#circle').click(function(){
    event.stopPropagation();
    dotClick();
  })
  $('.background').click(function(){
    event.stopPropagation();
    gameOver();
  })

  //menu
    //onclicks
  $('#settings').click(function(){
    openMenu();
  });
  $('#settingsModal').click(function(){
    $('#settingsModal').css('display', 'none');
  });
  $('.innerModal').click(function(){
    event.stopPropagation();
  });
  $.each($('.diffBtns'), function(){
    $(this).click(function(){
      $('.diffBtns').removeClass('active');
      $(this).addClass('active');
      setSliders($(this).attr('id'));
      setTimeout(setDifficulty(sizeSlider.value, timerSlider.value), 2);
    });
  });
  //set slider val
  var sizeSlider = document.getElementById('sizeSlider');
  var timerSlider = document.getElementById('timerSlider');
  $('#sizeValue').html(sizeSlider.value);
  $('#timerValue').html(timerSlider.value);
  sizeSlider.oninput = function() {
    $('#sizeValue').html(sizeSlider.value);
  }
  timerSlider.oninput = function() {
    $('#timerValue').html(timerSlider.value);
  }
  $('#confirm').click(function(){
    setDifficulty(sizeSlider.value, timerSlider.value);
  });

});
//VARIABLES
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

//FUNCTIONS
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
  increaseDifficulty();
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
function increaseDifficulty(){
    if(diffToggle){
      difficulty.size = difficulty.size-0.5;
      difficulty.time = difficulty.time-15;
    }
    difficulty.scrMult = Math.floor(clicks/2);
}
function setDifficulty(size, time){
  difficulty.size = size;
  difficulty.time = time;
}
function setScore(x){
  score += x;
  $('#score').html("Score: " + score +",  Clicks: " + clicks);
}
function gameOver(){
  alert("Game Over!");
  location.reload();
}
function openMenu(){
  $('#settingsModal').css('display', 'block');
}
function setSliders(diff){
  var sizeSlider = document.getElementById('sizeSlider');
  var timerSlider = document.getElementById('timerSlider');
  switch(diff){
    case "easy":
      sizeSlider.value = 150;
      timerSlider.value = 3000;
      $('#sizeValue').html(sizeSlider.value);
      $('#timerValue').html(timerSlider.value);
      break;
    case "medium":
      sizeSlider.value = 100;
      timerSlider.value = 2000;
      $('#sizeValue').html(sizeSlider.value);
      $('#timerValue').html(timerSlider.value);
      break;
    case "hard":
      sizeSlider.value = 50;
      timerSlider.value = 1000;
      $('#sizeValue').html(sizeSlider.value);
      $('#timerValue').html(timerSlider.value);
      break;
  }
}
