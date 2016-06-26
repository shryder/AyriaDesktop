function debug(string){
	console.log('[DEBUG] '+ string);
}
function error(string){
	console.log('[ERROR] '+ string);
}
function info(string){
	console.log('[INFO] '+ string);
}
function getpageoptions(option) { 
   var metas = document.getElementsByTagName('meta'); 

   for (var i=0; i<metas.length; i++) { 
      if (metas[i].getAttribute("option") == option) { 
         return metas[i].getAttribute("value"); 
      } 
   } 

    return "";
} 
function loadintomain(page){
	$("#Content").load(page).delay(1000);
	setTimeout(function(){ // make it check after 300ms if the page got searchbar enabled
		if(getpageoptions("searchbar") == "enabled"){
			$(".searchbar").show();
		}else{
			$(".searchbar").hide();
		}
	}, 300);
	
}
function GetModInfo(id){ //hm i think it'll return a json format so we can parse it more easily.
	return "Undefined "+id;
}
function addMod(id){ //once this function is called, a new mod will be added to the sidebar's mod list and also to the user's mod list that will be stored online...probably
	$('#Sidebarlist').append("<li><a href='#' gameid='"+ GamesID[s] +"' title='"+ GamesName[s] +"' gamename='"+ GamesName[s] +"' > "+ GamesName[s] + "</a></li>"); //Append the current Mod to the list.
	info('Added '+id+'to the list.');
}
function ShowGame(id){
	var content = "<div class='header'> Name : "+ GetModInfo(id) +"</div><div class='description'> Description : "+ GetModInfo(id) +"</div>";
	$("#Content").html(content);
}
