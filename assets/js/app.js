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
			var name = restaurantes[i].name;
			$("#img"+i).css("background-image", "url("+name+")");
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
			var food = restaurantes[i].food;
			$("#img"+i).css("background-image", "url("+food+")");
			$("#img"+i).css("height", "100px");
			console.log(food);
		}
	});

	$("#location").click(function(){
		$("#hidden").css("display", "none");
		for (var i = 0; i < restaurantes.length; i++) {
			var loc = restaurantes[i].location;
			$("#img"+i).css("background-image", "url("+loc+")");
			$("#img"+i).css("height", "100px");
			console.log(loc);
		}
	});

