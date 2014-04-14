
var dataJSON;

$(window).load(function() {
	//alert("Loaded");
	$.getJSON("data/data.json", function(json, textStatus) {
			alert(json);
			dataJSON = json;
	})

	
});
