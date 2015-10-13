/**
 * Created by EIBEL on 09.09.2015.
 */
function recalculate(){
  // Get values
  var first = $('#first').val();
  var second = $('#second').val();

  // Parse to number
  var firstInt = parseInt(first);
  var secondInt = parseInt(second);

  // Calculate result
  var addResult = firstInt + secondInt;

  // Set result text
  $('#result').text(addResult);
}

$('#first').bind('keyup', function(e){
  recalculate();
});

$('#second').bind('keyup', function(e){
  recalculate();
});

recalculate();