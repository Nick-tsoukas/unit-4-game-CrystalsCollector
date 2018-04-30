var score = document.getElementById('score');
var numberOfWins = document.getElementById('numberOfWins');
var numberOfLoss = document.getElementById('numberOfLoss');
var myScore = 0;
var target;
var win = 0;
var loss = 0;


function addTooScore(num) {
  score.innerHTML = num;
  var ran = document.getElementById('randomNum');
  if(parseInt(ran.innerText) === myScore){
    win++;
    numberOfWins.innerText = win;
    myScore = 0;
    var num = $('#randomNum');
    num[0].innerHTML = `<h1 class="numberFont">${randomNum(50)}</h1>`;
    var random = parseInt(num[0].innerText);
    score.innerHTML = myScore;

  } else  if(myScore > parseInt(ran.innerText)){
    loss++;
    numberOfLoss.innerHTML = loss;
    console.log(loss);
    myScore = 0;
    score.innerHTML = myScore;
    var num = $('#randomNum');
    num[0].innerHTML = `<h1 class="">${randomNum(50)}</h1>`;
    var random = parseInt(num[0].innerText);
  }
}


function addClickEvent(array, someFunction) {
  array.forEach(function(item) {
    item.addEventListener('click', function() {
      myScore += parseInt($(this).attr('data-number'));
      // add and remove class to scale crystals ====================
      if($(this).attr('class').length === 3){
        $(this).addClass('scaleSmall');
      } else {
         $(this).removeClass("scaleSmall");
      }

      // End of add and remove class to scale crystals ====================

      someFunction(myScore);
    })
  })
}

// add number to gems
function addNumberToGem() {
  $.each($('.gem'), function(index, item) {
    $(item).attr('data-number', randomNum(12));
  });
}

// Just gens a random number
function randomNum(num) {
  var randomNumber = Math.floor((Math.random() * (`${num}`)) + 1);
  return randomNumber;
}

// on document ready
$(function() {

    var num = $('#randomNum');
    num[0].innerHTML = `<h1 class="numberFont">${randomNum(50)}</h1>`;
    var random = parseInt(num[0].innerText);
    var allImages = Array.from($('.gem'));

    addNumberToGem();
    addClickEvent(allImages,addTooScore);



});
