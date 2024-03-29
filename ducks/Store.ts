const { combineReducers, createStore, applyMiddleware } = require('redux');
const { default: thunk } = require('redux-thunk');
import play from './modules/Play';

const reducer = combineReducers({
	play,
});

export type RootState = ReturnType<typeof reducer>;
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
