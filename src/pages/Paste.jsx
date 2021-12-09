import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/forms/Button.jsx';
import TextArea from '../components/forms/TextArea.jsx';
import Modal from '../components/Modal.jsx';
import CheckMark from '../components/shapes/CheckMark.jsx';
import Circle from '../components/shapes/Circle.jsx';
import { setGuide } from '../redux/slices/counterSlice.js';
import { modalPaste } from '../redux/slices/modalSlice.js';

function Paste() {
  const { modalPaste: open } = useSelector((state) => state.modal);
  const [state, setState] = useState({ input: '' });
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    const input = evt.target.value;
    setState({ input });
  };
  const handlePaste = () => {
    dispatch(setGuide({ guide: state.input }));
    setState({ input: '' });
    dispatch(modalPaste(false));
  };
  const handleClose = () => {
    setState({ input: '' });
    dispatch(modalPaste(false));
  };
  return (
    open && (
      <Modal>
        <div className="mt-3 text-center">
          <Circle>
            <CheckMark />
          </Circle>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Paste</h3>
          <div className="mt-2 px-7 pb-3">
            <TextArea
              label="Paste text here"
              placeholder="Paste text here"
              rows={3}
              id="paste-area"
              value={state.input}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button value="Paste" onClick={handlePaste} />
            <Button value="Close" onClick={handleClose} />
          </div>
        </div>
      </Modal>
    )
  );
}

export default Paste;
