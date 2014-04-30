// My Scripts
$(document).foundation();

// Animate.css Stuff
$('h3').click(function(){
	// console.log('Click Me')
	$('img').addClass('animated rubberBand');
});

// Transit.js Stuff
$('img').click(function(){
	$('p').transition({ perspective: '100px',
  	rotateX: '180deg'});
});