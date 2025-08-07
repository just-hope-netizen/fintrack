import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface sidebarState {
  value: boolean;
}

const initialState: sidebarState = {
  value: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { open, close, toggle } = sidebarSlice.actions;

export default sidebarSlice.reducer;
