$(document).ready( function () {
	for ( var i = 1; i <= 100; i++ ) {
		if ( i % 15 === 0 ) {
			$( '.fizzbuzz' ).append( 'fizzbuzz<br>' );
		}
		else if ( i % 5 === 0 ) {
			$( '.fizzbuzz' ).append( 'buzz<br>' );
		}
		else if ( i % 3 === 0 ) {
			$( '.fizzbuzz' ).append( 'fizz<br>' );
		}
		else {
			$( '.fizzbuzz' ).append( i + '<br>' );
		}
	}
});