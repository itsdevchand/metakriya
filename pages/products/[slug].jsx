import React from "react";
import cls from "classnames";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ImageOne from "../../public/images/3dModeling/robot.jpeg";
import s from "../../styles/ProductDetail.module.scss";
import { Button, Card, TagBox } from "../../components/ui";

const ProductDetail = () => {
  return (
    <div className={cls("container")}>
      <div className={cls(s.productDetail)}>
        <div className={"row row-cols-md-2 row-cols-1"}>
          <div className={"col"}>
            {/* image section */}
            <div className={cls("br-light bs-light mb-4", s.pdImage)}>
              <Image layout="fill" src={ImageOne} alt="Picture of the User" />
            </div>

            {/* new section */}
            {/* product description */}

            <div className={cls("py-4", s.purchase)}>
              <div className={cls("row")}>
                <div className={cls("col")}>
                  {/* cart section */}
                  <div className={cls(s.addCart)}>
                    <Button className={cls("btn py-3 btn-danger w-100 ")}>
                      <AiOutlineShoppingCart />
                      <span className={cls("ms-2 text-uppercase")}>
                        add to cart
                      </span>
                    </Button>
                  </div>
                </div>
                <div className={cls("col")}>
                  {/* buy section */}
                  <div className={cls(s.addCart)}>
                    <Button
                      className={cls("btn py-3 btn-primary text-white w-100")}
                    >
                      <AiOutlineShoppingCart />
                      <span className={cls("ms-2 text-uppercase")}>
                        buy now
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className={cls("p-5 mb-4 bs-light br-light", s.pdDesc)}>
              <div
                className={cls("fw-6 fs-3 text-captilize ln-clamp", s.pdName)}
              >
                A female character with something special and something there
              </div>
              <div className={cls("d-flex-align my-2", s.pdPrice)}>
                <div className={cls("fw-6 fs-4", s.pdPriceTab)}>
                  <span>$</span>
                  <span>255</span>
                </div>
                <div className={cls("fw-6 text-grey ms-2", s.pdMpTab)}>
                  <span>$</span>
                  <span>321</span>
                </div>
                <div className={cls("text-primary ms-2", s.pdDiscountTab)}>
                  <span>25</span>
                  <span>% off</span>
                </div>
              </div>
              <div className={cls(s.pdDescList)}>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione neque quod tempora voluptatibus totam. Cum, vero
                  quibusdam mollitia culpa qui nihil voluptatum praesentium
                  laudantium. Quod quibusdam provident recusandae nulla
                  officiis.
                </p>
                <ul className={cls("ps-1")}>
                  <li>This model is exterior only. There is no interior.</li>
                  <li>High-poly model.</li>
                  <li>Very high quality and precise exterior.</li>
                  <li>
                    Realistic textures (carbon roof, carbon ceramic brakes,
                    etc.) Checking operation in ender.
                  </li>
                  <li>
                    Body color can be easily changed. (The blender file contains
                    materials that reproduce the eight official colors of the
                    real car.)
                  </li>
                  <li>Great topology for reflection.</li>
                  <li>
                    If you open the file in something other than blender, please
                    use the texture file. If you like it, please rate it!
                  </li>
                </ul>

                {/* product tags */}
                <div
                  className={cls("p-2 mt-3 br-light bs-light", s.tabWrapper)}
                >
                  <TagBox />
                </div>
              </div>
            </div>
          </div>
          <div className={"col"}>
            {/* product fiile format */}
            <div className={cls(s.pdFormat)}>
              <Card />
            </div>
            {/* product specification */}
            <div className={cls("my-4", s.pdSpec)}>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
