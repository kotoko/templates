import {combineReducers} from 'redux';
import pageTitle from './reducers/pageTitle';
import endpoint1 from './reducers/endpoint1';
import endpoint2 from './reducers/endpoint2';


export default combineReducers({
	pageTitle,
	endpoint1,
	endpoint2,
});
