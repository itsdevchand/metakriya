import React from 'react';
import LoadingDots from '../LoadingDots';

const Button = (props) => {
  const {
    // className,
    variant = 'flat',
    children,
    active,
    width,
    icon,
    loading = false,
    disabled = false,
    style = {},
    Component = 'button',
    ...rest
  } = props;

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
      {...rest}
    >
      {children} {icon}
      {loading && (
        <i className='pl-2 m-0 flex'>
          <LoadingDots />
        </i>
      )}
    </Component>
  );
};

export default Button;
