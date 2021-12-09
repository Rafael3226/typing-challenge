import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../forms/Button.jsx';
import Circle from '../shapes/Circle.jsx';
import CheckMark from '../shapes/CheckMark.jsx';
import Modal from '../../containers/Modal.jsx';
import { modalResults } from '../../redux/slices/modalSlice.js';

function Results() {
  const {
    counter: { writtenWords, correctWords, wrongWords, wordsByMinute },
    modal: { modalResults: open },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(modalResults(false));
  };
  return (
    open && (
      <Modal>
        <div className="mt-3 text-center">
          <Circle>
            <CheckMark />
          </Circle>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Results
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              Written words : {writtenWords}
            </p>
            <p className="text-sm text-gray-500">
              Correct words : {correctWords}
            </p>
            <p className="text-sm text-gray-500">Wrong words : {wrongWords}</p>
            <p className="text-sm text-gray-500">
              Words by minute : {wordsByMinute}
            </p>
          </div>
          <Button value="Close" onClick={handleClose}></Button>
        </div>
      </Modal>
    )
  );
}

export default Results;
