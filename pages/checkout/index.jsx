import S from '../../styles/Checkout.module.scss';
import CartPriceSummery from '../../components/cart/CartPriceSummery';
import Image from 'next/image';
import { MdDeleteOutline } from 'react-icons/md';
import CartItemImg from '../../public/images/3dModeling/peopleFive.png';
import cls from 'classnames';

const index = () => {
  return (
    <div className={cls('container my-5')}>
      <div className={cls('row')}>
        <div className={cls('col-md-8')}>
          <div className={cls('mb-4', S.billingAddress)}>
            {/* Billing Adress */}
            <div
              className={cls(
                'p-3 bs-light br-light border-bottom-0',
                S.checkoutBoxTitle
              )}
            >
              <h3 className={cls('fs-5 mb-0')}>Billing Address</h3>
            </div>

            <div className={cls('p-3 bs-light br-light', S.billingAddressDesc)}>
              <div className={cls(S.billName)}>John Doe</div>
              <div className={cls(S.billCountry)}>Nepal</div>
              <div className={cls(S.billState)}>Bagmati</div>
              <div className={cls(S.billZipcode)}>034258</div>
            </div>
          </div>

          <div className={cls(S.checkout)}>
            {/* checkoutbox section */}
            <div className={cls('br-bt-light', S.checkoutBox)}>
              {/* checkoutbox Title */}
              <div
                className={cls(
                  'd-flex-align p-3 bs-light br-light border-bottom-0',
                  S.checkoutBoxTitle
                )}
              >
                <h3 className={cls('fs-5 mb-0')}>Shopping Cart</h3>
                <span
                  className={cls(
                    'ms-3 px-2 bg-danger rounded-pill text-white',
                    S.checkoutItemCount
                  )}
                >
                  4
                </span>
              </div>

              {/* each item */}
              <div
                className={cls(
                  'd-flex js-between p-3 bs-light br-light border-bottom-0',
                  S.checkoutItem
                )}
              >
                {/* imagebox */}
                <div className={cls('d-flex-align', S.checkoutItemLeft)}>
                  <div className={cls('ps-rl', S.checkoutItemImg)}>
                    <Image src={CartItemImg} layout="fill" />
                  </div>
                  <div className={cls('ms-3', S.checkoutItemDesc)}>
                    <h5 className={cls('fs-6')}>
                      Pixle Example | The Real Example of and Art
                    </h5>
                  </div>
                </div>
                <div className={cls('d-flex-align', S.checkoutItemRight)}>
                  <div className={cls(S.checkoutItemPrice)}>
                    <span>$</span>
                    <span className={cls(S.checkoutItemCount)}>230</span>
                  </div>
                  <div
                    title="delete"
                    className={cls('px-3 fs-4', S.checkoutItemDelete)}
                  >
                    <MdDeleteOutline />
                  </div>
                </div>
              </div>

              {/* each item */}
              <div
                className={cls(
                  'd-flex js-between p-3 bs-light br-light border-bottom-0',
                  S.checkoutItem
                )}
              >
                {/* imagebox */}
                <div className={cls('d-flex-align', S.checkoutItemLeft)}>
                  <div className={cls('ps-rl', S.checkoutItemImg)}>
                    <Image src={CartItemImg} layout="fill" />
                  </div>
                  <div className={cls('ms-3', S.checkoutItemDesc)}>
                    <h5 className={cls('fs-6')}>
                      Pixle Example | The Real Example of and Art
                    </h5>
                  </div>
                </div>
                <div className={cls('d-flex-align', S.checkoutItemRight)}>
                  <div className={cls(S.checkoutItemPrice)}>
                    <span>$</span>
                    <span className={cls(S.checkoutItemCount)}>230</span>
                  </div>
                  <div
                    title="delete"
                    className={cls('px-3 fs-4', S.checkoutItemDelete)}
                  >
                    <MdDeleteOutline />
                  </div>
                </div>
              </div>

              {/* each item */}
              <div
                className={cls(
                  'd-flex js-between p-3 bs-light br-light border-bottom-0',
                  S.checkoutItem
                )}
              >
                {/* imagebox */}
                <div className={cls('d-flex-align', S.checkoutItemLeft)}>
                  <div className={cls('ps-rl', S.checkoutItemImg)}>
                    <Image src={CartItemImg} layout="fill" />
                  </div>
                  <div className={cls('ms-3', S.checkoutItemDesc)}>
                    <h5 className={cls('fs-6')}>
                      Pixle Example | The Real Example of and Art
                    </h5>
                  </div>
                </div>
                <div className={cls('d-flex-align', S.checkoutItemRight)}>
                  <div className={cls(S.checkoutItemPrice)}>
                    <span>$</span>
                    <span className={cls(S.checkoutItemCount)}>230</span>
                  </div>
                  <div
                    title="delete"
                    className={cls('px-3 fs-4', S.checkoutItemDelete)}
                  >
                    <MdDeleteOutline />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* price section */}
        <div className={cls('col-md-4')}>
          <div className={cls(S.checkoutPrice)}>
            <CartPriceSummery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
