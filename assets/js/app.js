//fadeOut = setInterval(frame, 64)
$(document).ready(()=> {
	
	setTimeout(function() {
    $('.display').fadeOut(2000);
	}, 3000);
	setTimeout(function() {
    $('.all').fadeIn(3000);
	}, 5000);
});

