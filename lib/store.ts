import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/usersSlice";
import { apiSlice } from "./features/appSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
