import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducers from './index';

export const store = createStore(rootReducers, applyMiddleware(thunk));
