import React from 'react';
import cls from 'classnames';
import s from './FilterMenu.module.scss';
import Category from './SubCategory';
import Price from './Price/Price';
import Rating from './Rating/Rating';
import Button from '../Button/Button';
import Close from '../../icons/Close';

const Menu = () => {
  return (
    <div className={cls(s.productFilter)}>
      {/* filter heading box */}
      <div className={cls('px-4 py-3 br-bt-light', s.filterHeading)}>
        {/* filter title section */}
        <div className={cls('d-flex js-between', s.filterTitle)}>
          <div className={cls(s.filterText)}>Filter</div>
          <Button className={cls('btn btn-primary py-0 px-3 text-white')}>
            clear all
          </Button>
        </div>

        {/* filter keywords */}
        <div className={cls('py-3', s.antTag)}>
          <Button className={cls('btn btn-light d-flex-align py-1 mt-3 me-3')}>
            <Close style={{ height: '10px' }} />
            <span className={cls('ms-2')}>mobile</span>
          </Button>

          <Button className={cls('btn btn-light d-flex-align py-1 mt-3 me-3')}>
            <Close style={{ height: '10px' }} />
            <span className={cls('ms-2')}>mobile</span>
          </Button>
        </div>
      </div>
      {/* category section */}
      <div className={cls('px-4 py-3 br-bt-light', s.subCategory)}>
        <Category />
      </div>

      {/* category section */}
      <div className={cls('px-4 py-3 br-bt-light', s.category)}>
        <Price />
      </div>

      {/* category section */}
      <div className={cls('px-4 py-3', s.category)}>
        <Rating />
      </div>
    </div>
  );
};

export default Menu;
