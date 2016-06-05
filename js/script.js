/*
	Initial Author: Shryder
	Started Date : 23/05/1016 - not sure =P
	Note: This code looks quite ugly, since i'm not using an API to get some informations... 
*/
$(function(){
	
	var gui = require('nw.gui');
	var menu = new gui.Menu();

	// Add some items
	var copy = new gui.MenuItem({ label: 'Copy' });
	var paste = new gui.MenuItem({ label: 'Paste' });
	var refresh = new gui.MenuItem({ label: 'Refresh' });
	menu.append(copy);
	menu.append(paste);
	menu.append(new gui.MenuItem({ type: 'separator' }));
	menu.append(refresh);

	$(document).on('contextmenu', function (e) {
		menu.popup(e.pageX, e.pageY); //dunno why it doesn't work automaticly, but whatever.
    });

	refresh.click = function() { 
	   location.reload(true);
	};

	$('.toprightcorner img').on('dragstart', function(event) { event.preventDefault(); }); //because it'll look ugly .-.
	$("#closewindow").click(function(){ // umm i'll have to find out how i can close a window , not the whole app...
		gui.App.close();
	});
	$("#quit").click(function(){
		gui.App.quit();
	});
	$("#minimize").click(function(){
		gui.Window.get().minimize();
	});
	$("#maximize").click(function(){
		gui.Window.get().maximize();
	});
	
	$("#friends").click(function(){
		var win = gui.Window.open ('friends.html', {
		  position: 'center',
		  width: 300,
		  height: 500,
		  frame:false
		});
		win.on ('loaded', function(){
		  // the native onload event has just occurred
		  var document = win.window.document;
		});
	});
	
	$("#library").click(function(){
		loadintomain("./library.html");
	});
	
	$('#Sidebarlist').resizable({ // Resize the sidebar.
		start: function( event, ui ) {},
		stop: function( event, ui ) {},
	    handles: 'n,w,s,e',minWidth: 200,
	    maxWidth: 400
	});
	$("#Sidebarlist").on( "resizestart", function( event, ui ) { //on resize start.
		$('#Content').css('margin-left',$("#Sidebarlist").css('width'));
	});
	$("#Sidebarlist").on( "resizestop", function( event, ui ) { //on resize stop.
		$('#Content').css('margin-left',$("#Sidebarlist").css('width'));
	});

	var GamesList = ["Modification 1", "Modification 2", "Modification 3", "Modification 4","Modification 5"]; //List of the Modifications, we'll get the list using the API when available. 
	var length = GamesList.length;
	for (var s = 0; s < length; s++) {
		debug("Games count: "+ s ); //just for debugin purposes.
		debug("Games: " + GamesList[s]);
		$('#Sidebarlist').append("<li><a href='#' title='"+ GamesList[s] +"' > "+ GamesList[s] + "</a></li>"); //Append the current Mod to the list.
	}
});