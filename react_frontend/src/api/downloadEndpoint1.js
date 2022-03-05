import browser from 'utils/browser';
import {clearEndpoint1Action} from 'redux/actions/clearEndpoint1';
import {fetchEndpoint1Api} from 'utils/api';
import {setEndpoint1Action} from 'redux/actions/setEndpoint1';
import {wrapperApi} from 'utils/api';


export const downloadEndpoint1 = (setIsPending, dispatch) => wrapperApi(
	fetchEndpoint1Api,
	setIsPending,
	(data) => {
		const {abc} = data;
		dispatch(setEndpoint1Action(abc));
	},
	(e) => {
		browser.console.error('Error occurred while downloading from endpoint1!');
		browser.console.error(e);
		window.alert('Error occurred while downloading from endpoint1!');
		dispatch(clearEndpoint1Action());
	},
);

