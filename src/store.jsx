import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/usersSlice";

const rootReducer = combineReducers({
  user: userReducer,
});

export default configureStore({
  reducer: rootReducer,
});
