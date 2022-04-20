import { LIST_SALONES_COMUNIDAD, LIST_AVERIAS_SALON, LIST_CHECKLIST } from "../actions/types";

const initialState = { salones: [] };

const merkurReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_SALONES_COMUNIDAD:
      return { salones: payload.salones };
    case LIST_AVERIAS_SALON:
      return { salones: payload }
    default:
      return state; 

  }
}

export default merkurReducer;