import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user";
import compReducer from '../features/comp';

const store = configureStore({
  reducer: {
    user: userReducer,
    comp: compReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;