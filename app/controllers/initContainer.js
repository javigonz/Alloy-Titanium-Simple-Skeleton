var utils = require('utils');
var managment_View = require('managment_View');

show();



/* ***********************************************************
 * Public functions
 * ***********************************************************/


/* ***********************************************************
 * Private functions
 * ***********************************************************/


function show(){
	
	Alloy.Globals.WinInitContainer = $.winInitContainer;
	

	if (Ti.Platform.osname === "iphone")
	{
		$.viewInitContainer.height = Ti.Platform.displayCaps.platformHeight - Alloy.Globals.Height_Footer - Alloy.Globals.Height_Header - 20;
		$.viewInitContainer.top = Alloy.Globals.Height_Header + 20;
		
	}
	else
	{
		
		$.viewInitContainer.height = Alloy.CFG.HeightDevice - Alloy.Globals.Height_Footer - Alloy.Globals.Height_Header - 20;
		$.viewInitContainer.top = Alloy.Globals.Height_Header;

		//Trigger the click of device back button
		Alloy.Globals.WinInitContainer.addEventListener('android:back', function(e){
													managment_View.closeActualSection();
												});
		
	}
	
	
	Alloy.Globals.viewContainerPrincipal = $.viewInitContainer;
	
	$.winInitContainer.open();
		
	managment_View.OpenSectionParam('home',[], $.viewInitContainer);

}


/* ***********************************************************
 * Handler functions
 * ***********************************************************/


