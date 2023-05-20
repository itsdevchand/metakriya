import React from 'react';
import s from '../../styles/About.module.scss';
import cls from 'classnames';
import { Service } from '../../components/ui';

const About = () => {
  return (
    <div className={s.about}>
      <div className={cls('mb-5', s.aboutTop)}>
        <div className={cls('container')}>
          <div className={cls('d-flex-align js-center fx-clm', s.aboutHeading)}>
            <div className={cls('fw-6 fs-1')}>About Me</div>
            <div className={cls('fw-6')}>Home &gt; About me </div>
          </div>
        </div>
      </div>

      <div className={cls(s.aboutBottom)}>
        <div className={cls(s.aboutTab)}>
          <Service />
        </div>
        <div className={cls(s.aboutTab)}>
          <Service />
        </div>
      </div>
    </div>
  );
};

export default About;
