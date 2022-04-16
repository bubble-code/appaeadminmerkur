import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [thunk];

const stored = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default stored;
