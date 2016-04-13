$(document).ready(function() {
	
	$("#random").click(function(){
		window.open("http://en.wikipedia.org/wiki/Special:Random");
	})
    
	$("#search").click(function(){
	criteria = $("#criteria").val();	$.getJSON("http://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=15&search="+ criteria + "&prop=revisions&rvprop=content&format=json&callback=?", function(json){
			results = ""
			for (i = 0; i < 15; i++){
              results += "<div class='article'>"  
              results += "<h2>" + "<a href='" +JSON.stringify(json[3][i]) + "'>" + JSON.stringify(json[1][i]) + "</a>" +"</h2>"
              results += JSON.stringify(json[2][i])
              results +=  "</div>"
			}
			$("#result").html(results)
		})

	})
})