var _dataJSON;
var _dataBlocks = [];
var _dataBlocksTyped = {};
var _dataBlockDisplays = [];
var _msnry; 
var currentPageSize;

$(window).load(function() {	
	if(!_dataJSON){
		$.getJSON("data/data.json", function(json, textStatus) {
				
				_dataJSON = json;
				 parseJSON();
				 createDataBlockTypedDisplays(_currentSelectedPage);
				 //setupMasonry();
				 //createMobileMenuToggle();



		}).fail(function(jqXHR, status, error){
	    if(status == 'parseerror'){
	      console.log("parseError");
	    } else {
	      console.log("other");
	    }})
	};
	addMoreButtonPress();
	addValidate();
   //	currentPageSize =  getCurrentPageSize();
   //testIfResizingNeeded();

	
});



function addValidate(){

	/*$('#submitBtn').click(function(event) {
		console.log("submit")
		$('#contactForm').validate();
	});

	$('#contactForm').submit(function(event) {
		console.log("submit2")
		$('#contactForm').validate();
	});

	jQuery.validator.setDefaults({
		debug: true,
		success: "valid"
	});*/
	$( "#contactForm" ).validate({
		rules: {
			
			formName:{
				required: true
			},
			formEmail: {
				required: true,
				email: true
			},
			formConfirmEmail:{
				required: true,
				equalTo : formEmail
			},
			formEnquiryText:{
				required:true
			}
		},
		messages:{
			formEmail:{
				required: 'Enter Something Dammit',
				email: 'Me needs a real email'
			}

		},
		
		highlight: function(element) {
	        var id_attr = "#" + $( element ).attr("id") + "1";
	      	//$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
	      	$(element).closest('div').removeClass('has-success').addClass('has-error');
	        $(id_attr).removeClass('glyphicon-ok').addClass('glyphicon-remove');        
	    },
	    unhighlight: function(element) {
	        var id_attr = "#" + $( element ).attr("id") + "1";
	       // $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
	       $(element).closest('div').removeClass('has-error').addClass('has-success');
	        $(id_attr).removeClass('glyphicon-remove').addClass('glyphicon-ok');    
	        $(element).popover('destroy');

	    },
		submitHandler: function (form) {
	            alert('is good');
	            return false;
	        }
		,
		//errorElement: 'span',
	    //errorClass: 'help-block',
	    errorPlacement: function(error, element) {
	    	
	    	if(currentPageSize != "xs"){
	    		console.log("screw u ")
		    	$(element).attr({
		    		'data-container' : 'body',
		    		'data-toggle': 'popover',
		    		'data-placement' : 'right',
		    		'data-content': error[0].innerHTML
		    	});
		    	$("<div></div>").addClass('popover')
	    		$(element).popover('show');
	    	}else{
	    		error.insertAfter(element);
	    	}
	    	
	    	
            if(element.length) {
                //error.insertAfter(element);
            } else {
           // error.insertAfter(element);
            }
        } 

	});
	


}


function getCurrentPageSize(){
	
	//$(".form-control").popover('hide');
	//$(".form-control").popover('show');
	var pageSize;
	if($(".xsListener").css("float") == "none"){
		pageSize = "xs";
	}else if($(".smListener").css("float") == "none"){
		pageSize = "sm";
	}else if($(".mdListener").css("float") == "none"){
		pageSize = "md";
	}else if($(".lgListener").css("float") == "none"){
		pageSize = "lg";
	}
	return pageSize;
	
	//
}

function testIfResizingNeeded(){
	
	var pageSize =  getCurrentPageSize();
	if(currentPageSize !=  pageSize){
		currentPageSize = pageSize;
		resizeMe();		
	}
}

$(window).resize(function(event) {
	testIfResizingNeeded();
	$(".form-control").popover("destroy");
});


function addMoreButtonPress(){
	$("#MoreButton").click(function(event) {
		$("#hiddenHomeText").toggleClass('hidden');
		if($("#MoreButton").text() == "More..."){
			$("#MoreButton").text('Less...');
		}else{
			$("#MoreButton").text('More...')
		}
		
	});

}


function parseJSON(){
	$.each(_dataJSON, function(index, val) {
		var dataTypedArray = val;
		_dataBlocksTyped[index] = [];

		for (var i = 0; i < dataTypedArray.length; i++) {
			var obj = dataTypedArray[i];

			var newDataBlock = new dataBlock(index, obj.title, obj.location, obj.dates, obj.image, obj.description);
			
			_dataBlocks.push(newDataBlock);
			_dataBlocksTyped[index].push(newDataBlock);
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

function createDataBlockTypedDisplays($type){
	if($type == "home"){
		$("#homePageStuff").removeClass('hidden');
	}else if($type == "contact"){
		$("#contactPageStuff").removeClass('hidden');
			
	}else{
		var arr = _dataBlocksTyped[$type];
		if(arr){
			var display = $("<div id='blockDisplay'></div>").attr({
				class: 'row '
			})
			
			for (var i = 0; i < arr.length; i++) {
				var dataBlockDisplay = createDataBlockDisplay(arr[i]);
				_dataBlockDisplays.push(dataBlockDisplay); 				
				display.append(dataBlockDisplay);
				var j = i+1;
				if(j%2 ==0 ){
					display.append("<div class='clearfix visible-sm'></div>");					
				}
				if( j%3 == 0){
					display.append("<div class='clearfix visible-md '></div>");
				}
				if( j%4 == 0){
					display.append("<div class='clearfix  visible-lg'></div>");
				}				
			};
 
			$("#Content").append(display);			
			
		}
	}
	testIfResizingNeeded();
}



var lastHightest = 0;
function resizeMe(){
	console.log("resize",currentPageSize)
	
	var highest = 0;
	var display = $("#blockDisplay")
	$.each(display.find(".dataBlockDisplay"), function(index, val) {
		$(val).css({
			height: '100%'
		});
		if($(val).height()> highest){
			highest = $(val).height();
		}
	});


	if(lastHightest != highest ){
		lastHightest = highest;
		if(currentPageSize !="xs"){
		console.log("resize1" ,(currentPageSize !="xs"))
		$.each(display.find(".dataBlockDisplay"), function(index, val) {
			console.log(val , highest);
			$(val).height(highest);				
		})
		}
	}

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
	/*var display = $("<div></div>").attr({
		class: 'row ' + $dataBlock.type
	});
*/
	var outside =  $("<div></div>").attr({
		class: 'col-xs-12 col-sm-6 col-md-4 col-lg-3'
	})

	var sizing = $("<div></div>").attr({
		class: 'dataBlockDisplay '
	})

	var imageDiv = $("<div></div>").attr({
		class: 'dataBlockDisplayImage'
	});

	var image = $("<img></img>").attr({		
		src: $dataBlock.imageURL,	
		width: '100px',
		height: '100px'
	})

	imageDiv.append(image);
	sizing.append(imageDiv);


	var textDiv = $("<div></div>").attr({
		class: 'dataBlockDisplayText'
	}); 
	var textDiv2 = $("<div></div>").attr({
		//class: 'dataBlockDisplayText'
	}); 

	var title = $("<h4 class='displayBlock'>"+ $dataBlock.title +" <br /> <small>" + $dataBlock.location + "</small></h4>");
	var discription = $("<p  class='displayBlock' style='margin:auto'>"+ $dataBlock.description +"</p>");

	var dates = $("<p  class='displayBlock'></p>");
	$.each($dataBlock.dates, function(index, val) {
		dates.append( val.from + " - " + val.to + "<br />");

	});
	

	textDiv.append(title);
	if($dataBlock.type != "projects"){

		textDiv.append(dates);
	}
	
	textDiv2.append(discription);
	
	sizing.append(textDiv);
	sizing.append(textDiv2);
	outside.append(sizing)
	return outside;

}
/*
function createDataBlockDisplayBSThubnail($dataBlock){

	var sizing = $("<div></div>").attr({
		class: 'col-xs-12 col-sm-6 col-md-4 col-lg-3'
	});

	var thumbnail = $("<div></div>").attr({
		class: 'thumbnail'
	});

	//display.append(sizing);
	sizing.append(thumbnail)


	var image = $("<img></img>").attr({		
		src: $dataBlock.imageURL,	
		width: '100px',
		height: '100px'
	});

	thumbnail.append(image);


	var textDiv = $("<div></div>").attr({
		class: 'caption'
	}); 

	var title = $("<h4 class='displayBlock'>"+ $dataBlock.title +" | <small>" + $dataBlock.location + "</small></h4>");
	var discription = $("<p  class='displayBlock'>"+ $dataBlock.description +"</p>");

	var dates = $("<p  class='displayBlock'></p>");
	$.each($dataBlock.dates, function(index, val) {
		dates.append( val.from + " - " + val.to + "<br />");

	});
	

	textDiv.append(title);
	textDiv.append(dates);
	textDiv.append(discription);
	
	thumbnail.append(textDiv);
	return sizing;

}



function createDataBlockDisplay($dataBlock){
	var display = $("<div></div>").attr({
		class: 'dataBlockDisplay ' + $dataBlock.type
	});
	var title = $("<span class='displayBlock'>"+ $dataBlock.title +" | <span class='bold'>" + $dataBlock.location + "</span></span>");
	var discription = $("<span  class='displayBlock'>"+ $dataBlock.description +"</span>");

	var dates = $("<span  class='displayBlock'></span>");
	$.each($dataBlock.dates, function(index, val) {
		dates.append("from: " + val.from + ", to: " + val.to + "<br />");

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

function createMobileMenuToggle(){
	
	var mm = $("#MobileMenu");
	var mmheight = mm.height();
	mm.css({
		height: '0'
	});
	mm.hide();

	$(".mobileMenuToggle").click(function(event) {
		
		if(mm.height() == 0){
			mm.show().animate({height: mmheight});
		}else{
			mm.animate({
				height: 0},
				 function() {
					mm.hide()
			});
		}
	});

}*/

var _currentSelectedPage;

function handleMenuForCurrentPage($currentPageId){

	$('#' + $currentPageId).addClass('active')

	console.log($('#' + $currentPageId).css)
	/*$('#' + $currentPageId).children('a').css({
		color: '#FFF'
	});*/
	
	_currentSelectedPage = $currentPageId;
	
	

}


//-----------------------------------------------Masonary Stuff

//var msnry = new Masonary( '#Content' , {}) // or with JQuery Plugin
//var $container = $('#Content');
//$container.masonary({columnWidth:200, itemSelector: '.dataBlockDisplay'});
/*

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
*/