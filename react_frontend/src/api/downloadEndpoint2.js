import {fetchEndpoint2Api} from 'utils/api';
import {wrapperApi} from 'utils/api';


export const downloadEndpoint2 = (setIsPending, onSuccess, onFailure) => wrapperApi(
	fetchEndpoint2Api,
	setIsPending,
	(data) => {
		const {def} = data;
		onSuccess(def);
	},
	onFailure,
);

