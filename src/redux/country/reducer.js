import {
  LOAD_COUNTRIES_REQUEST,
  LOAD_COUNTRIES_SUCCESS,
  LOAD_COUNTRIES_FAILURE,
  FILTER_COUNTRIES_SUCCESS,
  CLEAR_FILTER_DATA
} from "./actions";

const country = (
  state = {
    loading: false,
    data: [],
    filteredData: []
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
    case FILTER_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        filteredData: action.countries,
        error: null
      };
    case CLEAR_FILTER_DATA:
      return {
        ...state,
        filteredData: ""
      };

    default:
      return state;
  }
};

export default country;
