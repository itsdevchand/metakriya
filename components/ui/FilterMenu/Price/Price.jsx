import React from 'react';
import Input from '../../Input/Input';
import cls from 'classnames';
import s from './Price.module.scss';

const Price = () => {
  return (
    <div className={cls(s.priceBox)}>
      <div className={cls('mb-2', s.priceTitle)}>Price</div>
      <div className={cls('d-flex', s.priceSort)}>
        <div className={cls(s.priceTab, s.maxPrice)}>
          <Input
            className={cls('form-control')}
            placeholder='min'
            type='text'
          />
        </div>
        <div className={cls(s.priceTab, s.maxPrice)}>
          <Input
            className={cls('form-control')}
            placeholder='max'
            type='text'
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
