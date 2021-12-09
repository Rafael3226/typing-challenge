import { useDispatch, useSelector } from 'react-redux';
import {
  setTimer,
  startTimer,
  cleanTimer,
  countTimer,
  pauseTimer,
} from '../redux/slices/timerSlice';

function useTimer() {
  const { minutes, seconds, running, startMins, startSecs, paused, finalMins } =
    useSelector((state) => state.timer);
  const dispatch = useDispatch();

  const setTime = (mins) => {
    dispatch(setTimer({ minutes: mins }));
  };
  const start = () => {
    dispatch(startTimer());
    count();
  };
  const clean = () => {
    if (!running) {
      dispatch(cleanTimer());
    }
  };
  const pause = () => {
    dispatch(pauseTimer());
  };
  const count = () => {
    dispatch(countTimer({ count }));
  };
  return [
    { minutes, seconds, running, startMins, startSecs, paused, finalMins },
    { setTime, start, clean, pause },
  ];
}

export default useTimer;
