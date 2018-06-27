export const NAME = "COUNTRY";

export const LOAD_COUNTRIES_REQUEST = `${NAME}/LOAD_COUNTRIES_REQUEST`;
export const LOAD_COUNTRIES_SUCCESS = `${NAME}/LOAD_COUNTRIES_SUCCESS`;
export const LOAD_COUNTRIES_FAIL = `${NAME}/LOAD_COUNTRIES_FAIL`;
export function loadCountriesRequest(countries) {
  return {
    type: LOAD_COUNTRIES_REQUEST
  };
}

export function loadCountriesSuccess(countries) {
  return {
    type: LOAD_COUNTRIES_SUCCESS,
    countries
  };
}
export function loadCountriesFail(error) {
  return {
    type: LOAD_COUNTRIES_FAIL,
    error
  };
}
