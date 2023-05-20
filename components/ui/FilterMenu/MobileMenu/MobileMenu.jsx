import React from 'react';
import cls from 'classnames';
import { Button } from '../..';
import { BiSort } from 'react-icons/bi';
import s from './MobileMenu.module.scss';
import Menu from '../index';

const MobileMenu = () => {
  return (
    <>
      {/* forHtml mobile devices */}
      <div className={cls('d-md-none d-block', s.menuWrapper)}>
        <div className={cls('row')}>
          {/* sort button section */}
          <div className={cls('col')}>
            <div className={cls(s.sortSection)}>
              {/* clikck btn forHtml sorting */}
              <Button
                className={cls('btn btn-light w-100')}
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasSort'
                aria-controls='offcanvasSort'
              >
                <span className={cls('me-3')}>Sory By</span>
                <BiSort />
              </Button>

              {/* bottom dropup section */}
              <div
                className={cls('offcanvas offcanvas-bottom')}
                tabIndex='-1'
                id='offcanvasSort'
                aria-labelledby='offcanvasSortLabel'
              >
                <div className='offcanvas-header'>
                  <h5
                    className={cls('offcanvas-title')}
                    id='offcanvasSortLabel'
                  >
                    Sort By:
                  </h5>
                  <button
                    type='button'
                    className={cls('btn-close text-reset')}
                    data-bs-dismiss='offcanvas'
                    aria-label='Close'
                  ></button>
                </div>
                <div className={cls('offcanvas-body')}>
                  {/* each tab */}
                  <div
                    className={cls(
                      'd-flex-align js-between fs-4 mb-3',
                      s.sortTab
                    )}
                  >
                    <label
                      className={cls('form-check-label')}
                      forHtml='popularity'
                    >
                      Popoularity
                    </label>
                    <input
                      className={cls('form-check-input')}
                      type='radio'
                      name='sort'
                      id='popularity'
                    />
                  </div>
                  {/* each tab */}
                  <div
                    className={cls(
                      'd-flex-align js-between fs-4 mb-3',
                      s.sortTab
                    )}
                  >
                    <label
                      className={cls('form-check-label')}
                      forHtml='price-high-low'
                    >
                      Price (high to low)
                    </label>
                    <input
                      className={cls('form-check-input')}
                      type='radio'
                      name='sort'
                      id='price-high-low'
                    />
                  </div>
                  {/* each tab */}
                  <div
                    className={cls(
                      'd-flex-align js-between fs-4 mb-3',
                      s.sortTab
                    )}
                  >
                    <label
                      className={cls('form-check-label')}
                      forHtml='price-low-high'
                    >
                      Pirce (low to high)
                    </label>
                    <input
                      className={cls('form-check-input')}
                      type='radio'
                      name='sort'
                      id='price-low-high'
                    />
                  </div>
                  {/* each tab */}
                  <div
                    className={cls(
                      'd-flex-align js-between fs-4 mb-3',
                      s.sortTab
                    )}
                  >
                    <label
                      className={cls('form-check-label')}
                      forHtml='relavance'
                    >
                      Relavance
                    </label>
                    <input
                      className={cls('form-check-input')}
                      type='radio'
                      name='sort'
                      id='relavance'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* filter tab section */}
          <div className={'col'}>
            <div className={cls(s.filterSection)}>
              <Button
                className={cls('btn btn-light w-100')}
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasFilter'
                aria-controls='offcanvasFilter'
              >
                <span className={cls('me-3')}>Filter By</span>
                <BiSort />
              </Button>

              {/* dropup section */}
              <div
                className={cls('offcanvas offcanvas-bottom', s.filterOffcanvas)}
                tabIndex='-1'
                id='offcanvasFilter'
                aria-labelledby='offcanvasFilterLabel'
              >
                <div className={cls('offcanvas-header')}>
                  <h5
                    className={cls('offcanvas-title')}
                    id='offcanvasFilterLabel'
                  >
                    Offcanvas bottom
                  </h5>
                  <button
                    type='button'
                    className={cls('btn-close text-reset')}
                    data-bs-dismiss='offcanvas'
                    aria-label='Close'
                  ></button>
                </div>
                <div className={cls('offcanvas-body small')}>
                  <Menu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
