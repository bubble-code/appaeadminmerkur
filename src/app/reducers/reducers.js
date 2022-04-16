import { LIST_SALONES_COMUNIDAD } from "../actions/types";

const initialState = { salones: [] };

const merkurReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(type);
  console.log(payload);
  switch (type) {
    case LIST_SALONES_COMUNIDAD:
      console.log(payload)
      return { salones: [payload] };
    default:
      return state;

  }
}

export default merkurReducer;