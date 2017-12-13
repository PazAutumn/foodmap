//fadeOut = setInterval(frame, 64)
$(document).ready(()=> {
	
	setTimeout(function() {
    $('.display').fadeOut(2000);
	}, 3000);
	setTimeout(function() {
    $('.all').fadeIn(3000);
	}, 5000);
	$('.modal').modal();
});

	$("#rest").click(function(){
		$("#hidden").css("display", "none");
		for (var i = 0; i < restaurantes.length; i++) {
			var img = restaurantes[i].image;
			$("#img"+i).css("background-image", "url("+img+")");
			$("#img"+i).css("height", "100px");
			$(".img.one").mouseover(function(){
				$(".img.one").css("opacity", "0.34");
					$("#aji").show();
			});
			$(".img.two").mouseover(function(){
				$(".img.two").css("opacity", "0.34");
				$("#liguria").show();
			});
			$(".img.three").mouseover(function(){
				$(".img.three").css("opacity", "0.34");
				$("#margarita").show();
			});
		}
	});

	$("#food").click(function(){
		$("#hidden").css("display", "none");
		for (var i = 0; i < restaurantes.length; i++) {
			var dish = restaurantes[i].dish;
			$("#img"+i).css("background-image", "url("+dish+")");
			$("#img"+i).css("height", "100px");
			console.log(dish);
		}
	});

	$("#location").click(function(){
		$("#hidden").css("display", "none");
		for (var i = 0; i < restaurantes.length; i++) {
			var loc = restaurantes[i].location;
			$("#img"+i).css("background-image", "url("+dish+")");
			$("#img"+i).css("height", "100px");
			console.log(dish);
		}
	});

