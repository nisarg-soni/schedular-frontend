import { DELETE_INTERVIEW, FETCH_INTERVIEWS, NEW_INTERVIEW } from '../actions/types';

const initialState = {
	items: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_INTERVIEWS:
			return {
				...state,
				items: action.payload
			};
		case NEW_INTERVIEW:
			const tempA = state.items;
			return {
				...state,
				items: [ ...tempA, action.payload ]
			};
		case DELETE_INTERVIEW:
			const tempB = state.items.filter((one) => {
				return one.id !== action.payload.id;
			});
			return {
				...state,
				items: tempB
			};
		default:
			return state;
	}
};
