import { combineReducers } from 'redux';
import merkurReducer from './reducers';

export default combineReducers({ salones: merkurReducer });