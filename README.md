
Alloy/Titanium Simple Skeleton Project
===

This is a init project with two sections to navigate, and a Navigation bar (header) and a Window bar (footer):
- Only work with one window, to reduce the amount memory leak. The new section is loading inside a view after remove all children in this view.
```
<Alloy>
	
	<Window class="winInitContainer" id="winInitContainer" navBarHidden="true" tabBarHidden="true" >

		<View  id="viewInitContainer" class="viewInitContainer" > 
			 	
			<!-- Load the section here -->
			
		</View>	
		
		<!-- Navigation Window -->
		<Require id="header" src="header"  />
		
		<!-- Navigation bar -->
		<Require id="footer" src="footer"  />
		
		<!-- Loading view -->
		<Require id="loading" src="loading"  />	
		
		
	</Window>
		
	
</Alloy>
```
- In each iteration with sections, the loading page is change to visible and creates a smoth animations.
```
Ti.App.fireEvent('openLoading');
```
- SDK Titanium version: 3.4.1
iOS version: 8.1
Android version: 21

