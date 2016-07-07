$(document).ready(function() {

	$('button').click(function() {
		var chosenNumber = $('input').val();
		fizzbuzz(chosenNumber);
	});

	function fizzbuzz(chosenNumber) {

		$('ul').empty();

	for (var i = 1; i <= chosenNumber; i++) {

		if (i % 3 === 0 && i % 5 === 0) {
			$('ul').append('<li>fizzbuzz</li>');
	
		}else if (i % 3 === 0) {
			$('ul').append('<li>fizz</li>');
	
		}else if (i % 5 === 0) {
			$('ul').append('<li>buzz</li>');
	
		}else {
			$('ul').append('<li>' + i + '</li>');
		}
	}

	}

});
