import { SET_META, CLEAR_META, CLEAR_SEARCH } from "./actions";

const initState = { sort: "default", searchData: "" };

const meta = (state = initState, action) => {
  switch (action.type) {
    case SET_META:
      return {
        ...state,
        ...action.meta
      };
    case CLEAR_SEARCH: {
      return {
        ...state,
        searchData: ""
      };
    }
    default:
      return state;
  }
};

export default meta;
