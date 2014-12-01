//View Managment to navegate between sections

var utils = require('utils');

var FadeOut_Opacity = Titanium.UI.createAnimation({
	    curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
	    opacity: 0,
	    duration: 300
});

var FadeIn_Opacity = Titanium.UI.createAnimation({
	    curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
	    opacity: 1,
	    duration: 300
});



//************************************************************************************************************************
//Open new Section and load automatic in main window
//
//window: section to go
//objectAddress: Data Object parameter
//viewContainer: View Container id
//************************************************************************************************************************
exports.OpenSectionParam = function(window,objectAddress, viewContainer)
{
	Ti.App.fireEvent('openLoading');
	
	var viewData = [{
		section: window,
		objectData: objectAddress,
		container: viewContainer
	}];
	
	Alloy.Globals.ViewActive.push(viewData);
	Alloy.Globals.ActualSection = window;
	
	var miniTimer = setTimeout(function () {
					clearInterval( miniTimer );
					utils.removeAllChildren(Alloy.Globals.viewContainerPrincipal);
					Alloy.Globals.viewContainerPrincipal.add(Alloy.createController(window, [objectAddress]).getView());
	}, 300);
	

};



//************************************************************************************************************************
//Open back Section and load automatic in main window
//************************************************************************************************************************
exports.closeActualSection = function(){
	
	if (Alloy.Globals.IsLoading === 'false') 
	{
		if (Alloy.Globals.ViewActive.length === 1) 
		{
			//This is the first section loaded, do nothing!!
		}
		else
		{
			
			Ti.App.fireEvent('openLoading');
			
			var actualContainer = Alloy.Globals.ActualContainer;
			var i = Alloy.Globals.ViewActive.length-2;
			Alloy.Globals.ActualSection = Alloy.Globals.ViewActive[i][0].section;

			var miniTimer = setTimeout(function () {
					clearInterval( miniTimer );
					utils.removeAllChildren(Alloy.Globals.viewContainerPrincipal);
					var section = Alloy.Globals.viewContainerPrincipal.add(Alloy.createController(Alloy.Globals.ViewActive[i][0].section, [Alloy.Globals.ViewActive[i][0].objectData]).getView());
					Alloy.Globals.ViewActive.pop();
			}, 300);


		}
	
	}
	
	
};





