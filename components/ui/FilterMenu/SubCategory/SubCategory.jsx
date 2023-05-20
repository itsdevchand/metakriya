import React from 'react';
import cls from 'classnames';
import s from './SubCategory.module.scss';
import InnerSubCategory from './InnerSubCategory/InnerSubCategory';

const Category = () => {
  return (
    <div className={cls(s.categoryBox)}>
      <div className={cls('mb-2', s.categoryTitle)}>Categories</div>
      <div className={cls(s.categoryDesc)}>
        <div className={cls(s.categoryInfo)}>
          {/* category info */}
          <div className={cls(s.categoryInfoTab)}>
            <div className={cls('form-check')}>
              <input
                className={cls('form-check-input', s.checkBox)}
                type='checkbox'
                value=''
                id='buildings'
              />
              <label
                className={cls('form-check-label', s.checkLabel)}
                htmlFor='buildings'
              >
                Buildings
              </label>
            </div>
          </div>

          {/* innter categroy */}
          <div className={cls(s.innerSubCategory)}>
            <InnerSubCategory />
          </div>
        </div>

        <div className={cls(s.categoryInfoTab)}>
          <div className={cls('form-check')}>
            <input
              className={cls('form-check-input', s.checkBox)}
              type='checkbox'
              value=''
              id='transportation'
            />
            <label
              className={cls('form-check-label', s.checkLabel)}
              htmlFor='transportation'
            >
              Transportation
            </label>
          </div>
        </div>

        <div className={cls(s.categoryInfoTab)}>
          <div className={cls('form-check')}>
            <input
              className={cls('form-check-input', s.checkBox)}
              type='checkbox'
              value=''
              id='games'
            />
            <label
              className={cls('form-check-label', s.checkLabel)}
              htmlFor='games'
            >
              Games
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
