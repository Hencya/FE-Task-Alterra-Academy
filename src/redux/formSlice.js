import { createSlice } from "@reduxjs/toolkit";

export const sliceForm = createSlice({
  name: "form",
  initialState: {
    forms: null,
  },
  reducers: {
    passData: (state, action) => {
      state.forms = action.payload;
    },
  },
});

export const { passData, deleteData } = sliceForm.actions;
export default sliceForm.reducer;
