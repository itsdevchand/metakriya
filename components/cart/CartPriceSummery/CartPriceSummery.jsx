import React from 'react';
import s from './CartPriceSummery.module.scss';
import cls from 'classnames';
import { Button } from '../../ui';

const CartPriceSummery = () => {
  return (
    <div className={cls('p-4 bs-light br-light', s.payInfo)}>
      <div className={cls('mb-3', s.payTitle)}>
        <span className={'fs-5 fw-5'}>Price Summary</span>
      </div>
      <div className={cls('br-bt-light pb-2', s.payTab)}>
        <div className={cls('d-flex-align js-between', s.paySubTotal)}>
          <div>Subtotal</div>
          <div>
            $<span>125</span>
          </div>
        </div>
        <div className={cls('d-flex-align js-between my-2', s.payDiscount)}>
          <div>Discount</div>
          <div>
            <span>20</span>%
          </div>
        </div>
      </div>
      <div className={cls('d-flex-align js-between my-2', s.payTotal)}>
        <div>Total</div>
        <div>
          <span>194</span>%
        </div>
      </div>
      <div className={cls('mt-4', s.payCheckout)}>
        <Button className={'btn btn-primary px-5 py-2 text-white'}>
          Continue to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartPriceSummery;
