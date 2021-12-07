import React from 'react';

function Paragraph({ className, text }) {
  return (
    <div className={className}>
      <p className="mx-4 my-2">{text}</p>
    </div>
  );
}

export default Paragraph;
