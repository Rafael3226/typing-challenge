import React from 'react';
import ReactDOM from 'react-dom';
import { PORTAL_ROOT } from '../constants/constants.js';
import Center from '../containers/Center.jsx';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <Center>
      <div className="mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        {children}
      </div>
    </Center>,
    document.getElementById(PORTAL_ROOT)
  );
}

export default Modal;
