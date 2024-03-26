import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allItems: Array.from({ length: 49 }, () => ({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
  })),
};

export const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { index, field, value } = action.payload;
      state.allItems[index][field] = value;
    },

  },
});

// Action creators are generated for each case reducer function
export const { updateField  } = reportSlice.actions;

export default reportSlice.reducer;
