import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { AppSliceReducer, AuthSliceReducer, ProductSliceReducer } from "./slices";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["authSlice", "theme"]
};

const rootReducer = combineReducers({
  appSlice: AppSliceReducer,
  authSlice: AuthSliceReducer,
  productSlice: ProductSliceReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production"
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
