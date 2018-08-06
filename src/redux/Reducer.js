var Reducer = function(state,Action){
	if(typeof state === 'undefined'){
		return '';
	}
	switch (Action.type){
		case 'user':
			return Action.text
			break;
			
		default:
			return state;
			break;
	}
}




export default Reducer;