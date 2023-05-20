import React from 'react';
import s from './ProductFilter.module.scss';
import cls from 'classnames';

const ProductFilter = () => {
  return (
    <div className={cls(s.productFilter)}>
      <div className={cls('d-md-flex d-none', s.filterBox)}>
        <div className={cls('row border-bottom', s.row)}>
          <div className={cls('col-auto')}>
            <div className={cls('py-3 me-5', s.productFilterTab, s.tabActive)}>
              3D Modeling
            </div>
          </div>
          <div className={cls('col-auto')}>
            <div className={cls('py-3 me-5', s.productFilterTab)}>Textues</div>
          </div>
          <div className={cls('col-auto')}>
            <div className={cls('py-3 me-5', s.productFilterTab)}>
              Printings
            </div>
          </div>
        </div>
      </div>
      {/* 
      {/* for mobile devices */}
      {/* dropdown menu will apper */}
      <div className={cls('mt-3 d-md-none d-block ', s.filterDropDown)}>
        <select
          className={cls('form-select')}
          aria-label='Default select example'
        >
          <option selected>Select Category</option>
          <option value='1' selected>
            3D Modeling
          </option>
          <option value='2'>Texture</option>
          <option value='3'>Printing</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
