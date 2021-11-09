import { combineReducers } from "redux";
import { productReducer, selectCategoryReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  catProducts: selectCategoryReducer
});

export default reducers;