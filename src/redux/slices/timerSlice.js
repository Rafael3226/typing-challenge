import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    minutes: 1,
    seconds: 0,
    running: false,
    startMins: 0,
    startSecs: 0,
    paused: false,
    finalMins: 0,
  },
  reducers: {
    setTimer: (state, action) => {
      state.minutes = action.payload.minutes;
      state.seconds = 0;
    },
    startTimer: (state) => {
      const { minutes, seconds, running } = state;
      if (!running && (minutes || seconds)) {
        state.running = true;
        if (!state.paused) {
          state.startMins = state.minutes;
          state.startSecs = state.seconds;
        }
        state.paused = false;
      }
    },
    pauseTimer: (state) => {
      state.paused = true;
      state.running = false;
    },
    cleanTimer: (state) => {
      if (!state.running) {
        state.minutes = 0;
        state.seconds = 0;
        state.startMins = 0;
        state.startSecs = 0;
        state.paused = false;
      }
    },
    countTimer: (state, action) => {
      const { minutes, seconds, running, startMins, startSecs } = state;
      if ((minutes !== 0 || seconds !== 0) && running) {
        if (state.seconds === 0) {
          state.minutes--;
          state.seconds = 59;
        } else {
          state.seconds--;
        }
        setTimeout(action.payload.count, 1000);
      } else {
        state.running = false;
        state.finalMins = startMins - minutes + (startSecs - seconds) / 60;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTimer, startTimer, pauseTimer, cleanTimer, countTimer } =
  timerSlice.actions;

export default timerSlice.reducer;
