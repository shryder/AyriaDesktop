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
	$("#Contentdiv").load(page);
}