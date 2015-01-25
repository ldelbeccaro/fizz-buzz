$(document).ready( function() {

	function max() {
		var isNum = false;
		var maxNum;
		while (isNum == false) {
			maxNum = +prompt( 'Enter a whole number up to which to count:');
			if ( maxNum != '' && typeof maxNum == 'number' && maxNum % 1 == 0) { isNum = true; }
		}
		console.log('Count to: ' + maxNum);
		return maxNum;
	}

	function printLine(m) {
		$( '.fizzbuzz' ).append( m + '<br>' );
	}

	function fb(x) {
		for ( var i = 1; i <= x; i++ ) {
			if ( i % 15 == 0 ) { printLine('fizzbuzz'); }
			else if ( i % 5 == 0 ) { printLine('buzz'); }
			else if ( i % 3 == 0 ) { printLine('fizz'); }
			else { printLine(i); }
		}
	}

	fb(max());

});