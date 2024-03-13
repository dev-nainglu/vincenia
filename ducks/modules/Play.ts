import { AnyAction, Dispatch } from 'redux';
import { logic } from '../../constants';

interface State {
	points: number;
	round: number;
	loading: boolean;
	wageAmount: number | null;
	currentRound: number;
	didWin: boolean | null;
	showIntro: boolean;
	showHowto: boolean;
}

const initialState = {
	points: logic.defaultPoints,
	wageAmount: 100,
	currentRound: 0,
	didWin: null,
	showIntro: true,
	showHowto: false
};

export const ADD_POINTS = 'add_points';
export const DEDUCT_POINTS = 'deduct_points';
export const UPDATE_WAGE = 'update_wage';
export const UPDATE_WAGE_AMOUNT = 'update_wage_amount';
export const UPDATE_ROUND = 'update_round';
export const UPDATE_SHOW_INTRO = 'update_show_intro';

const PlayReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case 'UPDATE_LOADING_STATUS':
			return {
				...state,
				loading: action.payload,
			};
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
		case 'UPDATE_WAGE_AMOUNT':
			return {
				...state,
				wageAmount: action.payload,
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
		case 'UPDATE_SHOW_INTRO':
			return {
				...state,
				showIntro: action.payload,
			}
		case 'UPDATE_SHOW_HOWTO':
			return {
				...state,
				showHowto: action.payload,
			}
		default:
			return state;
	}
};

export const updateLoadingStatus = (status: boolean) => {
	return async (dispatch: Dispatch) => {
		dispatch({
			type: 'UPDATE_LOADING_STATUS',
			payload: status,
		});
	};
};

export const addPoints = (points: number) => {
	return async (dispatch: Dispatch) => {
		dispatch({
			type: 'ADD_POINTS',
			payload: points,
		});
	};
};

export const subtractPoints = (points: number) => {
	return async (dispatch: Dispatch) => {
		dispatch({
			type: 'DEDUCT_POINTS',
			payload: points,
		});
	};
};

export const updateWage = (wageAmount: number | null) => {
	return async (dispatch: Dispatch) => {
		dispatch({ type: 'UPDATE_WAGE_AMOUNT', payload: wageAmount });
	};
};

export const updateRound = (round: number) => {
	return async (dispatch: Dispatch) => {
		dispatch({ type: 'UPDATE_ROUND', payload: round });
	};
};

export const updateResult = (result: boolean | null) => {
	//results should be true for win and false for loss
	return async (dispatch: Dispatch) => {
		dispatch({ type: 'UPDATE_RESULT', payload: result });
	};
};

export const updateShowIntro = (result: boolean) => {
	//hide intro for next times
	return async (dispatch: Dispatch) => {
		dispatch({ type: 'UPDATE_SHOW_INTRO', payload: result });
	};
};

export const updateShowHowto = (result: boolean) => {
	//hide intro for next times
	return async (dispatch: Dispatch) => {
		dispatch({ type: 'UPDATE_SHOW_HOWTO', payload: result });
	};
};

export default PlayReducer;
