import React from 'react';
import cls from 'classnames';
import Image from 'next/image';
import { BsDot } from 'react-icons/bs';
import s from './FeatureBlogCard.module.scss';
import ImageOne from '../../../public/images/3dModeling/peopleFive.png';

const FeatureBlogCard = () => {
  return (
    <div>
      <div className={cls('bs-light br-light', s.ftBlog)}>
        <div className='row row-cols-md-2 row-cols-1'>
          <div className='col'>
            {/* image section */}
            <div className={cls(s.ftBlogImg)}>
              <Image layout='fill' src={ImageOne} alt='Picture of the User' />
            </div>
          </div>
          <div className='col'>
            <div className={cls('p-5', s.ftBlogInfo)}>
              <div
                className={cls('text-uppercase text-primary', s.ftBlogCategory)}
              >
                3D modeling
              </div>
              <div className={cls('fw-bold fs-4', s.ftBlogTitle)}>
                Design, Climate, Action: how to make interior design less
                wasteful
              </div>
              <div className={cls('mt-3', s.ftBlogDesc)}>
                Working with second-hand pieces and waste streams can make
                interior design much more sustainable. But how can designers
                start on this journey? Whatever we do in graphic in the
                matter.But how can designers start on this journey? Whatever we
                do in graphic in the matter.But how can designers start on this
                journey? Whatever we do in graphic in the matter.
              </div>
              <div className={cls('mt-2', s.ftBlogDate)}>
                <span className={cls('fw-5', s.ftBlogDateText)}>
                  12 Nov 2022
                </span>
                <span className={cls('fs-4')}>
                  <BsDot />
                </span>
                <span className={cls('fw-5')}>Read More...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBlogCard;
