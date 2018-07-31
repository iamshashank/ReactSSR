import {FETCH_CURRENT_USERS} from '../actions';

export default function(state = null,action){

	switch(action.type){
		case FETCH_CURRENT_USERS:
		//console.log("Reducer Called : ",action.payload.data);
		return action.payload.data || false;
		default:
		return state;
	}
}