import { combineReducers } from '@reduxjs/toolkit';

const initialState = {
	currentNews: null
};

const initialReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'changeCurrentNews':
			return { ...state, currentNews: action.payload };
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	default: initialReducer,
});

export default rootReducer;
