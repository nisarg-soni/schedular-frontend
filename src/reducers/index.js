import { combineReducers } from 'redux';
import interviewReducer from './interviewReducer';

export default combineReducers({
	interviews: interviewReducer
});
