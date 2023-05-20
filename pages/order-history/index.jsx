import React from 'react';
import cls from 'classnames';
import Image from 'next/image';
import UserImg from '../../public/images/3dModeling/peopleFour.jpg';
import s from '../../styles/OrderHistory.module.scss';
import { Button } from '../../components/ui/index';

const OrderHistory = () => {
  return (
    <div className={'container'}>
      <div className={s.orderHistory}>
        {/* heading section */}
        <div className={s.orderHeading}>
          <div className={cls('mb-4', s.headingText)}>
            <span className={cls('fs-4 fw-5')}>Order History</span>
          </div>
        </div>

        {/* order history box */}
        <div className={cls('mb-4', s.orderBox)}>
          {/* each order itesm */}
          <div className={cls('fw-5 bs-light br-light p-4', s.orderItem)}>
            <div className={cls(s.orderDate)}>
              <span>Orderd on</span>
              <span className={cls('ms-2', s.dateText)}>5 Oct 2022</span>
            </div>
            <div className={cls('row')}>
              <div className={cls('col-md-8')}>
                <div className={cls(s.itemBox)}>
                  <div className={cls('row')}>
                    <div className={cls('col-md-4')}>
                      <div className={s.orderImg}>
                        <Image
                          layout='fill'
                          src={UserImg}
                          alt='Picture of the User'
                        />
                      </div>
                    </div>
                    <div className={cls('col')}>
                      <div className={s.orderInfo}>
                        <div className={cls('fs-5 fw-5 ln-clamp', s.infoTitle)}>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Aut officia consectetur inventore laudantium
                          error vel praesentium itaque sit pariatur, distinctio
                          accusamus, totam eligendi, accusantium dolore! Ipsa a
                          atque nisi aut?
                        </div>
                        <p className={cls('ln-clamp', s.infoDesc)}>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Qui quaerat voluptatibus praesentium veritatis
                          dolorum dolorem obcaecati voluptate nostrum mollitia
                          molestias, repudiandae commodi eius aperiam excepturi
                          amet consectetur in illum accusamus?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cls('col-md-4')}>
                <div className={cls(s.orderDetail)}>
                  <Button
                    className={cls(
                      'd-block w-100 btn px-4 py-2  btn-primary text-white'
                    )}
                  >
                    Order Details
                  </Button>
                  <Button
                    className={cls(
                      'd-block w-100 mt-3 btn px-4 py-2 btn-outline-primary'
                    )}
                  >
                    View Order Detail
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
