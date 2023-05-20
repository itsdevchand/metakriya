import React from "react";
import Image from "next/image";
import ImageOne from "../../../public/images/3dModeling/peopleTwo.png";
import cls from "classnames";
import Cart from "../../icons/Cart";
import s from "./ProductCard.module.scss";
import { Rating } from "../../ui/index";

const ProductCard = () => {
  return (
    <div className={cls("rounded-bottom bx-light br-light", s.productBox)}>
      <div className={cls(s.productImage)}>
        <Image layout="fill" src={ImageOne} alt="Picture of the User" />
      </div>
      <div className={cls("p-3", s.productInfo)}>
        <h4 className={cls(s.productTitle)}>
          The 3D model girl with extra shadow with lighiting and something
          different will be the same thing
        </h4>

        {/* rating box */}
        <div className={cls("d-flex-align", s.productRating)}>
          {/* rating Icons */}
          <div className={cls("d-flex-align js-center", s.productRatingIcons)}>
            <Rating />
          </div>

          {/* rating count */}
          <div className={cls("d-flex", s.productRatingCount)}>(85)</div>
        </div>

        <div className={cls("pt-2 d-flex-align js-between", s.productBottom)}>
          {/* price section */}
          <div className={cls(s.productPrice)}>
            <div className={cls(s.pricetext)}>Price</div>
            <div className={cls("d-flex", s.priceCount)}>
              <span>$</span>
              <span>65</span>
            </div>
          </div>

          {/* product cart */}
          <div className={cls(s.productCart)}>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
