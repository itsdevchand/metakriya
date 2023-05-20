import React from 'react';
import cls from 'classnames';
import s from '../../styles/Cart.module.scss';
import { CartItem, CartPriceSummery } from '../../components/cart';
import { Button, Input } from '../../components/ui';

const Cart = () => {
  return (
    <div className={cls(s.cartWrapper)}>
      <div className={cls('container')}>
        <div className={cls('mb-4', s.cartInfo)}>
          <div className={cls('row')}>
            {/* cart left section */}
            <div className={cls('col-md-9')}>
              {/* each item */}
              <div className={cls('p-3 mb-4 bs-light br-light', s.cartBox)}>
                <div className={cls('row')}>
                  <div className={cls('col-md-9')}>
                    <div className={cls(s.cartTab)}>
                      <CartItem />
                    </div>
                  </div>
                  <div className={cls('col-md-3')}>
                    <div className={cls('mb-3', s.cartQty)}>
                      <div className={cls('mb-3 text-sm-center', s.qtyTitle)}>
                        <span>Quantity</span>
                      </div>
                      <div
                        className={cls('d-flex-align justify-content-center')}
                      >
                        <div className={cls('mx-1', s.qtyPlus)}>
                          <Button
                            className={
                              'btn btn-white br-light bs-light rounded-circle'
                            }
                          >
                            +
                          </Button>
                        </div>
                        <div className={cls('me-3', s.qtyInput)}>
                          <Input
                            style={{ maxWidth: '40px', textAlign: 'center' }}
                            type={'text'}
                            className={cls('form-control')}
                            value={'1'}
                          />
                        </div>
                        <div className={cls('me-3', s.qtyMinus)}>
                          <Button
                            className={
                              'btn btn-white br-light bs-light rounded-circle'
                            }
                          >
                            -
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* each item */}
              <div className={cls('p-3 mb-4 bs-light br-light', s.cartBox)}>
                <div className={cls('row')}>
                  <div className={cls('col-md-9')}>
                    <div className={cls(s.cartTab)}>{/* <CartItem /> */}</div>
                  </div>
                  <div className={cls('col-md-3')}>
                    <div className={cls('mb-3', s.cartQty)}>
                      <div className={cls('mb-3 text-sm-center', s.qtyTitle)}>
                        <span>Quantity</span>
                      </div>
                      <div
                        className={cls('d-flex-align justify-content-center')}
                      >
                        <div className={cls('mx-1', s.qtyPlus)}>
                          <Button
                            className={
                              'btn btn-white br-light bs-light rounded-circle'
                            }
                          >
                            +
                          </Button>
                        </div>
                        <div className={cls('me-3', s.qtyInput)}>
                          <Input
                            style={{ maxWidth: '40px', textAlign: 'center' }}
                            type={'text'}
                            className={cls('form-control')}
                            value={'1'}
                          />
                        </div>
                        <div className={cls('me-3', s.qtyMinus)}>
                          <Button
                            className={
                              'btn btn-white br-light bs-light rounded-circle'
                            }
                          >
                            -
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* each item */}
              <div className={cls('p-3 mb-4 bs-light br-light', s.cartBox)}>
                <div className={cls('row')}>
                  <div className={cls('col-md-9')}>
                    <div className={cls(s.cartTab)}>
                      <CartItem />
                    </div>
                  </div>
                  <div className={cls('col-md-3')}>
                    <div className={cls('mb-3', s.cartQty)}>
                      <div className={cls('mb-3 text-sm-center', s.qtyTitle)}>
                        <span>Quantity</span>
                      </div>
                      <div
                        className={cls('d-flex-align justify-content-center')}
                      >
                        <div className={cls('mx-1', s.qtyPlus)}>
                          <Button
                            className={
                              'btn btn-white br-light bs-light rounded-circle'
                            }
                          >
                            +
                          </Button>
                        </div>
                        <div className={cls('me-3', s.qtyInput)}>
                          <Input
                            style={{ maxWidth: '40px', textAlign: 'center' }}
                            type={'text'}
                            className={cls('form-control')}
                            value={'1'}
                          />
                        </div>
                        <div className={cls('me-3', s.qtyMinus)}>
                          <Button
                            className={
                              'btn btn-white br-light bs-light rounded-circle'
                            }
                          >
                            -
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={cls('col-md-3')}>
              <CartPriceSummery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
