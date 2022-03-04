import {CLEAR_ENDPOINT2, SET_ENDPOINT2} from '../actionTypes';


const initialState = [];


const endpoint2 = (state = initialState, action) => {
	switch (action.type) {
		case (SET_ENDPOINT2):
			return action.endpoint2;

		case (CLEAR_ENDPOINT2):
			return initialState;

		default:
			return state;
	}
};
export default endpoint2;
