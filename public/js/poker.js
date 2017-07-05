var card_display_allow_drop = function(ev){
	ev.preventDefault();
	console.log("allow drop");
}
	
var card_display_drop = function(ev){
	ev.preventDefault();
	console.log("drop");
}

var card_drag_start = function(ev){
	console.log("drag start");
}