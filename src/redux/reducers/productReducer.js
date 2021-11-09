import { ActionTypes } from "../constants/action-type";

const initialState = {
  products: [],
};

const initialCat = {
  categories: [],
};


export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const selectCategoryReducer = (state = initialCat, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_CATEGORY:
      return { ...state, categories: payload };
    case ActionTypes.REMOVE_SELECTED_CATEGORY:
      return {};
    default:
      return state;
  }
};

