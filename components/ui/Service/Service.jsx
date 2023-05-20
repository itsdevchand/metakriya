import React from 'react';
import Button from '../../ui/Button/Button';
import cls from 'classnames';
import Printing from '../../icons/Printing';
import s from './Service.module.scss';

const Service = () => {
  return (
    <div className={cls(s.service)}>
      <div className={cls('container')}>
        <div className={cls('row row-cols-md-2 row-cols-1 gx-5 my-5')}>
          <div className={cls('col order-1')}>
            <div className={cls(s.imageWrapper)}>
              <Printing />
            </div>
          </div>
          <div className='col order-1'>
            <div className={cls(s.serviceContent)}>
              <span className={cls('text-primary text-uppercase fw-5')}>
                our mission
              </span>
              <h2>3D Modeling</h2>
              <p className={cls('pt-2')}>
                Technology is transforming nearly every industry, and
                construction is no exception. One form of tech that has recently
                had a substantial impact on the construction industry is
                three-dimensional (3D) modeling. 3D models have a major role in
                modern construction projects, as they can improve productivity
                and ease of work.
              </p>
              <Button
                className={cls('btn btn-primary text-white px-4 rounded-1')}
                variant='naked'
                onClick={() => {
                  // setSidebarView('CART_VIEW');
                  // toggleSidebar();
                }}
              >
                Shop Now
                {/* <Bag /> Cart Icon*/}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
