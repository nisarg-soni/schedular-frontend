import { DELETE_INTERVIEW, FETCH_INTERVIEWS, NEW_INTERVIEW, SHOW_INTERVIEW, UPDATE_INTERVIEW } from './types';

const url = 'http://localhost:3001/api/v1/interviews';

export const fetchInterviews = () => (dispatch) => {
	// console.log('Here');
	fetch(url).then((res) => res.json()).then((interviews) =>
		dispatch({
			type: FETCH_INTERVIEWS,
			payload: interviews.data
		})
	);
};

export const createInterview = (interviewData) => (dispatch) => {
	fetch(url, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(interviewData)
	})
		.then((res) => res.json())
		.then((interview) =>
			dispatch({
				type: NEW_INTERVIEW,
				payload: interview.data
			})
		);
};

export const showInterview = (id) => (dispatch) => {
	fetch(url + `/${id}`).then((res) => res.json()).then((interview) => {
		// console.log();
		interview.data.start = getTime(interview.data.start);
		interview.data.finish = getTime(interview.data.finish);
		return dispatch({
			type: SHOW_INTERVIEW,
			payload: interview.data
		});
	});
};

export const deleteInterview = (id) => (dispatch) => {
	fetch(url + `/${id}`, {
		method: 'DELETE'
	})
		.then((res) => res.json())
		.then((interview) => {
			return dispatch({
				type: DELETE_INTERVIEW,
				payload: interview.data
			});
		});
};

export const updateInterview = (interviewData) => (dispatch) => {
	fetch(url + `/${interviewData.id}`, {
		method: 'PATCH',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(interviewData)
	})
		.then((res) => res.json())
		.then((interview) =>
			dispatch({
				type: UPDATE_INTERVIEW,
				payload: interview.data
			})
		);
};

const getTime = (str) => {
	let tt = new Date(str);

	let result = tt.toLocaleTimeString();

	if (tt[1] === ':') result = '0' + result;

	return `${result.slice(0, 5)}`;
};
