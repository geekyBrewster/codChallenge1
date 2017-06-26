$(document).ready(function(){
  var counter = 0;
  $('button').on('click', function(){
    counter += 1;
    $('.container').append('<div> </div>');
    var $el = $(".container").children().last();
    $el.append('<p>You have clicked the button: ' + counter + ' times. </p>');
    $el.append('<button id="swap">Swap</button>');
    $el.append('<button id="delete">Delete</button>');
  });

  $('.container').on('click','#swap', function(){
    $(this).parent().css({'background-color': 'yellow', 'color': 'black'});
    // console.log($(this).parent());
  });



});
