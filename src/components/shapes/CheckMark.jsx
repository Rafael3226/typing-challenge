import React from 'react';

function CheckMark({ color = 'purple', className }) {
  return (
    <svg
      className={`h-6 w-6 text-${color}-600 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`text-${color}-600`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  );
}

export default CheckMark;
