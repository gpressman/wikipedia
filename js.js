$(document).ready(function() {
	

	$("#random").click(function(){
		window.open("http://en.wikipedia.org/wiki/Special:Random");
	})
    
	$("#search").click(function(){
		criteria = $("criteria").val()
		$.getJSON("https://en.wikipedia.org/w/api.php?action=query&titles="+ criteria + "&prop=revisions&rvprop=content&format=json&callback=?", function(json){
			result = JSON.stringify(json);
			$("#result").html(result)
		})

	})
})