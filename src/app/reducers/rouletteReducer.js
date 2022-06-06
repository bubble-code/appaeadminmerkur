import { ADD_DATA_ROULETTE } from '../actions/types';

const initialState = { rouletteData: [] };

const rouletteDataRecuder = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_DATA_ROULETTE:
      return { rouletteData: payload };

    default:
      return state;
  }
}

export default rouletteDataRecuder;