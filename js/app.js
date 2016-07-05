fizzbuzz(100);

var ask = prompt("Supply a number!");

function fizzbuzz(numberOfElements) {

for (var i = 1; i <= numberOfElements; i = i + 1) {

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

function count(ask) {
	return ask;
}

$(document).write (ask(1));

function supply () {
	count(ask);
	fizzbuzz(numberOfElements);
}

count(ask);

