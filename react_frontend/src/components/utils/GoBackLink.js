import React from 'react';

import {Link} from 'react-router-dom';


export const GoBackLink = (props) => (
	<p><Link to={-1}>Go Back</Link></p>
);
export default GoBackLink;
