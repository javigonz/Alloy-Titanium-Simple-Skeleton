var managment_View = require('managment_View');

show();


/* ***********************************************************
 * Public functions
 * ***********************************************************/


/* ***********************************************************
 * Private functions
 * ***********************************************************/
function show(){
	
	if (Ti.Platform.osname == "iphone")
	{
		$.viewFooter.top = Ti.Platform.displayCaps.platformHeight - 50;
		
		//Number of item menu is 2
		var widthButton = Alloy.CFG.WidthDeviceIphone / 2;
	}
	else
	{
		$.viewFooter.top = (Ti.Platform.displayCaps.platformHeight / (Titanium.Platform.displayCaps.dpi / 160)) - 75;
		
		//Number of item menu is 2
		var widthButton = Alloy.CFG.WidthDeviceAndroid / 2;
	}
	
	
	
	//Styles
	var MenuView = $.createStyle({classes: ['MenuView']});	
	var MenuText = $.createStyle({classes: ['MenuText']});	
	
	
	//Menu Home
	var view1 = Ti.UI.createView({});
	view1.applyProperties(MenuView);
	view1.width = widthButton;
	view1.addEventListener('click', eventHandler_Home);
	
	var label1 = Ti.UI.createLabel({});
	label1.applyProperties(MenuText);
	label1.width = widthButton-10;
	label1.text = 'HOME';

	view1.add(label1);
	$.viewFooter.add(view1);
	
	
	//Menu section 2
	var view2 = Ti.UI.createView({});
	view2.applyProperties(MenuView);
	view2.width = widthButton;
	view2.addEventListener('click', eventHandler_Section2);
	
	var label2 = Ti.UI.createLabel({});
	label2.applyProperties(MenuText);
	label2.width = widthButton-5;
	label2.text = 'SECTION 2';

	view2.add(label2);
	$.viewFooter.add(view2);
	
	
	
}




/* ***********************************************************
 * Event handlers
 * ***********************************************************/

function eventHandler_Home()
{
	managment_View.OpenSectionParam('home',[], Alloy.Globals.ActualContainer);
}

function eventHandler_Section2()
{
	managment_View.OpenSectionParam('section2',[], Alloy.Globals.ActualContainer);
}
