import React from 'react';

function TimerClock({ minutes, seconds }) {
  return (
    <>
      <span className="text-6xl text-purple-600">
        {minutes < 10 ? '0' + minutes : minutes}
        {':'}
        {seconds < 10 ? '0' + seconds : seconds}
      </span>
    </>
  );
}

export default TimerClock;
