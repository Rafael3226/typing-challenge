import React from 'react';

function TextArea({
  label,
  placeholder,
  rows,
  id,
  value,
  onChange = () => {},
}) {
  return (
    <>
      {label && (
        <label className="text-purple-500 font-light" htmlFor="text-area">
          {label}
        </label>
      )}
      <textarea
        className="w-full px-3 text-gray-700 border rounded-lg focus:outline-none focus-within:border-purple-500"
        placeholder={placeholder}
        id={id}
        rows={rows}
        onChange={onChange}
        value={value}
      />
    </>
  );
}

export default TextArea;
