/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

type ITheme = "light" | "dark";
export type IPage = "Dashboard" | "Product" | "Payments" | "Transactions" | "Settings" | "Account Settings";


export const pageInfoSlice = createSlice({
  name: "pageInfo",
  initialState: {
    theme: "light" as ITheme,
    currentPage: "" as IPage,
    sidebarStatus: false,
    isMobile: false
  },
  reducers: {
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
    }
  }
});

export const { toggleTheme, toggleSidebar, setCurrentPage } = pageInfoSlice.actions;

export default pageInfoSlice.reducer;
