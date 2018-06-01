$(function(){

  var $carouselList = $('ul');
  var $firstItem = $carouselList.find('li:first');
  var $lastItem = $carouselList.find('li:last');

  setInterval(function() {
    $carouselList.animate({'marginLeft':-400}, 600);
  },3000);
});