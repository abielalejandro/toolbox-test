import fetch from "cross-fetch";
import * as types from "./constants";

const getTextDataStart = (text) => {
  return {
    type: types.GET_TEXT_DATA_START,
    text,
  };
};

const getTextDataSuccess = (text, res) => {
  return {
    type: types.GET_TEXT_DATA_SUCCESS,
    text,
    res,
  };
};

const getTextDataFailure = (text) => {
  return {
    type: types.GET_TEXT_DATA_FAILURE,
    text,
  };
};

export function getTextData(data) {
  return async (dispatch) => {
    try {
      dispatch(getTextDataStart(data));
      const res = await fetch(
        `${process.env.REACT_APP_GATEWAY_PATH}/iecho?text=${data.text}`
      );

      if (res.status >= 400) {
        dispatch(getTextDataFailure(data));
        return;
      }

      const json = await res.json();

      dispatch(getTextDataSuccess(data, json.data));
    } catch (err) {
      dispatch(getTextDataFailure(data));
    }
  };
}
