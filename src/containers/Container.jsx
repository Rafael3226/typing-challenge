import React from 'react';

function Container({ children, size }) {
  return (
    <div className={`container mx-2 sm:mx-auto ${size ?? ''}`}>{children}</div>
  );
}

export default Container;
