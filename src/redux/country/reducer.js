import {
  LOAD_COUNTRIES_REQUEST,
  LOAD_COUNTRIES_SUCCESS,
  LOAD_COUNTRIES_FAILURE
} from "./actions";

const country = (
  state = {
    loading: false,
    data: {}
  },
  action
) => {
  switch (action.type) {
    case LOAD_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOAD_COUNTRIES_SUCCESS:
      console.log(action.countries);
      return {
        loading: false,
        data: action.countries,
        error: null
      };
    case LOAD_COUNTRIES_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.error
      };

    default:
      return state;
  }
};

export default country;
