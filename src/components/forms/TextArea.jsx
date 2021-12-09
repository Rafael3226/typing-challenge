import React from 'react';

function TextArea({
  placeholder,
  className,
  disabled,
  label,
  value,
  rows,
  name,
  id,

  onChange = () => {},
}) {
  return (
    <div className={className}>
      {label && (
        <label className="text-purple-500 font-light" htmlFor="text-area">
          {label}
        </label>
      )}
      <textarea
        className="w-full px-3 text-gray-700 border rounded-lg focus:outline-none focus-within:border-purple-500"
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        value={value}
        rows={rows}
        name={name}
        id={id}
      />
    </div>
  );
}

export default TextArea;
