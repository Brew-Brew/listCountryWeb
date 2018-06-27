export const NAME = "META";

export const CLEAR_META = `${NAME}/CLEAR_META`;
export const SET_META = `${NAME}/SET_META`;

export function setMeta(meta) {
  return {
    type: SET_META,
    meta
  };
}

export function clearMeta(keys) {
  return {
    type: CLEAR_META,
    keys
  };
}
