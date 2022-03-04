import React from 'react';

import {GoBackLink} from 'components/utils/GoBackLink';
import {Title} from 'components/utils/Title';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {setPageTitleAction} from 'redux/actions/setPageTitle';


export const ReduxPage = (props) => {
	const title = useSelector(state => state.pageTitle);
	const [text, setText] = useState(title);
	const dispatch = useDispatch();

	const onSave = () => {
		dispatch(setPageTitleAction(text));
	};

	return (
		<>
			<Title />
			<GoBackLink />
			<h2>Change title</h2>
			<p><textarea value={text} onChange={(e) => setText(e.target.value)} /></p>
			<p><button onClick={onSave} >Save</button></p>
		</>
	);
};
export default ReduxPage;
