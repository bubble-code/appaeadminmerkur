import { combineReducers } from 'redux';
import merkurReducer from './reducers';
import checkLReducer from './checkReducer'

export default combineReducers({ salones: merkurReducer, checklist: checkLReducer });