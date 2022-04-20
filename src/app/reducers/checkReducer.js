import { LIST_CHECKLIST } from "../actions/types";

const initialState = { checklist: [] };

const checkLReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_CHECKLIST:
      return { checklist: payload }
    default:
      return state;
  }
}

export default checkLReducer;