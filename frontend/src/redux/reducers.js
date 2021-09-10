import {
  GET_TEXT_DATA_SUCCESS,
  GET_TEXT_DATA_FAILURE,
  GET_TEXT_DATA_START,
} from "./constants";

let initialState = {
  loading: false,
  error: false,
  data: [],
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEXT_DATA_START:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case GET_TEXT_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GET_TEXT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [
          {
            origin: action.text.text,
            ...action.res,
          },
          ...state.data,
        ],
      };
    default:
      return state;
  }
}
