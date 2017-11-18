

$('h2').on('mouseover', function(){
  $(this).addClass('highlighted');
  console.log(this);
})

$('h2').on('mouseleave', function(){
  $(this).removeClass('highlighted');
})

$(document).keypress(function(event){
  var key = event.key;
  $('#hidden-blurb').text("You Pressed " + key).show();
})
