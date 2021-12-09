import React from 'react';

function Circle({ children, color = 'purple', height = '12', width = '12' }) {
  return (
    <div
      className={`mx-auto flex items-center justify-center h-${height} w-${width} rounded-full bg-${color}-100`}
    >
      {children}
    </div>
  );
}

export default Circle;
