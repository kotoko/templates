import React from 'react';

import {GoBackLink} from 'components/utils/GoBackLink';
import {Title} from 'components/utils/Title';


export const NotFoundPage = (props) => (
	<>
		<Title />
		<GoBackLink />
		<h2>404 - Page not found</h2>
	</>
);
export default NotFoundPage;
