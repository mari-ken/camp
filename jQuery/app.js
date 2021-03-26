$(function(){
  $('.box1').slideDown(2000, function (){
    $('.box1').css({
      'height': '100px',
      'width': '200px',
      'background-color': '#0000FF'
    }).slideUp(1000);
  });
});