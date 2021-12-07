import React from 'react';

function Button({
  children,
  className,
  type = 'button',
  value = 'button',
  onClick = () => {},
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={`${className} bg-purple-700 text-gray-100 rounded hover:bg-purple-500 focus:outline-none disabled:opacity-50 px-2 py-1`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {value}
    </button>
  );
}

export default Button;
