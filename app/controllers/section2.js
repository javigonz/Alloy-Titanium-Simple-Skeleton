var managment_View = require('managment_View');

show();



/* ***********************************************************
 * Public functions
 * ***********************************************************/


/* ***********************************************************
 * Private functions
 * ***********************************************************/


function show(){

	//Add the actual view container
	Alloy.Globals.ActualContainer = $.viewSection2;

	Ti.App.fireEvent('closeLoading');

}


/* ***********************************************************
 * Handler functions
 * ***********************************************************/