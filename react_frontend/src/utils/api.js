/* eslint no-magic-numbers: "off" */
/* eslint no-unused-vars: "off" */
const config = {
	host: '[::1]',
	port: 5000,
};


const prefix = () => `http://${config.host}:${config.port}/api`;


const wrapper = (f, setIsPending, onSuccess, onFailure) => {
	async function fetchData() {
		setIsPending(true);
		try {
			const data = await f();
			onSuccess(data);
		}
		catch (e) {
			onFailure(e);
		}
		finally {
			setIsPending(false);
		}
	}
	fetchData();
};


const handleHttpError = (response) => {
	if (response.ok !== true) {
		throw new Error(`http response: ${response.status}`);
	}
	return response;
};


const doBackendRequest = (url, method, json = {}) => (
	fetch(`${prefix()}${url}`, {
		method: method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(json),
	})
		.then(handleHttpError)
		.then((response) => response.json())
);


/* For testing purposes only. */
const doBackendRequestMock = (data) => new Promise((resolve, reject) => {
	const waitTime = 1250;
	setTimeout(() => resolve(data), waitTime);
});


//const fetchEndpoint1 = () => doBackendRequest('/get-endpoint1', 'GET');
const fetchEndpoint1 = () => doBackendRequestMock({abc: [1, 2, 4, 8, 16, new Date().getSeconds()]});
//const fetchEndpoint2 = () => doBackendRequest('/get-endpoint2', 'GET');
const fetchEndpoint2 = () => doBackendRequestMock({def: [1, 3, 9, 27, new Date().getSeconds()]});


// *** Exports ***
export {fetchEndpoint1 as fetchEndpoint1Api};
export {fetchEndpoint2 as fetchEndpoint2Api};
export {wrapper as wrapperApi};
