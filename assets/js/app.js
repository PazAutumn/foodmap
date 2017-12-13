//fadeOut = setInterval(frame, 64)
	var display =$('.display').css("display");

$(document).ready(()=> {
	setTimeout(function() {
    $('.display').fadeOut(2000);
    $('food.html').FadeIn(2000);
}, 3000);

	if (display == "none"){
		console.log("funciona");
	}
});