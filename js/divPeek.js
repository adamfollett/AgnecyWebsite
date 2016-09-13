//DivPeek - Custom jQuery CSS3 Animation Trigger Script by David Halford
//(see https://github.com/davidhalford/DivPeek)
//===============================================================================
//CONFIG: 
var elementsToTrack = [".step1",".step2",".step3",".step4",".step5",".step6"];

var pixelOffset = -24;
var inClassName = "inViewPort";
var outClassName = "outViewPort";
//===============================================================================

//add function to see of elements exist (otherwise removing an elemnet from DOM but not from array breaks everything)
jQuery.fn.exists = function(){return this.length>0;}

//define vars out of scope
var viewPortHeight = $(window).height();
var scrollFromTop = $(window).scrollTop();
var scrollFromBottom = (parseInt(scrollFromTop)+parseInt(viewPortHeight));

//function for recalculating all positioning vars in scroll/resize
function recalcVars(){
	if($(window).width() >= 1025){
		viewPortHeight = $(window).height();
		scrollFromTop = $(window).scrollTop();
		scrollFromBottom = (parseInt(scrollFromTop)+parseInt(viewPortHeight));
		for (var i = 0; i < elementsToTrack.length; i++) {
			if ($(elementsToTrack[i]).exists()) {
				checkInViewport(scrollFromBottom, elementsToTrack[i]);
			}
	   	}
	   }		
}

//catch window events
$(window).resize(function(e){
	if($(window).width() >= 1025){
		recalcVars();
	}
});
document.addEventListener("touchmove", ScrollStart, false);
document.addEventListener("scroll", Scroll, false);
function ScrollStart(){recalcVars();}
function Scroll(){recalcVars();}

//function that handles if an element is in the viewport or not 
function checkInViewport(scrollBottom, domElement){
	if($(window).width() >= 1025){
		var elementPos = $(domElement).offset().top;
		if((parseInt(scrollBottom)+parseInt(pixelOffset)) > elementPos){
			$(domElement).addClass(inClassName).removeClass(outClassName);
		} else {
			$(domElement).removeClass(inClassName).addClass(outClassName);
		}
	}
}