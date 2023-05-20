import React from 'react';
import cls from 'classnames';
import s from './Pagination.module.scss';
import Button from '../Button/Button';

const Pagination = () => {
  return (
    <div className={cls('d-flex-align js-between', s.pg)}>
      <div className={cls(s.pgPrev)}>
        <Button className={'btn px-4 btn-light'}>Prev</Button>
      </div>
      <div className={cls('d-flex-align', s.pgNum)}>
        <div className='row'>
          {/* each num tab */}
          <div className='col'>
            <div className={cls(s.pgNumTab)}>
              <Button
                className={'btn btn-light p-3 br-light rounded-circle'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                }}
              >
                1
              </Button>
            </div>
          </div>
          {/* each num tab */}
          <div className='col'>
            <div className={cls(s.pgNumTab)}>
              <Button
                className={'btn btn-light p-3 br-light rounded-circle'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                }}
              >
                2
              </Button>
            </div>
          </div>
          {/* each num tab */}
          <div className='col'>
            <div className={cls(s.pgNumTab)}>
              <Button
                className={'btn btn-light p-3 br-light rounded-circle'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                }}
              >
                3
              </Button>
            </div>
          </div>
          {/* each num tab */}
          <div className='col'>
            <div className={cls(s.pgNumTab)}>
              <Button
                className={'btn btn-light p-3 br-light rounded-circle'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                }}
              >
                4
              </Button>
            </div>
          </div>
          {/* each num tab */}
          <div className='col'>
            <div className={cls(s.pgNumTab)}>
              <Button
                className={'btn btn-light p-3 br-light rounded-circle'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                }}
              >
                5
              </Button>
            </div>
          </div>
          {/* each num tab */}
          <div className='col'>
            <div className={cls(s.pgNumTab)}>
              <Button
                className={'btn btn-light p-3 br-light rounded-circle'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                }}
              >
                6
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={cls(s.pgNext)}>
        <Button className={'px-4 btn btn-light'}>Next</Button>
      </div>
    </div>
  );
};

export default Pagination;
