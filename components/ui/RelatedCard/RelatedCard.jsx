import React from 'react';
import Button from '../Button/Button';
import cls from 'classnames';
import ProductSlidebar from '../../product/ProductSlidebar/ProductSlidebar';
import s from './RelatedCard.module.scss';

function openModal() {
  alert('Thank you');
}

const RelatedCard = () => {
  return (
    <div className={cls(s.relatedBox)}>
      {/* top heading section */}
      <div className={cls('d-flex js-between', s.relatedHeader)}>
        <h3>Featured Products</h3>
        <Button
          className={'btn btn-primary text-white px-4'}
          onClick={() => openModal()}
        >
          See All
        </Button>
      </div>
      {/* bottom product description  */}
      <div className={cls(s.ProductDesc)}>
        <ProductSlidebar />
      </div>
    </div>
  );
};

export default RelatedCard;
