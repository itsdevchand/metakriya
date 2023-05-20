import React from "react";
import cls from "classnames";
import Image from "next/image";
import ImageOne from "../../../public/images/3dModeling/peopleFive.png";
import { BsDot } from "react-icons/bs";
import s from "./BlogCard.module.scss";

const BlogCard = () => {
  return (
    <div className={s.blogCard}>
      <div className={s.blogCardImg}>
        <div className={s.imgOverlay}></div>
        <Image layout="fill" src={ImageOne} alt="Picture of the User" />
      </div>
      <div className={cls("px-4 py-3", s.blogCardInfo)}>
        <div className={cls("text-primary text-uppercase", s.blogCategory)}>
          Product Design
        </div>
        <div className={cls("fw-5 my-2", s.blogTitle)}>
          Small Fry founder Maisy Summer on how the collective empowers emerging
          creatives.
        </div>
        <div className={cls(s.date)}>
          <span>15 Mar 2022</span>
          <span className={cls("mx-3")}>
            <BsDot />
          </span>
          <span>Read More...</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
