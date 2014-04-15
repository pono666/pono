var _dataJSON;
var _dataBlocks = [];
var _dataBlockDisplays = [];
var _msnry; 

$(window).load(function() {
	//alert("Loaded");
	$.getJSON("data/data.json", function(json, textStatus) {
			
			_dataJSON = json;
			//console.log(_dataJSON.work);
			//$.each(_dataJSON, function (i, fb) {
		    //    console.log(i + fb);
		   // });
			 parseJSON();
			 createDataBlockDisplays();
			 setupMasonry();



	}).fail(function(jqXHR, status, error){
    if(status == 'parseerror'){
      console.log("parseError");
    } else {
      console.log("other");
    }

   
})

	
});

function parseJSON(){
	$.each(_dataJSON, function(index, val) {
		var dataTypedArray = val;
		for (var i = 0; i < dataTypedArray.length; i++) {
			var obj = dataTypedArray[i];

			var newDataBlock = new dataBlock(index, obj.title, obj.location, obj.dates, obj.image, obj.description);
			console.log(newDataBlock.dates)
			_dataBlocks.push(newDataBlock);
		};
	});
}

function createDataBlockDisplays(){
	for (var i = 0; i < _dataBlocks.length; i++) {
		var dataBlockDisplay = createDataBlockDisplay(_dataBlocks[i]);
		_dataBlockDisplays.push(dataBlockDisplay);
		$("#Content").append(dataBlockDisplay);
	};


}

//object
function dataBlock($type, $title, $location, $dates, $imageURL, $description){
	this.type = $type;
	this.title = $title;
	this.location = $location;
	this.dates = $dates;
	this.imageURL = $imageURL;
	this.description = $description;
}

function createDataBlockDisplay($dataBlock){
	var display = $("<div></div>").attr({
		class: 'dataBlockDisplay gigante ' + $dataBlock.type
	});
	var title = $("<span class='displayBlock'>"+ $dataBlock.title +" | <span class='bold'>" + $dataBlock.location + "</span></span>");
	var discription = $("<span  class='displayBlock'>"+ $dataBlock.description +"</span>");

	var dates = $("<span  class='displayBlock'></span>");
	$.each($dataBlock.dates, function(index, val) {
		dates.append("from: " + val.from + ", to: " + val.to + "<br />");

		 /* iterate through array or object */
	});
	

	var image = $("<img></img>").attr({
		width: '200px',
		height: '200px',
		src: $dataBlock.imageURL,		
	});
	var imageDiv = $("<div></div>").attr({
		class: 'dataBlockDisplayImage'
	});
	var textDiv = $("<div></div>").attr({
		class: 'dataBlockDisplayText'
	});

	imageDiv.append(image);

	textDiv.append(title);
	textDiv.append(dates);
	textDiv.append(location);
	textDiv.append(dates);
	textDiv.append(discription);

	display.append(imageDiv);
	display.append(textDiv);

	return display;

}



//-----------------------------------------------Masonary Stuff

//var msnry = new Masonary( '#Content' , {}) // or with JQuery Plugin
//var $container = $('#Content');
//$container.masonary({columnWidth:200, itemSelector: '.dataBlockDisplay'});


function setupMasonry(){
	//_msnry = new Masonry( '#Content' , {columnWidth:500, itemSelector: '.dataBlockDisplay'})

	var container = document.querySelector('#Content');
	
	// initialize Masonry after all images have loaded
	imagesLoaded( container, function() {
	  _msnry = new Masonry( container , {columnWidth:100, itemSelector: '.dataBlockDisplay'} );
});

	for (var i = 0; i < _dataBlockDisplays.length; i++) {
		var datablock = _dataBlockDisplays[i];
		datablock.click(function(event) {
			console.log(this);
			$(this).toggleClass('gigante',1000);
			_msnry.layout();


	});
	};

}


			  


