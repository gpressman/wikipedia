$(document).ready(function() {
	criteria = $("criteia").text()

	$("#random").click(function(){
		window.open("http://en.wikipedia.org/wiki/Special:Random");
	})
    
	$("#search").click(function(){
		$.getJSON("https://en.wikipedia.org/w/api.php?action=query&titles="+ criteria + "Main%20Page&prop=revisions&rvprop=content&format=json&callback=?", function(json){
			result = JSON.stringify(json);
			$("#result").html(result)
		})

	})
})