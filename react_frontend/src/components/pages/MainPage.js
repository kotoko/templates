import React from 'react';


import {Link} from 'react-router-dom';
import {string2hex} from 'utils/utils';
import {Title} from 'components/utils/Title';
import {useEffect} from 'react';
import {useState} from 'react';


const SimpleSubpage = ({nr}) => (
	<>
		<h2>{nr}. Subpage (react-router)</h2>
		<p><Link to='/lorem-ipsum'>Link to another subpage</Link>.</p>
	</>
);


const PassParameterSubpage = ({nr}) => {
	const [text, setText] = useState('param1');
	const [url, setUrl] = useState('/text');

	// It probably makes more sense to only
	// calculate url when link is clicked and not
	// every time when variable 'text' is changed.
	useEffect(() => {
		const textHex = string2hex(text);
		setUrl('/text/' + textHex);
	}, [text, setUrl]);

	return (
		<>
			<h2>{nr}. Parameter inside link (react-router + utf-8 escaping)</h2>
			<p>You may want to pass parameters inside link (e.g. identificator of something). You can pass any text string via text box below. Try passing utf-8 characters or emojis.</p>
			<p>
				<textarea value={text} onChange={(e) => setText(e.target.value)} />
				<br />
				<Link to={url}>Show page with content passed trough link</Link>
			</p>
		</>
	);
};


const ChangeReduxSubpage = ({nr}) => (
	<>
		<h2>{nr}. Change title (redux)</h2>
		<p>Title on black background is saved in redux store. You can change title on <Link to='/redux'>this subpage</Link>.</p>
	</>
);


const DownloadSubpage = ({nr}) => (
	<>
		<h2>{nr}. Backend request (fetch)</h2>
		<p><Link to='/download'>Subpage with simulation of downloading</Link> from backend/rest api.</p>
	</>
);


const NotFoundSubpage = ({nr}) => (
	<>
		<h2>{nr}. Not found page</h2>
		<p>Default subpage when you go to the <Link to='/Ht0b23ju9T63t91S'>page/link that does not exist</Link>.</p>
	</>
);


export const MainPage = () => (
	<>
		<Title />
		<SimpleSubpage nr={1}/>
		<PassParameterSubpage nr={2}/>
		<ChangeReduxSubpage nr={3}/>
		<DownloadSubpage nr={4}/>
		<NotFoundSubpage nr={5}/>
	</>
);
export default MainPage;
