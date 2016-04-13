$(document).ready(function() {
	
	$("#random").click(function(){
		window.open("http://en.wikipedia.org/wiki/Special:Random");
	})
    
	$("#search").click(function(){
	criteria = $("#criteria").val();	$.getJSON("http://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=15&search="+ criteria + "&prop=revisions&rvprop=content&format=json&callback=?", function(json){
			results = ""
			for (i = 0; i < 15; i++){
              results += "<div>" + JSON.stringify(json[1][i]);
              results += JSON.stringify(json[2][i]) + "</div>"
			}
			$("#result").html(results)
		})

	})
})