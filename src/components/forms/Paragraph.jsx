import React from 'react';

function Paragraph({ checked, notChecked }) {
  return (
    <div className="col-span-2 bg-gray-200 border rounded-lg">
      <p className="mx-4 my-2 text-justify">
        <span className="text-purple-500">{checked}</span>
        <span role="text" id="guide-text">
          {notChecked}
        </span>
      </p>
    </div>
  );
}

export default Paragraph;
