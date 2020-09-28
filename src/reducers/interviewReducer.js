import { DELETE_INTERVIEW, FETCH_INTERVIEWS, NEW_INTERVIEW, SHOW_INTERVIEW, UPDATE_INTERVIEW } from '../actions/types';

const initialState = {
	items: [],
	item: {}
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
		case UPDATE_INTERVIEW:
			return {
				...state,
				item: {}
			};
		case SHOW_INTERVIEW:
			return {
				...state,
				item: action.payload
			};
		default:
			return state;
	}
};
