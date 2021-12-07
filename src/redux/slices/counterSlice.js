import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    text: '',
    editable: '',
    writtenWords: 0,
    correctWords: 0,
    wrongWords: 0,
  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload.text;
    },
    setResults: (state, action) => {
      state.writtenWords = action.payload.writtenWords;
      state.correctWords = action.payload.correctWords;
      state.wrongWords = action.payload.wrongWords;
    },
    setEditable: (state, action) => {
      state.editable = action.payload.editable;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setText, setResults, setEditable } = counterSlice.actions;

export default counterSlice.reducer;
