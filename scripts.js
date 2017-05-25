$(document).ready(function() {

	$(".searchButton").on("click", function() {
		var inputValue = $("#searchInput").val();

		$.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + inputValue, function(json){
			//defining an empty html variable here
			var html = '';
			
			//running for loop to go though each 10 objects in json
			for(var i=0; i<10; i++) {
				html += '<li class="result">';
				html += '<h4 class="title">' + json.query.search[i].title + '</h4>';
				html += '<p class="content">' + json.query.search[i].snippet + '</p>';
				html += '</li>';	
			}
			$("#resultList").append(html); //this adds all the list results created in the for loop
		}); //getJSON ends here
	}) //onClick event ends here
}) //ready function ends here
