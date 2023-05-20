import React from 'react';
import s from './Footer.module.scss';
import cls from 'classnames';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={cls('container')}>
      <div className={cls('row', s.ftBox)}>
        <div className={cls('col-lg-2 col-md-12 mb-lg-0 mb-5')}>
          <div className={cls(s.ftMain)}>
            <h2>Pixkirya</h2>
            <div className={cls('d-flex-align', s.ftLogoBox)}>
              <a className={cls('me-3')}>
                <FaFacebookF />
              </a>
              <a className={cls('me-3')}>
                <FaInstagram />
              </a>
              <a className={cls('me-3')}>
                <FaTwitter />
              </a>
              <a className={cls('me-3')}>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className={cls('col-lg-10 col-md-12')}>
          <div className={cls('row row-cols-2 row-cols-md-4', s.ftInfo)}>
            {/* each box */}
            <div className={cls('col mb-md-0 mb-4')}>
              <div className={cls(s.ftInfoBox)}>
                <h4 className='mb-3'>Company</h4>
                <ul>
                  <li>About</li>
                  <li>Press</li>
                  <li>Offers</li>
                  <li>Contact</li>
                  <li>Help Center</li>
                </ul>
              </div>
            </div>

            {/* each box */}
            <div className={cls('col mb-md-0 mb-4')}>
              <div className={cls(s.ftInfoBox)}>
                <h4 className='mb-3'>Community</h4>
                <ul>
                  <li>About</li>
                  <li>Press</li>
                  <li>Offers</li>
                  <li>Contact</li>
                  <li>Help Center</li>
                </ul>
              </div>
            </div>
            {/* each box */}
            <div className={cls('col mb-md-0 mb-4')}>
              <div className={cls(s.ftInfoBox)}>
                <h4 className='mb-3'>Products</h4>
                <ul>
                  <li>About</li>
                  <li>Press</li>
                  <li>Offers</li>
                  <li>Contact</li>
                  <li>Help Center</li>
                </ul>
              </div>
            </div>
            {/* each box */}
            <div className={cls('col mb-md-0 mb-4')}>
              <div className={cls(s.ftInfoBox)}>
                <h4 className='mb-3'>Language</h4>
                <ul>
                  <li>About</li>
                  <li>Press</li>
                  <li>Offers</li>
                  <li>Contact</li>
                  <li>Help Center</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
