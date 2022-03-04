/* eslint no-console: "off" */

import {isDev} from 'utils/isDev';

let browser = null;

if (isDev) {
	browser = {
		'console': {
			'debug': (...params) => console.debug(...params),
			'error': (...params) => console.error(...params),
			'log': (...params) => console.log(...params),
			'warn': (...params) => console.warn(...params),
		},
	};
}
else {
	const noop = () => {};
	browser = {
		'console': {
			'debug': noop,
			'error': noop,
			'log': noop,
			'warn': noop,
		},
	};
}
export default browser;
