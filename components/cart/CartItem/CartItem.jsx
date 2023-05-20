import React from 'react';
import cls from 'classnames';
import Image from 'next/image';
import UserImg from '../../../public/images/3dModeling/peopleFour.jpg';
import s from './CartItem.module.scss';
import { Rating } from '../../ui';

const CartItem = () => {
  return (
    <div className={cls(s.cartTab)}>
      <div className={cls('row')}>
        <div className={cls('col-md-4')}>
          <div className={cls('position-relative', s.tabImg)}>
            <Image layout='fill' src={UserImg} alt='Picture of the User' />
          </div>
        </div>
        <div className={cls('col-md-8')}>
          <div className={cls('position-relative', s.tabImg)}>
            <div className={cls(s.tabTitle)}>
              <span className={'fw-5 fs-4 ln-clamp'}>
                3D modeling image with some extra pice the read thing will be
                the same thing
              </span>
            </div>
            <p className={cls(s.tabDesc, 'ln-clamp')}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
              praesentium eum fugit dolor, commodi repudiandae eveniet
              cupiditate, quasi necessitatibus incidunt quidem reiciendis labore
              iusto esse omnis non ad soluta itaque.
            </p>
            <div className={cls('d-flex-align', s.tabRating)}>
              <Rating />
              <div className={cls(s.ratingCount)}>
                <span>(85)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
