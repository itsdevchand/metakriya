import React from 'react';
import { CheckoutWizard } from '../../components/ui';
import cls from 'classnames';
import CartPriceSummary from '../../components/cart/CartPriceSummery';
import s from '../../styles/Payment.module.scss';

const index = () => {
  return (
    <div className="container">
      <div className={cls('chk-wizard')}>
        <CheckoutWizard />
      </div>

      <div className="row">
        <div className="col-md-8">
          {/* payment section */}
          <div
            className={cls('bs-light br-light p-4 bg-white mb-5', s.paySection)}
          >
            <h2>Shipping Address</h2>
            <form className="my-4" action="">
              {/* each group */}
              <div className="input-group">
                <div className="mb-3 me-3">
                  <label for="first-name" class="d-block form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First Name"
                    id="first-name"
                  />
                </div>
                <div className="mb-3">
                  <label for="last-name" class="d-block form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Server"
                    id="last-name"
                  />
                </div>
              </div>

              {/* each group */}
              <div className="input-group">
                <div className="mb-3 me-3">
                  <label for="address" class="d-block form-label">
                    Address*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="address"
                    id="address"
                  />
                </div>
                <div className="mb-3">
                  <label for="city" class="d-block form-label">
                    City*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="city"
                    id="city"
                  />
                </div>
              </div>

              {/* each group */}
              <div className="input-group">
                <div className="mb-3 me-3">
                  <label for="country" class="d-block form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First Name"
                    id="country"
                  />
                </div>
                <div className="mb-3">
                  <label for="zip-code" class="d-block form-label">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="zip-code"
                    id="zip-code"
                  />
                </div>
              </div>

              {/* each group */}
              <div className="input-group">
                <div className="mb-3 me-3">
                  <input
                    className="btn btn-primary text-white"
                    type="submit"
                    value={'save & continue'}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    className="form-control"
                    value={'cancel'}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4">
          <CartPriceSummary />
        </div>
      </div>
    </div>
  );
};

export default index;
