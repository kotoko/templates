import React from 'react';

import {GoBackLink} from 'components/utils/GoBackLink';
import {Title} from 'components/utils/Title';
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {setPageTitleAction} from 'redux/actions/setPageTitle';


export const ReduxPage = (props) => {
	const title = useSelector(state => state.pageTitle);
	const [text, setText] = useState(title);
	const dispatch = useDispatch();

	const onSave = useCallback(() => {
		dispatch(setPageTitleAction(text));
	}, [dispatch, text]);

	return (
		<>
			<Title />
			<GoBackLink />
			<h2>Change title</h2>
			<p><textarea value={text} onChange={useCallback((e) => setText(e.target.value), [setText])} /></p>
			<p><button onClick={onSave} >Save</button></p>
		</>
	);
};
export default ReduxPage;
