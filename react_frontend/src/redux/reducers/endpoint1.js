import {CLEAR_ENDPOINT1, SET_ENDPOINT1} from '../actionTypes';


const initialState = [];


const endpoint1 = (state = initialState, action) => {
	switch (action.type) {
		case (SET_ENDPOINT1):
			return action.endpoint1;

		case (CLEAR_ENDPOINT1):
			return initialState;

		default:
			return state;
	}
};
export default endpoint1;
