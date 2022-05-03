import { LIST_CHECKLIST, CREATE_CHECKLIST } from "../actions/types";

const initialState = { checklist: [] };

const checkLReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_CHECKLIST:
      return { checklist: payload }
    case CREATE_CHECKLIST:
      return { checklist: [...state.checklist, payload] }
    default:
      return state;
  }
}

export default checkLReducer;