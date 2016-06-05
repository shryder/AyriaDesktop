function debug(string){
	console.log('[DEBUG] '+ string);
}
function error(string){
	console.log('[ERROR] '+ string);
}
function info(string){
	console.log('[INFO] '+ string);
}
function loadintomain(page){
	$("#Content").load(page);
}
function GetModInfo(id){ //hm i think it'll return a json format so we can parse it more easily.
	return "Undefined";
}
function addMod(id){ //once this function is called, a new mod will be added to the sidebar's mod list and also to the user's mod list that will be stored online...
	$('#Sidebarlist').append("<li><a href='#' title='"+ GetModInfo(id,name) +"' > "+ GetModInfo(id,name) + "</a></li>"); 
}