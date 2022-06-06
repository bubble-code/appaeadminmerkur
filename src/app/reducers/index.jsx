import { combineReducers } from 'redux';
import merkurReducer from './reducers';
import checkLReducer from './checkReducer'
import comunidadesReduce from './comunidadesReduce';
import userReducer from '../../features/userSlice';
import rouletteDataRecuder from './rouletteReducer';
export default combineReducers({ salones: merkurReducer, checklist: checkLReducer, comunidades: comunidadesReduce, user: userReducer, roulette: rouletteDataRecuder });