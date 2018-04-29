var score = document.getElementById('score');
var myScore = 0;
function addTooScore(num) {
  score.innerHTML = num
}

function addClickEvent(array, someFunction) {
  array.forEach(function(item) {
    item.addEventListener('click', function() {
       myScore += parseInt($(this).attr('data-number'));
      console.log(myScore);
      someFunction(myScore);
    })
  })
}

// add number to gems
function addNumberToGem() {
  $.each($('.gem'), function(index, item) {
    $(item).attr('data-number', randomNum(12));
    console.log(item)
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
  num[0].innerHTML = `<h1 class="">${randomNum(50)}</h1>`;

  var allImages = Array.from($('.gem'));

  addNumberToGem();
  addClickEvent(allImages,addTooScore)

});
