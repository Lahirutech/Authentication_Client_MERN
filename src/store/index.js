import { configureStore, createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});
const persistedReducer = persistReducer(persistConfig, authSlice.reducer)


export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]

});
export const persistor = persistStore(store)

 