/*********************     CREATE    ********************************/ 
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $nextImage = $("<img>");
//your comment here:
var $next = $("<p id='next'>Next</p>");
var $close = $("<p id='close'>CLOSE</p>");
/*********************     APPEND    ********************************/ 
// your comment here:
$overlay.append($next);
$overlay.append($close);
$overlay.append($image);
$("body").append($overlay);

/*********************     CLICK A LINK    ********************************/
//your comment here: 
$("#image-gallery a").click(function( event ) {
	// your comment here:
  	event.preventDefault();
  	//your comment here:
  	var counter = $(this).parent().nextAll().length;
  	//your comment here:
  	var imageCounter = $(this).parent().nextAll().length;
  	numberOfImages = 9;
  	// your comment here:
  	for(var i=0; i<counter; i++){
  		// your comment here:
  		$overlay.append("<img id='image".concat(i).concat("'>"));
  		// your comment here:
  		$("img[id*=image"+i+"]").attr("src","images/image".concat(numberOfImages-imageCounter).concat(".jpg"));
  		// your comment here:
  		imageCounter--;
  	}
  	// your comment here:
  	$("img[id*=image]").hide();

	var imageLocation = $(this).attr("href");
	$image.show();
	$image.attr("src",imageLocation);
	$overlay.show();
});
/*********************     CLICK CLOSE BUTTON    ************************/ 

// your comment here:
$close.click(function(){
	//your comment here:
	$overlay.hide();
	//your comment here:
	$("img[id*=image").remove();
	//your comment here:
	location.reload(true);
});
/*********************     CLICK NEXT BUTTON    ************************/

var number = 0;
//your comment here:
$next.click(function(){
		//your comment here:
		$image.hide();
		//your comment here:
		var siblingsNumber = $(this).nextAll().length;
		//your comment here:
		$("img[id*=image".concat(number).concat("]")).show();
		//your comment here:
		$("img[id*=image".concat(number-1).concat("]")).hide();
		//your comment here:
		number++;
		//your comment here:
		if(siblingsNumber-number===1){
			//your comment here:
			location.reload(true);
		}
	});
