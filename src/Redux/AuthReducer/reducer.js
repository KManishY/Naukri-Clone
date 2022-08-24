import * as types from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = payload;
  switch (type) {
    case types.REGISTER_REQUEST:
      return { ...state, isLoading: true };

    case types.REGISTER_SUCCESS:
      return { ...state, isLoading: false };
    case types.REGISTER_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default: {
      return state;
    }
  }
};
