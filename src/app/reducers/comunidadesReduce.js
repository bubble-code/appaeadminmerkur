import { LIST_COMUNIDAD } from "../actions/types";

const initialState = { comunidades: [] };

const comunidadesReduce = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_COMUNIDAD:
      return { comunidades: payload }
    default:
      return state;
  }
}

export default comunidadesReduce;