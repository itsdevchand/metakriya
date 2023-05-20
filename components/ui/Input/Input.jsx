import React from 'react';

const Input = ({ style, className, type, placeholder, value }) => {
  return (
    <input
      style={style}
      type={type}
      className={className}
      id='exampleInputEmail1'
      aria-describedby='emailHelp'
      placeholder={placeholder}
      defaultValue={value}
    />
  );
};

export default Input;
