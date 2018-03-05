import { REDUCE,ADD } from "../action/actions";
import { combineReducers } from 'redux'

const initialState={
	array:['8','7','6','4','10']
}


const addReducer=(state = initialState , action) => {
	state = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case REDUCE :
			state.array.pop('')
			return Object.assign({}, state, { array:state.array });
		case ADD :
			state.array.push(action.text.text1)
			console.log(action.text)
			return Object.assign({}, state, { array:state.array });
		default:
			return state;
	}
}



const reducer = combineReducers({ 
    addReducer
});

export default reducer;
