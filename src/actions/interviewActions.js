import { DELETE_INTERVIEW, FETCH_INTERVIEWS, NEW_INTERVIEW, SHOW_INTERVIEW } from './types';

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
	fetch(url + `/${id}`).then((res) => res.json()).then((interview) =>
		dispatch({
			type: SHOW_INTERVIEW,
			payload: interview
		})
	);
};

export const deleteInterview = (id) => (dispatch) => {
	fetch(url + `/${id}`, {
		method: 'DELETE'
	})
		.then((res) => res.json())
		.then((interview) =>
			dispatch({
				type: DELETE_INTERVIEW,
				payload: interview.data
			})
		);
};
