import { LIST_SALONES_COMUNIDAD, LIST_AVERIAS_SALON, ADD_SALON } from "../actions/types";

const initialState = { salones: [] };

const merkurReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_SALONES_COMUNIDAD:
      return { salones: payload.salones };
    case ADD_SALON:
      return { salones: [...state.salones, payload] }
    case LIST_AVERIAS_SALON:
      return { salones: payload }
    default:
      return state;

  }
}

export default merkurReducer;