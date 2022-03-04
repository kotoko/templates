import {SET_PAGETITLE} from '../actionTypes';


const setPageTitle = (pageTitle) => ({
	type: SET_PAGETITLE,
	pageTitle: pageTitle,
});
export {setPageTitle as setPageTitleAction};
