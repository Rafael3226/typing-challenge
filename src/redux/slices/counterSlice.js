import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    text: '',
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
  },
});

// Action creators are generated for each case reducer function
export const { setText, setResults } = counterSlice.actions;

export default counterSlice.reducer;
