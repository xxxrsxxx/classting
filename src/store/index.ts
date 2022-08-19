import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducers } from "./classting";
const commerceRoot = combineReducers(reducers);
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, commerceRoot);

export const store = configureStore({
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  reducer: { classting: persistedReducer },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
