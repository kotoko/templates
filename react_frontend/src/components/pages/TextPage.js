import React from 'react';

import {GoBackLink} from 'components/utils/GoBackLink';
import {hex2string} from 'utils/utils';
import {Title} from 'components/utils/Title';
import {useParams} from 'react-router-dom';


export const TextPage = (props) => {
	const {parameterHex} = useParams();
	const text = hex2string(parameterHex);

	return (
		<>
			<Title />
			<GoBackLink />
			<h2>Parameter inside link</h2>
			<p>START</p>
			<pre>{text}</pre>
			<p>END</p>
		</>
	);
};
export default TextPage;
