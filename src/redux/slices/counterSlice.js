import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    text: '',
    guide: '',
    writtenWords: 0,
    correctWords: 0,
    wrongWords: 0,
    wordsByMinute: 0,
  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload.text;
    },
    setGuide: (state, action) => {
      state.guide = action.payload.guide;
    },
    setResults: (state, action) => {
      state.writtenWords = action.payload.writtenWords;
      state.correctWords = action.payload.correctWords;
      state.wrongWords = action.payload.wrongWords;
      state.wordsByMinute = action.payload.wordsByMinute;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setText, setResults, timerStart, timerStop, setGuide } =
  counterSlice.actions;

export default counterSlice.reducer;
