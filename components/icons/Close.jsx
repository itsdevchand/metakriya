import React from 'react';

const Close = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      style={props.style}
      viewBox='0 0 18 18'
    >
      <path
        id='close'
        d='M27,10.575,25.425,9,18,16.425,10.575,9,9,10.575,16.425,18,9,25.425,10.575,27,18,19.575,25.425,27,27,25.425,19.575,18Z'
        transform='translate(-9 -9)'
      />
    </svg>
  );
};

export default Close;
