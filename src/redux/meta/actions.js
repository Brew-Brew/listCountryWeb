export const NAME = "META";

export const CLEAR_SEARCH = `${NAME}/CLEAR_SEARCH`;
export const SET_META = `${NAME}/SET_META`;
export const SEARCH_DATA = `${NAME}/SEARCH_DATA`;

export function setMeta(meta) {
  return {
    type: SET_META,
    meta
  };
}

export function clearSearch() {
  return {
    type: CLEAR_SEARCH
  };
}

export function searchData(data) {
  return {
    type: SEARCH_DATA,
    data
  };
}
