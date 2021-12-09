import React from 'react';

function Center({ children }) {
  return (
    <div className="fixed w-full h-1/2 top-0 left-0 flex items-center justify-center">
      {children}
    </div>
  );
}

export default Center;
