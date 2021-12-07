import React from 'react';

function Input({
  placeholder,
  className,
  maxLength,
  onChange,
  disabled,
  value,
  label,
  name,
  type,
  color = 'purple',
}) {
  return (
    <div className="grid grid-row">
      {label && (
        <label className={`text-${color}-500 font-light`}>{label}</label>
      )}
      <input
        className={`${className} w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-${color}-500`}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        disabled={disabled}
        value={value}
        name={name}
        type={type}
      />
    </div>
  );
}

export default Input;
