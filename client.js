$(document).ready(function(){
  var counter = 0;
  $('button').on('click', function(){
    counter += 1;
    $('.container').append('<div> </div>');
    var $el = $(".container").children().last();
    $el.append('<p>You have clicked the button: ' + counter + ' times. </p>');
  });



});
