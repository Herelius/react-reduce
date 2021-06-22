import {
  DECREMENT,
  INCREMENT,
  INCREMENT_STEP,
  DECREMENT_STEP,
} from "./counter.action";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_STEP:
      return { ...state, step: state.step + 1 };
    case INCREMENT:
      return { ...state, counter: state.counter + state.step };
    case DECREMENT_STEP:
      return { ...state, step: state.step - 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - state.step };
    default:
      return { ...state, counter: state.counte, step: state.step };
  }
};

export default reducer;
