import React from 'react';
import Image from 'next/image';
import Avatar from '../../../public/images/prasanna/user-one.jpg';
import s from './signin.module.scss';
import cls from 'classnames';

const index = () => {
  return (
    <main class="d-flex w-100">
      <div class="container d-flex flex-column">
        <div class="row vh-100">
          <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div class="d-table-cell align-middle">
              <div class="text-center mt-4">
                <h1 class="h2">Welcome back, Charles</h1>
                <p class="lead">Sign in to your account to continue</p>
              </div>

              <div class="card">
                <div class="card-body">
                  <div class="m-sm-4">
                    <div className={cls(s.imgBox)}>
                      <div className={cls(s.cardImg)}>
                        <Image
                          layout="fill"
                          src={Avatar}
                          alt="Charles Hall"
                          class="img-fluid rounded-circle"
                        />
                      </div>
                    </div>
                    <form autoComplete="off">
                      <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input
                          class="form-control form-control-lg"
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input
                          class="form-control form-control-lg"
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                        />
                        <small>
                          <a href="index.html">Forgot password?</a>
                        </small>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          Checked checkbox
                        </label>
                      </div>
                      <div class="text-center mt-3">
                        <a
                          href="index.html"
                          class="btn btn-lg btn-primary text-white"
                        >
                          Sign in
                        </a>
                        {/* <button type="submit" class="btn btn-lg btn-primary">Sign in</button> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;
