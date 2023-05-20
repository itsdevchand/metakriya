import React from 'react';
import cls from 'classnames';
import s from './Faq.module.scss';

const Faq = () => {
  return (
    <div className={cls('container')}>
      <div className={cls(s.faqBox)}>
        <h3 className={cls('mb-5 text-center')}>Frequently Asked Question</h3>
        <div
          className={cls(
            'row row-cols-1 row-cols-lg-3 row-cols-md-1',
            s.faqDesc
          )}
        >
          {/* each box */}
          <div className={cls('col mb-lg-0 mb-md-4', s.faqDescBox)}>
            <h4>Can I make edits to a logo after purchasing it?</h4>
            <p>
              Technology is transforming nearly every industry, and construction
              is no exception. One form of tech that has recently had a
              substantial impact on the construction industry is
              three-dimensional (3D) modeling. 3D models have a major role in
              modern construction projects, as they can improve productivity and
              ease of work.
            </p>
          </div>

          {/* each box */}
          <div className={cls('col mb-lg-0 mb-md-4', s.faqDescBox)}>
            <h4>Can I make edits to a logo after purchasing it?</h4>
            <p>
              Technology is transforming nearly every industry, and construction
              is no exception. One form of tech that has recently had a
              substantial impact on the construction industry is
              three-dimensional (3D) modeling. 3D models have a major role in
              modern construction projects, as they can improve productivity and
              ease of work.
            </p>
          </div>

          {/* each box */}
          <div className={cls('col mb-lg-0 mb-md-4', s.faqDescBox)}>
            <h4>Can I make edits to a logo after purchasing it?</h4>
            <p>
              Technology is transforming nearly every industry, and construction
              is no exception. One form of tech that has recently had a
              substantial impact on the construction industry is
              three-dimensional (3D) modeling. 3D models have a major role in
              modern construction projects, as they can improve productivity and
              ease of work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
