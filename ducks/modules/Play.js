import { logic } from '../../pages/play/constants';

const initialState = {
	points: logic.defaultPoints,
	wage: 1,
	currentRound: 0,
	didWind: null,
};

export const ADD_POINTS = 'add_points';
export const DEDUCT_POINTS = 'deduct_points';
export const UPDATE_WAGE = 'update_wage';
export const UPDATE_ROUND = 'update_round';

const PlayReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_POINTS':
			return {
				...state,
				points: state.points + action.payload,
			};
		case 'DEDUCT_POINTS':
			return {
				...state,
				points: state.points - action.payload,
			};
		case 'UPDATE_WAGE':
			return {
				...state,
				wage: action.payload,
			};
		case 'UPDATE_ROUND':
			return {
				...state,
				currentRound: action.payload,
			};
		case 'UPDATE_RESULT':
			return {
				...state,
				didWin: action.payload,
			};
		default:
			return state;
	}
};

export const addPoints = (points) => {
	return async (dispatch) => {
		dispatch({
			type: ADD_POINTS,
			payload: points,
		});
	};
};

export const subtractPoints = (points) => {
	return async (dispatch) => {
		dispatch({
			type: DEDUCT_POINTS,
			payload: points,
		});
	};
};

export const updateWage = (wage) => {
	return async (dispatch) => {
		dispatch({ type: 'UPDATE_WAGE', payload: wage });
	};
};

export const updateRound = (round) => {
	return async (dispatch) => {
		dispatch({ type: 'UPDATE_ROUND', payload: round });
	};
};

export const updateResult = (result) => {
	//results should be true for win and false for loss
	return async (dispatch) => {
		dispatch({ type: 'UPDATE_RESULT', payload: result });
	};
};

export default PlayReducer;
