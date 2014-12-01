
//Some variables necessary for navigation between sections
Alloy.Globals.viewContainerPrincipal;
Alloy.Globals.WinInitContainer;
Alloy.Globals.ViewActive = [];
Alloy.Globals.ActualContainer;
Alloy.Globals.ActualSection;
Alloy.Globals.IsLoading;

//Measures views
Alloy.Globals.Height_Footer = 50;
Alloy.Globals.Height_Header = 50;


//Colors
Alloy.CFG.WHITE	 		= "#FFFFFF";
Alloy.CFG.BLACK	 		= "#000000";
Alloy.CFG.BLUE1	 		= "#0189c6";
Alloy.CFG.BLUE2	 		= "#50b2e9";


//Device height&width
Alloy.CFG.WidthDeviceIphone   = Ti.Platform.displayCaps.platformWidth;
Alloy.CFG.WidthDeviceAndroid   = Ti.Platform.displayCaps.platformWidth / (Titanium.Platform.displayCaps.dpi / 160);
Alloy.CFG.HeightDevice   = Ti.Platform.displayCaps.platformHeight / (Titanium.Platform.displayCaps.dpi / 160);


//Fonts
if(Ti.Platform.osname === 'android') {
	Alloy.CFG.ARIAL_NORMAL = 'Arial';
}
else{
	Alloy.CFG.ARIAL_NORMAL = 'ArialMT';
}
