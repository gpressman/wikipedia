$(document).ready(function() {
	
	$("#random").click(function(){
		window.open("http://en.wikipedia.org/wiki/Special:Random");
	})
    
	$("#search").click(function(){
	criteria = $("#criteria").val();	$.getJSON("http://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=15&search="+ criteria + "&prop=revisions&rvprop=content&format=json&callback=?", function(json){
			result = JSON.stringify(json);
			$("#result").html(result)
		})

	})
})