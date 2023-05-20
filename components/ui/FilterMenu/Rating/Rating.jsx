import React from 'react';
import cls from 'classnames';
import s from './Rating.module.scss';
import { AiOutlineStar } from 'react-icons/ai';

const Rating = () => {
  return (
    <div className={cls(s.ratingBox)}>
      <div className={cls(s.ratingTitle)}>Rating</div>
      <div className={cls(s.ratingSort)}>
        {/* each rating tab */}
        <div className={cls('d-flex my-2', s.ratingTab)}>
          <div className={cls(s.checkBox)}>
            <input
              className={cls('form-check-input', s.checkBox)}
              type='checkbox'
              value=''
              id='four-star & above'
            />
          </div>
          <label
            htmlFor='four-star & above'
            className={cls('ms-3', s.ratingText)}
          >
            <span>
              4<AiOutlineStar /> & above
            </span>
          </label>
        </div>

        {/* each rating tab */}
        <div className={cls('d-flex my-2', s.ratingTab)}>
          <div className={cls(s.checkBox)}>
            <input
              className={cls('form-check-input', s.checkBox)}
              type='checkbox'
              value=''
              id='three-star & above'
            />
          </div>
          <label
            htmlFor='three-star & above'
            className={cls('ms-3', s.ratingText)}
          >
            <span>
              3<AiOutlineStar /> & above
            </span>
          </label>
        </div>

        {/* each rating tab */}
        <div className={cls('d-flex my-2', s.ratingTab)}>
          <div className={cls(s.checkBox)}>
            <input
              className={cls('form-check-input', s.checkBox)}
              type='checkbox'
              value=''
              id='two-star & above'
            />
          </div>
          <label
            htmlFor='two-star & above'
            className={cls('ms-3', s.ratingText)}
          >
            <span>
              2<AiOutlineStar /> & above
            </span>
          </label>
        </div>

        {/* each rating tab */}
        <div className={cls('d-flex my-2', s.ratingTab)}>
          <div className={cls(s.checkBox)}>
            <input
              className={cls('form-check-input', s.checkBox)}
              type='checkbox'
              value=''
              id='one-star & above'
            />
          </div>
          <label
            htmlFor='one-star & above'
            className={cls('ms-3', s.ratingText)}
          >
            <span>
              1<AiOutlineStar /> & above
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Rating;
