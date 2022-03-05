import React from 'react';

import {createStore} from 'redux';
import isDev from 'utils/isDev';
import {Provider} from 'react-redux';
import reducer from 'redux/reducer';


const reduxDevtoolsExtension = isDev ? require('@redux-devtools/extension') : null;
const store = isDev ? createStore(reducer, reduxDevtoolsExtension.devToolsEnhancer()) : createStore(reducer);


function withRedux(Component) {
	function withReduxProvider(props) {
		return (
			<Provider store={store}>
				<Component {...props} />
			</Provider>
		);
	}

	return withReduxProvider;
}
export default withRedux;
