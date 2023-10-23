/* eslint-disable no-param-reassign */
import { IUser } from "@/interfaces/IUser";
import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    data: null as IUser | null
  },
  reducers: {
    login: (
      state,
      action: {
        payload: IUser;
      }
    ) => {
      const { payload } = action;
      state.data = payload;
    },

    logout: state => {
      state.data = null;
    },

    updateProfile: (
      state,
      action: {
        payload: Partial<IUser>;
      }
    ) => {
      const { payload } = action;

      if (state) {
        // for (let value in payload) {
        //   const key = value as keyof IUser;
        //   state[key] = payload[key]! ;
        // }
      }
    }
  }
});

export const authSliceActions = AuthSlice.actions;

export const AuthSliceReducer = AuthSlice.reducer;
