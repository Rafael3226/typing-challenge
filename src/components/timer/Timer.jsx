import React, { useState } from 'react';
import Button from '../forms/Button.jsx';
import TimerClock from './TimerClock.jsx';
import Input from '../forms/Input.jsx';

function Timer() {
  const [state, setState] = useState({
    input: '',
    minutes: 1,
    seconds: 0,
    running: false,
  });
  const setTime = () => {
    setState((s) => {
      const { input } = s;
      if (input) {
        return {
          ...s,
          input: '',
          minutes: input,
          seconds: 0,
          running: false,
        };
      }
    });
  };
  const start = () => {
    setState((s) => {
      const { running, minutes, seconds } = s;
      if (!running && (minutes || seconds)) {
        count();
        return { ...s, input: '', running: true };
      }
      return s;
    });
  };
  const clean = () => {
    setState((s) => {
      const { running } = s;
      if (!running) {
        return { ...s, input: '', minutes: 0, seconds: 0 };
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
  const handleInput = (evt) => {
    const { value: input } = evt.target;
    if (60 >= input) {
      setState((s) => ({ ...s, input }));
    }
  };
  return (
    <div className="grid grid-cols-1">
      <div className="flex justify-center mt-8">
        <TimerClock minutes={state.minutes} seconds={state.seconds} />
      </div>
      <div className="flex justify-center">
        <Input
          onChange={handleInput}
          value={state.input}
          type="number"
          maxLength={2}
        />
      </div>
      <div className="flex justify-center gap-4">
        <Button
          type="button"
          value="Set Time"
          onClick={setTime}
          disabled={state.running}
        />
        <Button
          className=""
          type="button"
          value="Start"
          onClick={start}
          disabled={state.running}
        />
        <Button
          className=""
          type="button"
          value="Stop"
          onClick={stop}
          disabled={!state.running}
        />
        <Button
          className=""
          type="button"
          value="Clean"
          onClick={clean}
          disabled={state.running}
        />
      </div>
    </div>
  );
}

export default Timer;
