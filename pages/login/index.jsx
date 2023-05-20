import React from 'react';
import Image from 'next/image';
import UserImg from '../../public/images/prasanna/user-one.jpg';
import cls from 'classnames';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsGoogle } from 'react-icons/bs';
import s from '../../styles/Login.module.scss';

const index = () => {
  return (
    <>
      <section className="p-5 my-5 form-wrapper">
        <div className="container h-custom">
          <div className="row bs-dark d-flex justify-content-center align-items-center h-100">
            {/* left section */}
            <div
              className={cls(
                'col-md-9 col-lg-6 col-xl-5 position-relative',
                s.imgBox
              )}
            >
              <Image src={UserImg} className="img-fluid" alt="Sample image" />
            </div>
            {/* right section */}
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              {/* signin login option */}
              {/* <div className={cls('d-flex justify-content-center mb-4')}>
                <button className="btn btn-primary text-white px-5">
                  Log in
                </button>
                <button className="btn btn-outline-primary ms-3 px-5">
                  Sign in
                </button>
              </div> */}

              <form className={cls('px-3')} autoComplete="off">
                {/* Email input */}
                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                </div>

                {/* Password input */}
                <div className="form-outline mb-3">
                  <label className="form-label" for="form3Example4">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <div className={cls(s.loginBtn)}>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg w-100 text-white"
                      style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                    >
                      Login
                    </button>
                  </div>
                  <p className="small fw-medium mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a href="#!" className="ms-2 link-danger">
                      Register
                    </a>
                  </p>
                </div>

                <div
                  className={cls(
                    'divider d-flex align-items-center my-4',
                    s.divider
                  )}
                >
                  <p className="text-center fw-bold mx-3 mb-0">OR</p>
                </div>

                <div className="d-flex flex-row align-items-center justify-content-center">
                  <button
                    type="button"
                    className="btn btn-primary btn-floating text-white mx-1"
                  >
                    <FaFacebookF />
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary text-white btn-floating mx-1"
                  >
                    <BsInstagram />
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary text-white btn-floating mx-1"
                  >
                    <BsGoogle />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
