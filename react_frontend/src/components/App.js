import React from 'react';

import 'assets/css/base.css';
import 'assets/css/normalize.css';
import 'assets/css/fonts.scss';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {DownloadPage} from 'components/pages/DownloadPage';
import {LoremIpsumPage} from 'components/pages/LoremIpsumPage';
import {MainPage} from 'components/pages/MainPage';
import {NotFoundPage} from 'components/pages/NotFoundPage';
import {ReduxPage} from 'components/pages/ReduxPage';
import {TextPage} from 'components/pages/TextPage';
import withRedux from 'components/withRedux';


export const App = withRedux((appProps) => (
	<BrowserRouter {...appProps}>
		<Routes>
			<Route path='/' element={<Navigate to='/welcome' />} />
			<Route path='/index.html' element={<Navigate to='/welcome' />} />
			<Route path='/welcome' element={<MainPage />} />
			<Route path='/lorem-ipsum' element={<LoremIpsumPage />} />
			<Route path='/text/:parameterHex' element={<TextPage />} />
			<Route path='/redux' element={<ReduxPage />} />
			<Route path='/download' element={<DownloadPage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	</BrowserRouter>
));

export default App;
