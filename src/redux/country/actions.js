export const NAME = "COUNTRY";

export const LOAD_COUNTRIES = `${NAME}/LOAD_COUNTRIES`;
export const LOAD_COUNTRIES_REQUEST = `${NAME}/LOAD_COUNTRIES_REQUEST`;
export const LOAD_COUNTRIES_SUCCESS = `${NAME}/LOAD_COUNTRIES_SUCCESS`;
export const LOAD_COUNTRIES_FAIL = `${NAME}/LOAD_COUNTRIES_FAIL`;
export const SORT_COUNTRIES = `${NAME}/SORT_COUNTRIES`;

export function loadCountries() {
  return {
    type: LOAD_COUNTRIES
  };
}
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
export function sortCountries(sortInfo) {
  return {
    type: SORT_COUNTRIES,
    sortInfo
  };
}
