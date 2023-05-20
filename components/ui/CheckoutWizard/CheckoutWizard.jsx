import React from 'react';
import cls from 'classnames';
import s from './CheckoutWizard.module.scss';

const CheckoutWizard = () => {
  return (
    <div className={cls('d-flex-align-justify my-5', s.wrapper)}>
      {/* each item */}
      <div className={cls('d-flex-align flex-column', s.itemBox)}>
        <div className={cls('d-flex-align-justify text-white', s.itemCount)}>
          <span>1</span>
        </div>
        <div className={cls(s.itemText)}>
          <span>Billing Address</span>
        </div>
      </div>

      {/* each line */}
      <div className={cls(s.itemLine)}></div>

      {/* each item */}
      <div className={cls('d-flex-align flex-column', s.itemBox)}>
        <div className={cls('d-flex-align-justify text-white', s.itemCount)}>
          <span>2</span>
        </div>
        <div className={cls(s.itemText)}>
          <span>Payment</span>
        </div>
      </div>

      {/* each line */}
      <div className={cls(s.itemLine)}></div>

      {/* each item */}
      <div className={cls('d-flex-align flex-column', s.itemBox)}>
        <div className={cls('d-flex-align-justify text-white', s.itemCount)}>
          <span>3</span>
        </div>
        <div className={cls(s.itemText)}>
          <span>Validation</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutWizard;
