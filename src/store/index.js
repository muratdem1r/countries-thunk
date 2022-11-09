import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
  countries: [],
  isLoading: false,
  error: {},
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRIES_START":
      return { ...state, isLoading: true, message: "" };
    case "GET_COUNTRIES_SUCCESS":
      return {
        ...state,
        countries: action.payload,
        error: {},
        isLoading: false,
      };
    case "GET_COUNTRIES_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

const store = createStore(countriesReducer, applyMiddleware(thunk));

export default store;
