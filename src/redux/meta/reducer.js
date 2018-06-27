import { SET_META, CLEAR_META } from "./actions";

const initState = { meta: "meta" };

const meta = (state = initState, action) => {
  switch (action.type) {
    case SET_META:
      return {
        ...state,
        ...action.meta
      };
    case CLEAR_META: {
      const { keys } = action;
      let nextState;
      if (keys) {
        // 해당 key 만 clear
        nextState = { ...state };

        keys.forEach(key => {
          delete nextState[key];
        });
      } else {
        // 모두 clear
        nextState = initState;
      }

      return nextState;
    }

    default:
      return state;
  }
};

export default meta;
