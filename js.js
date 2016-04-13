$(document).ready(function() {
	  
	$("#search").click(function(){
	criteria = $("#criteria").val();	$.getJSON("http://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=15&search="+ criteria + "&prop=revisions&rvprop=content&format=json&callback=?", function(json){
			results = ""
			for (i = 0; i < 15; i++){
              link = JSON.stringify(json[3][i]).replace(/"/g, "")
              title = JSON.stringify(json[1][i]).replace(/"/g, "")
              results += "<div class='article'>"  
              results += "<h2 text-align:center>" + "<a target='blank' href='" +link + "'>" + title + "</a>" +"</h2>"
              results += JSON.stringify(json[2][i])
              results +=  "</div>"
			}
			$("#result").html(results)
		})

	})
})