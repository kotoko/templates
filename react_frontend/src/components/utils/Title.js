import React from 'react';

// Bug in create-react-app v5:
//   https://github.com/facebook/create-react-app/issues/11800
//import * as styles from './Title.module.css';
// Workaround:
import styles from './Title.module.css';
import {useSelector} from 'react-redux';


export const Title = (props) => {
	const text = useSelector((state) => state.pageTitle);

	return (
		<h1 className={styles.textHeader}>{text}</h1>
	);
};
