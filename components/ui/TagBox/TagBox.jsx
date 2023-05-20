import React from 'react';
import s from './TagBox.module.scss';
import cls from 'classnames';
import { AiOutlineTag } from 'react-icons/ai';
import { Button } from '../index';

const TagBox = () => {
  return (
    <div className={cls('container')}>
      <div className={cls('d-flex-align', s.tabBox)}>
        <div className={cls('d-flex-align h-100 me-4', s.tabIcon)}>
          <AiOutlineTag className={cls('fs-3')} />
        </div>
        <div className={cls('row')}>
          <div className={cls('col')}>
            <div className={cls('mb-xl-0 mb-2', s.tabItem)}>
              <Button className={cls('btn btn-light')}>#jeep</Button>
            </div>
          </div>
          <div className={cls('col')}>
            <div className={cls('mb-xl-0 mb-2', s.tabItem)}>
              <Button className={cls('btn btn-light')}>#bus</Button>
            </div>
          </div>
          <div className={cls('col')}>
            <div className={cls('mb-xl-0 mb-2', s.tabItem)}>
              <Button className={cls('btn btn-light')}>#building</Button>
            </div>
          </div>
          <div className={cls('col')}>
            <div className={cls('mb-xl-0 mb-2', s.tabItem)}>
              <Button className={cls('btn btn-light')}>#games</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagBox;
