import React from "react";
import cls from "classnames";
import s from "./ProductList.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className={cls(s.productList)}>
      <div className={cls("row gy-5 row-cols-lg-3 row-cols-sm-2 row-cols-1")}>
        <div className={cls("col")}>
          <Link href="./products/item">
            <a>
              <ProductCard />
            </a>
          </Link>
        </div>
        <div className={cls("col")}>
          <Link href="./products/item">
            <a>
              <ProductCard />
            </a>
          </Link>
        </div>
        <div className={cls("col")}>
          <Link href="./products/item">
            <a>
              <ProductCard />
            </a>
          </Link>
        </div>
        <div className={cls("col")}>
          <Link href="./products/item">
            <a>
              <ProductCard />
            </a>
          </Link>
        </div>
        <div className={cls("col")}>
          <Link href="./products/item">
            <a>
              <ProductCard />
            </a>
          </Link>
        </div>
        <div className={cls("col")}>
          <Link href="./products/item">
            <a>
              <ProductCard />
            </a>
          </Link>
        </div>
        <div className={cls("col")}>
          <Link href="./products/item">
            <a>
              <ProductCard />
            </a>
          </Link>
        </div>
        <div className={cls("col")}>
          <Link href="./products/item">
            <a>
              <ProductCard />
            </a>
          </Link>
        </div>
        <div className={cls("col")}>
          <Link href="./products/item">
            <a>
              <ProductCard />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
