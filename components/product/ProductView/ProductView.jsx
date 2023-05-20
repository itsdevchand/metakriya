import React from 'react';
import Image from 'next/image';
import s from './ProductView.jsx';
import cls from 'classnames';
// import Imageone from '../../../public/images/3dModeling/peopleFive.png';

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const ProductView = () => {
  return (
    <div className={cls(s.productView)}>
      <Image loader={myLoader} src={myLoader()} alt="Picture of the author" />
    </div>
  );
};

export default ProductView;
