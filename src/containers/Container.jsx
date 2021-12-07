import React from 'react';

function Container({ children, size }) {
  return <div className={`container mx-auto ${size ?? ''}`}>{children}</div>;
}

export default Container;
