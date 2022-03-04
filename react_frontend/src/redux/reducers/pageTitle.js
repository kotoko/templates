import {SET_PAGETITLE} from '../actionTypes';


const initialState = 'Hello!';


const pageTitle = (state = initialState, action) => {
	switch (action.type) {
		case (SET_PAGETITLE):
			return action.pageTitle;

		default:
			return state;
	}
};
export default pageTitle;
