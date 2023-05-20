import React from 'react';
import { MdError, MdWarning, MdCheckCircle } from 'react-icons/md';

const TOAST_ICONS = {
  success: <MdCheckCircle className='toast__status-icon left' />,
  warning: <MdWarning className='toast__status-icon left' />,
  error: <MdError className='toast__status-icon left' />,
};

const Toast = (props) => {
  const { title, message, type } = props;

  const icon = TOAST_ICONS[type] || TOAST_ICONS.success;

  //TODO
  return (
    <div>
      {icon}
      <div className=''>
        <p className=''>{title}</p>
        <p className=''>{message}</p>
      </div>
    </div>
  );
};

export default Toast;
