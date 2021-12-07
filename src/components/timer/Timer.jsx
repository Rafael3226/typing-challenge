import React, { useState } from 'react';
import Button from '../forms/Button.jsx';
import TimerClock from './TimerClock.jsx';
import Input from '../forms/Input.jsx';
import useTimer from '../../hooks/useTimer.js';

function Timer() {
  const [state, setState] = useState({ input: '' });
  const [timer, tm] = useTimer(5);
  const handleInput = (evt) => {
    const { value: input } = evt.target;
    if (60 >= input) {
      setState((s) => ({ ...s, input }));
    }
  };
  const setTime = () => {
    setState((s) => {
      const { input } = s;
      if (input) {
        tm.setTime(s.input);
        return { ...s, input: '' };
      }
      return s;
    });
  };
  return (
    <div className="grid grid-cols-1">
      <div className="flex justify-center mt-8">
        <TimerClock minutes={timer.minutes} seconds={timer.seconds} />
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
          disabled={timer.running}
        />
        <Button
          className=""
          type="button"
          value="Start"
          onClick={tm.start}
          disabled={timer.running}
        />
        <Button
          className=""
          type="button"
          value="Stop"
          onClick={tm.stop}
          disabled={!timer.running}
        />
        <Button
          className=""
          type="button"
          value="Clean"
          onClick={tm.clean}
          disabled={timer.running}
        />
      </div>
    </div>
  );
}

export default Timer;
