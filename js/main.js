var _dataJSON;
var _dataBlocks = [];
var _dataBlocksTyped = {};
var _dataBlockDisplays = [];
var _msnry;
var currentPageSize;

$(window).load(function() {
	addLinkToHome();
	//	currentPageSize =  getCurrentPageSize();
	//testIfResizingNeeded();

	//var x = 8;
	//x = x >> 3;
	//x = x << 4;
	//x = x ^ 6
	//alert(x)
	//jQuery('$mainy .cls3').appendTo(jQuery('#mainy')).add('#mainy .cls2').appendTo(jQuery('#mainy'));
});


//called from php
var _currentSelectedPage;

function handleMenuForCurrentPage($currentPageId) {

	$('#' + $currentPageId).addClass('active');
	_currentSelectedPage = $currentPageId;

	switch(_currentSelectedPage){
		case "home":
			$("#Content").load('html/home.html',
			function() {
				addMoreButtonPress();
			});
		break;

		case "contact":
			$("#Content").load('html/contact.html',
			function() {
				addValidate();
			});
		break;

		case "projects":
			$.getJSON("php/getData.php", "dataType=projects" ,function(json, textStatus) {

				parseDBJSON("projects",json);
				createDataBlockTypedDisplays("projects",_currentSelectedPage);
				//setupMasonry();
				//createMobileMenuToggle();



			}).fail(function(jqXHR, status, error) {
				if (status == 'parseerror') {
					console.log("parseError");
				} else {
					console.log("other");
				}
			});
		/*
			$.get('php/getData.php', function(data) {

				//var dataJSON = parseJSON(data);
				alert(">>>>>>>. "+data);
			parseDBJSON("projects",data);
			//createDataBlockTypedDisplays("projects");

			}).fail(function(){

				alert("poo");
			}).success(function(){
				alert("woohoo");
			})
				;*/
		break;

		case "employers":
			$.getJSON("php/getData.php", "dataType=employers" ,function(json, textStatus) {

				parseDBJSON("employers",json);
				createDataBlockTypedDisplays("employers",_currentSelectedPage);

			}).fail(function(jqXHR, status, error) {
				if (status == 'parseerror') {
					console.log("parseError");
				} else {
					console.log("other");
				}
			});
			break;

		case "education":
			$.getJSON("php/getData.php", "dataType=education" ,function(json, textStatus) {

				parseDBJSON("education",json);
				createDataBlockTypedDisplays("education",_currentSelectedPage);

			}).fail(function(jqXHR, status, error) {
				if (status == 'parseerror') {
					console.log("parseError");
				} else {
					console.log("other");
				}
			});
			break;

		default:
			loadJSON();
		break;


	}

}


function loadJSON(){
	if (!_dataJSON) {
		$.getJSON("data/data.json", function(json, textStatus) {

			_dataJSON = json;
			parseJSON();
			createDataBlockTypedDisplays(_currentSelectedPage);
			//setupMasonry();
			//createMobileMenuToggle();



		}).fail(function(jqXHR, status, error) {
			if (status == 'parseerror') {
				console.log("parseError");
			} else {
				console.log("other");
			}
		});
	}
}

function addLinkToHome(){
	$("#NameLink").css({
		cursor: 'pointer'
	});
	$("#NameLink").click(function(event) {
		window.location = "index.php";
	});

}

function parseDBJSON($type, $dataArray){
	_dataBlocksTyped[$type] = [];
	for (var i = 0; i < $dataArray.length; i++) {
		var obj = $dataArray[i];

		var imagePath = "images/" + $type + "/";		

		var newDataBlock = new dataBlock($type, obj.title, obj.location, obj.dates,  imagePath +obj.image_name, obj.description);		
		_dataBlocksTyped[$type].push(newDataBlock);
		console.log(newDataBlock);
	};
}

function parseJSON() {
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

function createDataBlockDisplays() {
	for (var i = 0; i < _dataBlocks.length; i++) {
		var dataBlockDisplay = createDataBlockDisplay(_dataBlocks[i]);
		_dataBlockDisplays.push(dataBlockDisplay);
		$("#Content").append(dataBlockDisplay);
	};
}

function createDataBlockTypedDisplays($type) {
	
		var arr = _dataBlocksTyped[$type];

		if (arr) {
			var display = $("<div id='blockDisplay'></div>").attr({
				class: 'row '
			})

			for (var i = 0; i < arr.length; i++) {
				var dataBlockDisplay = createDataBlockDisplay(arr[i]);
				_dataBlockDisplays.push(dataBlockDisplay);
				display.append(dataBlockDisplay);
				var j = i + 1;
				if (j % 2 == 0) {
					display.append("<div class='clearfix visible-sm'></div>");
				}
				if (j % 3 == 0) {
					display.append("<div class='clearfix visible-md '></div>");
				}
				if (j % 4 == 0) {
					display.append("<div class='clearfix  visible-lg'></div>");
				}
			};

			$("#Content").append(display);

		}
	
	testIfResizingNeeded();
}


//object
function dataBlock($type, $title, $location, $dates, $imageURL, $description) {
	this.type = $type;
	this.title = $title;
	this.location = $location;
	this.dates = $dates;
	this.imageURL = $imageURL;
	this.description = $description;
}


function createDataBlockDisplay($dataBlock) {
	var outside = $("<div></div>").attr({
		class: 'col-xs-12 col-sm-6 col-md-4 col-lg-3'
	});

	var sizing = $("<div></div>").attr({
		class: 'dataBlockDisplay'
	});

	var imageDiv = $("<div></div>").attr({
		class: 'dataBlockDisplayImage'
	});

	var image = $("<img></img>").attr({
		src: $dataBlock.imageURL,
		width: '100px',
		height: '100px'
	});

	imageDiv.append(image);
	sizing.append(imageDiv);


	var textDiv = $("<div></div>").attr({
		class: 'dataBlockDisplayText'
	});
	var textDiv2 = $("<div></div>").attr({
		class: 'dataBlockDisplayDescriptionText'
	});

	var title = $("<h4 class='displayBlock'>" + $dataBlock.title + " <br /> <small>" + $dataBlock.location + "</small></h4>");
	var discription = $("<p  class='displayBlock' style='margin:auto'>" + $dataBlock.description + "</p>");


	textDiv.append(title);

	if ($dataBlock.type != "projects") {
		var dates = $("<p  class='displayBlock'></p>");

		var datesArray = $dataBlock.dates.split(",");
		//alert(datesArray);
		$.each(datesArray, function(index, val) {
			var datesToAndFrom = val.split("|");
			
			var dateFrom = new Date(datesToAndFrom[0]);
			var dateTo; 
			if(datesToAndFrom[1] == "Present"){
				dateTo = new Date();
			}else{
				dateTo = new Date(datesToAndFrom[1]);
			}

			dates.append(formatDate(dateFrom) + " - " + formatDate(dateTo) + "<br />");

		});


	
	

		textDiv.append(dates);
	}

	textDiv2.append(discription);

	sizing.append(textDiv);
	sizing.append(textDiv2);
	outside.append(sizing);
	return outside;

}

function formatDate($date){
	var months = ["Jan" , "Feb" , "Mar", "Apr" , "May", "Jun" ,"Jul" , "Aug" ,"Sep", "Oct" , "Nov" , "Dec"]
	var string= months[$date.getMonth()];
	var year = "" + $date.getFullYear();
	string += " '" + year.substring(2,4);
	return string;

}


function getCurrentPageSize() {

	var pageSize;
	if ($(".xsListener").css("float") == "none") {
		pageSize = "xs";
	} else if ($(".smListener").css("float") == "none") {
		pageSize = "sm";
	} else if ($(".mdListener").css("float") == "none") {
		pageSize = "md";
	} else if ($(".lgListener").css("float") == "none") {
		pageSize = "lg";
	}
	return pageSize;
}

function testIfResizingNeeded() {

	var pageSize = getCurrentPageSize();
	if (currentPageSize != pageSize) {
		currentPageSize = pageSize;
		resizeMe();
	}
}

$(window).resize(function(event) {
	testIfResizingNeeded();
	$(".form-control").popover("destroy");
});

var lastHightest = 0;

function resizeMe() {
	console.log("resize", currentPageSize);

	var highest = 0;
	var display = $("#blockDisplay")
	$.each(display.find(".dataBlockDisplay"), function(index, val) {
		$(val).css({
			height: '100%'
		});
		if ($(val).height() > highest) {
			highest = $(val).height();
		}
	});


	if (lastHightest != highest) {
		lastHightest = highest;
		if (currentPageSize != "xs") {
			console.log("resize1", (currentPageSize != "xs"))
			$.each(display.find(".dataBlockDisplay"), function(index, val) {
				console.log(val, highest);
				$(val).height(highest);
			})
		}
	}

}




// add the homepage button press

function addMoreButtonPress() {
	$("#MoreButton").click(function(event) {
		$("#hiddenHomeText").toggleClass('hidden');
		if ($("#MoreButton").text() == "More...") {
			$("#MoreButton").text('Less...');
		} else {
			$("#MoreButton").text('More...');
		}

	});

}

// add the contact page functions


function addValidate() {

	$("#contactForm").validate({
		rules: {

			formName: {
				required: true
			},
			formEmail: {
				required: true,
				email: true
			},
			formConfirmEmail: {
				required: true,
				equalTo: formEmail
			},
			formEnquiryText: {
				required: true
			}
		},
		messages: {
			formName: {
				required: 'Name required'
			},
			formEmail: {
				required: 'Email required',
				email: 'Valid email required'
			},
			formConfirmEmail: {
				required: 'Email required',
				email: 'Valid email required',
				equalTo: 'Email does not match'
			},
			formEnquiryText: {
				required: 'Enquiry required'
			}

		},

		highlight: function(element) {
			if ($(element).closest('div').hasClass('has-success') || !$(element).closest('div').hasClass('has-success') && !$(element).closest('div').hasClass('has-error')) {
				var id_attr = "#" + $(element).attr("id") + "1";
				//$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
				$(element).closest('div').removeClass('has-success').addClass('has-error');
				$(id_attr).removeClass('glyphicon-ok').addClass('glyphicon-remove');
				console.log("highlight")
			}

		},
		unhighlight: function(element) {
			if ($(element).closest('div').hasClass('has-error') || !$(element).closest('div').hasClass('has-success') && !$(element).closest('div').hasClass('has-error')) {
				var id_attr = "#" + $(element).attr("id") + "1";
				// $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
				$(element).closest('div').removeClass('has-error').addClass('has-success');
				$(id_attr).removeClass('glyphicon-remove').addClass('glyphicon-ok');
				$(element).popover('destroy');
				console.log("unhighlight")
			}

		},
		submitHandler: submitContactForm,
		//errorElement: 'span',
		//errorClass: 'help-block',
		errorPlacement: function(error, element) {

			if (currentPageSize != "xs") {

				var show = false;
				if (!$(element).attr('data-toggle')) {
					show = true;
				}
				$(element).attr({
					'data-container': 'body',
					'data-toggle': 'popover',
					'data-placement': 'right',
					'data-content': error[0].innerHTML,
					'data-trigger': 'manual'
				});
				$("<div></div>").addClass('popover');
				$(element).popover('show');

			} else {
				error.insertAfter(element);
			}


			if (element.length) {
				//error.insertAfter(element);
			} else {
				// error.insertAfter(element);
			}
		}

	});
}

function submitContactForm(form) {


	$("#contactSubmitBtn").button('loading');
	$(".form-control-feedback").removeClass('glyphicon-ok').removeClass('glyphicon-remove');

	$(form).find('input').attr({
		disabled: 'disabled'
	});
	$(form).find('textarea').attr({
		disabled: 'disabled'
	});
	var data = {};
	data["name"] = $("#formName").val();
	data["email"] = $("#formEmail").val();
	data["enquiry"] = $("#formEnquiryText").val();

	$.post('php/sendMailScript.php', {
		data: data
	}, function(data, textStatus) {
		//optional stuff to do after success 

		$(".form-control-feedback").removeClass('glyphicon-ok').removeClass('glyphicon-remove');
	}).success(function() {
		resetForm(form);
		$(form).trigger('reset');
		$("<span class='label label-success'>Enquiry sent.</span>").insertBefore('#contactSubmitBtn');

		//alert('is good');
	}).fail(function() {
		//alert('is fail');
		resetForm(form);
		$("<span class='label label-danger'>There was an error, please try again later.</span>").insertBefore('#contactSubmitBtn');
	});
	return false;
}

function resetForm(form) {
	$("#contactSubmitBtn").button('reset');
	$(form).find('input').removeAttr('disabled');
	$(form).find('textarea').removeAttr('disabled');
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