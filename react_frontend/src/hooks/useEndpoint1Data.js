import {downloadEndpoint1} from 'api/downloadEndpoint1';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {useState} from 'react';


export function useEndpoint1Data() {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => downloadEndpoint1(setIsLoading, dispatch), [setIsLoading, dispatch]);
	return [isLoading];
}

export default useEndpoint1Data;
