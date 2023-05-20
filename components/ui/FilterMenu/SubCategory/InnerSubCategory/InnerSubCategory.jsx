import React from 'react';
import cls from 'classnames';
import s from './InnerSubCategory.module.scss';

const InnerSubCategory = () => {
  return (
    <div className={cls('ps-4', s.InnerSubCategoryBox)}>
      {/* each tab */}
      <div className={cls(s.innerSubCategoryTab)}>
        <div className={cls('form-check')}>
          <input
            className={cls('form-check-input', s.checkBox)}
            type='checkbox'
            value=''
            id='indian-bulding'
          />
          <label
            className={cls('ps-2 form-check-label', s.checkLabel)}
            htmlFor='indian-bulding'
          >
            Indian Building
          </label>
        </div>
      </div>

      {/* each tab */}
      <div className={cls(s.innerSubCategoryTab)}>
        <div className={cls('form-check')}>
          <input
            className={cls('form-check-input', s.checkBox)}
            type='checkbox'
            value=''
            id='building-building'
          />
          <label
            className={cls('ps-2 form-check-label', s.checkLabel)}
            htmlFor='building-building'
          >
            Chinsese Building
          </label>
        </div>
      </div>

      {/* each tab */}
      <div className={cls(s.innerSubCategoryTab)}>
        <div className={cls('form-check')}>
          <input
            className={cls('form-check-input', s.checkBox)}
            type='checkbox'
            value=''
            id='japnese-building'
          />
          <label
            className={cls('ps-2 form-check-label', s.checkLabel)}
            htmlFor='japnese-building'
          >
            Japnese Building
          </label>
        </div>
      </div>
    </div>
  );
};

export default InnerSubCategory;
