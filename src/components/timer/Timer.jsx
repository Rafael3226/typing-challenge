import React, { useState } from 'react';
import Button from '../forms/Button.jsx';
import TimerClock from './TimerClock.jsx';
import Input from '../forms/Input.jsx';
import useTimer from '../../hooks/useTimer.js';
import { setText } from '../../redux/slices/counterSlice.js';
import { useDispatch } from 'react-redux';

function Timer() {
  const [{ input }, setState] = useState({ input: '' });
  const [{ minutes, seconds, running }, tm] = useTimer();
  const dispatch = useDispatch();

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
        tm.setTime(input);
        return { ...s, input: '' };
      }
      return s;
    });
  };
  const clean = () => {
    dispatch(setText({ text: '' }));
    tm.clean();
  };
  const start = () => {
    setState((s) => ({ ...s, input: '' }));
    tm.start();
  };
  const pause = () => {
    tm.pause();
  };

  return (
    <div>
      <div className="flex justify-center mt-8">
        <TimerClock minutes={minutes} seconds={seconds} />
      </div>
      <div className="flex justify-center">
        <Input
          onChange={handleInput}
          value={input}
          type="number"
          maxLength={2}
          disabled={running}
          id="mins-input"
        />
      </div>
      <div className="grid grid-cols-4  justify-center  gap-4">
        <Button
          type="button"
          value="Set time"
          onClick={setTime}
          disabled={running}
        />
        <Button
          className=""
          type="button"
          value="Start"
          onClick={start}
          disabled={running}
        />
        <Button
          className=""
          type="button"
          value="Pause"
          onClick={pause}
          disabled={!running}
        />
        <Button
          className=""
          type="button"
          value="Clean"
          onClick={clean}
          disabled={running}
        />
      </div>
    </div>
  );
}

export default Timer;
