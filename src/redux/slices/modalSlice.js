import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalPaste: false,
    modalResults: false,
  },
  reducers: {
    modalPaste: (state, action) => {
      state.modalPaste = action.payload;
    },
    modalResults: (state, action) => {
      state.modalResults = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { modalPaste, modalResults } = modalSlice.actions;

export default modalSlice.reducer;
