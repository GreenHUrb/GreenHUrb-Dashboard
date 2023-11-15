/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

type ITheme = "light" | "dark";

export type IPage = "Dashboard" | "Product" | "Payments" | "Transactions" | "Settings";

export const AppSlice = createSlice({
  name: "App",
  initialState: {
    theme: "light" as ITheme,
    currentPage: "" as IPage,
    sidebarStatus: false,
    isMobile: false,
    appLoading: false
  },
  reducers: {
    /**
     *
     * @param state
     * @param action
     * This toggles the theme of the application as a whole
     */
    toggleTheme: (
      state,
      action: {
        payload: ITheme;
      }
    ) => {
      const { payload } = action;
      state.theme = payload;
    },

    setCurrentPage: (
      state,
      action: {
        payload: IPage;
      }
    ) => {
      const { payload } = action;
      state.currentPage = payload;
    },

    toggleSidebar: (
      state,
      action: {
        payload: boolean;
      }
    ) => {
      state.sidebarStatus = action.payload;
    },
    setIsMobile: (
      state,
      action: {
        payload: boolean;
      }
    ) => {
      state.isMobile = action.payload;
    },

    /**
     * 
     * @param state 
     * @param action 
     */
    toggleAppLoader: (
      state,
      action: {
        payload: boolean;
      }
    ) => {
      state.appLoading = action.payload;
    }
  }
});

export const appSliceActions = AppSlice.actions;

export const AppSliceReducer = AppSlice.reducer;
