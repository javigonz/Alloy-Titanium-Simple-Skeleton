var managment_View = require('managment_View');

show();



/* ***********************************************************
 * Public functions
 * ***********************************************************/


/* ***********************************************************
 * Private functions
 * ***********************************************************/


function show(){


	//Añado el container actual al objeto de navegación
	Alloy.Globals.ActualContainer = $.viewHome;

	Ti.App.fireEvent('closeLoading');

}


/* ***********************************************************
 * Handler functions
 * ***********************************************************/