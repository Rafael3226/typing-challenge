import { useState, useEffect } from 'react';

function useTimer(minutes = 5) {
  const [state, setState] = useState({
    minutes,
    seconds: 0,
    running: false,
  });
  const setTime = (time) => {
    setState((s) => {
      return {
        ...s,
        minutes: time,
        seconds: 0,
        running: false,
      };
    });
  };
  const start = () => {
    setState((s) => {
      const { running, minutes, seconds } = s;
      if (!running && (minutes || seconds)) {
        count();
        return { ...s, running: true };
      }
      return s;
    });
  };
  const clean = () => {
    setState((s) => {
      const { running } = s;
      if (!running) {
        return { ...s, minutes: 0, seconds: 0 };
      }
    });
  };
  const stop = () => {
    setState((s) => ({ ...s, running: false }));
  };
  const count = () => {
    setState((s) => {
      let { minutes, seconds } = s;
      if ((minutes !== 0 || seconds !== 0) && s.running) {
        if (seconds === 0) {
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }
        setTimeout(() => {
          count(minutes, seconds);
        }, 1000);
        return { ...s, minutes, seconds };
      } else return { ...s, running: false };
    });
  };
  return [state, { setTime, start, clean, stop }];
}

export default useTimer;
