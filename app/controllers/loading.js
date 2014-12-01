
//Initial Listeners
Ti.App.addEventListener('openLoading', function(e) {
	openLoading();
});

Ti.App.addEventListener('closeLoading', function(e) {
	closeLoading();
});


$.activityIndicator.show();


var FadeOut_Opacity = Titanium.UI.createAnimation({
    curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
    opacity: 0,
    duration: 300
});

var FadeInMid_Opacity = Titanium.UI.createAnimation({
    curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
    opacity: 0.7,
    duration: 300
});



/* ***********************************************************
 * Public functions
 * ***********************************************************/
function openLoading(){
	
	Ti.App.removeEventListener('openLoading', function(e) {
		openLoading();
	});

	$.winloading.opacity = 0;
	$.winloading.width = Ti.UI.FILL;
	$.winloading.height = Ti.UI.FILL;
	
	$.winloading.animate(FadeInMid_Opacity);
	
	Alloy.Globals.IsLoading = 'true';
	
}

function closeLoading(){
	
	Ti.App.removeEventListener('closeLoading', function(e) {
		closeLoading();
	});

	
	$.winloading.animate(FadeOut_Opacity);
	var miniTimer = setTimeout(function () {
					clearInterval( miniTimer );
			        $.winloading.width = 0;
					$.winloading.height = 0;
	}, 300);
	
	Alloy.Globals.IsLoading = 'false';
}



/* ***********************************************************
 * Private functions
 * ***********************************************************/


/* ***********************************************************
 * Event handlers
 * ***********************************************************/



