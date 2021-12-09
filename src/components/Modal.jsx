import React from 'react';
import Center from '../containers/Center.jsx';

function Modal({ children }) {
  return (
    <Center>
      <div className="mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        {children}
      </div>
    </Center>
  );
  s;
}

export default Modal;
