//fadeOut = setInterval(frame, 64)
$(document).ready(()=> {
	
	setTimeout(function() {
    $('.display').fadeOut(2000);
	}, 3000);
	setTimeout(function() {
    $('.all').fadeIn(3000);
	}, 5000);
});

	$("#rest").click(function(){
		$("#hidden").css("display", "none");
		for (var i = 0; i < restaurantes.length; i++) {
			var img = restaurantes[i].image;
			$("#img"+i).css("background-image", "url("+img+")");
			$("#img"+i).css("height", "100px");
			console.log(img);
		}
		
	});
