import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxReset from 'redux-reset';

import rootReducers from './index';

const enHanceCreateStore = compose(
	applyMiddleware(thunk),
	reduxReset() // Will use 'RESET' as default action.type to trigger reset
)(createStore);
export const store = enHanceCreateStore(rootReducers);
