import React from 'react';

import {downloadEndpoint2} from 'api/downloadEndpoint2';
import {GoBackLink} from 'components/utils/GoBackLink';
import {clearEndpoint2Action} from 'redux/actions/clearEndpoint2';
import {setEndpoint2Action} from 'redux/actions/setEndpoint2';
import {Title} from 'components/utils/Title';
import {useDispatch} from 'react-redux';
import {useEndpoint1Data} from 'hooks/useEndpoint1Data';
import {useSelector} from 'react-redux';
import {useState} from 'react';


const AutoDownload = ({isPending, value}) => (
	<>
		<h3>Automatically download on page load:</h3>
		<p>
			status: {isPending ? 'IN_PROGRESS' : 'IDLE'}
			<br />
			value: {isPending ? '' : JSON.stringify(value)}
		</p>
	</>
);


const ManualDownload = ({value}) => {
	const [isPending, setIsPending] = useState(false);
	const [result, setResult] = useState('');
	const dispatch = useDispatch();

	// Clicking download button
	const onDownloadSuccess = (data) => {dispatch(setEndpoint2Action(data)); setResult('SUCCESS')};
	const onDownloadFailure = () => {dispatch(clearEndpoint2Action()); setResult('FAILURE');};
	const onDownload = () => downloadEndpoint2(setIsPending, onDownloadSuccess, onDownloadFailure);

	return (
		<>
			<h3>Download on user click:</h3>
			<p>
				status: {isPending ? 'IN_PROGRESS' : 'IDLE'}
				<br />
				result: {isPending ? '' : result}
				<br />
				value: {isPending ? '' : JSON.stringify(value)}
			</p>
			<p><button disabled={isPending} onClick={onDownload}>Download</button></p>
		</>
	);
};


export const DownloadPage = (props) => {
	const [isPending1] = useEndpoint1Data();
	const endpoint1 = useSelector(state => state.endpoint1);
	const endpoint2 = useSelector(state => state.endpoint2);

	return (
		<>
			<Title />
			<GoBackLink />
			<h2>Backend request</h2>
			<p>This is simulation. Instead of calling &apos;fetch()&apos; I manually create &apos;Promise()&apos; that returns hardcoded value after small delay.</p>
			<AutoDownload isPending={isPending1} value={endpoint1}/>
			<ManualDownload value={endpoint2}/>
		</>
	);
};
export default DownloadPage;
