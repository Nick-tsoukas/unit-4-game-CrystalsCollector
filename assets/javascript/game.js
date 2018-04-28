$(function() {
  var num = $('#randomNum');
  num[0].innerHTML = `<h2 class="">${getRandomNumberUpToo120()}</h1>`;
  var allImages = Array.from($('img'));

  function fourCyrystals(randomNumber){
    allImages.forEach(function(image,index,array) {
      console.log(image)
    })
  }

  fourCyrystals(getRandomNumberUpToo120())

  function getRandomNumberUpToo120() {
    var num = Math.floor((Math.random() * 120)) + 1;
    return num;
  };

  function randomNumUpToo12() {
    var crystalNumber = Math.floor((Math.random() * 12)) + 1;
    return crystalNumber;
  }

  function addDataType(array,index,array) {
    array.forEach(function() {

    })
  }
});
