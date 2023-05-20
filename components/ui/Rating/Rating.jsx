import React from 'react';
import cls from 'classnames';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import s from './Rating.module.scss';

const Rating = () => {
  return (
    <div className={cls('d-flex-align', s.rating)}>
      <div className={cls(s.RatingIcon)}>
        <AiFillStar />
      </div>
      <div className={cls(s.RatingIcon)}>
        <AiFillStar />
      </div>
      <div className={cls(s.RatingIcon)}>
        <AiFillStar />
      </div>
      <div className={cls(s.RatingIcon)}>
        <AiOutlineStar />
      </div>
      <div className={cls(s.RatingIcon)}>
        <AiOutlineStar />
      </div>
    </div>
  );
};

export default Rating;
