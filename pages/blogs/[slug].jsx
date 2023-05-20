import React from "react";
import cls from "classnames";
import Image from "next/image";
import UserImg from "../../public/images/3dModeling/peopleThree.jpg";
import { BsDot } from "react-icons/bs";
import s from "./../../styles/BlogDetail.module.scss";

const BlogDetail = () => {
  return (
    <div className={cls(s.bp)}>
      <div className={cls("container")}>
        {/* blogpgae category */}
        <div className={cls("text-uppercase text-primary", s.bpCategory)}>
          <span>Product Desigingin</span>
        </div>

        {/* blogpage title */}
        <div className={cls("mt-2 mb-2", s.bpTitle)}>
          <h2 className={cls("ln-clamp")}>
            What’s catching the eye of Gen Z? Here we look at the visual trends
            their habits are shaping
          </h2>
        </div>

        {/* blogpage info */}
        <div className={cls("d-flex text-secondary", s.bpInfo)}>
          <div className={cls("", s.bpDate)}>
            <span>15 Apr 2021</span>
          </div>
          <div className={cls("mx-2")}>
            <BsDot />
          </div>
          <div className={cls(s.bpRead)}>
            <span>4 min to read</span>
          </div>
        </div>

        {/* blogpage Image section */}
        <div className={cls("my-4", s.bpImgBox)}>
          <div className={cls(s.bpImgWrapper)}>
            <Image layout="fill" src={UserImg} alt="Picture of the User" />
          </div>
          <div
            className={cls("mt-2 text-center font-monospace", s.bpImgCaption)}
          >
            A Picture By <span className={cls("fst-italic")}>John Doe</span>
          </div>
        </div>

        {/* blogpage Descriptiong */}
        <div className={cls(s.bpDesc)}>
          <p className={cls(s.bpDescTab)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            distinctio minus architecto reiciendis eaque maxime, non rem. Id
            numquam labore, perspiciatis saepe, iusto totam aperiam excepturi,
            deleniti repellat architecto quae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam distinctio minus architecto
            reiciendis eaque maxime, non rem. Id numquam labore, perspiciatis
            saepe, iusto totam aperiam excepturi, deleniti repellat architecto
            quae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam distinctio minus architecto reiciendis eaque maxime, non
            rem. Id numquam labore, perspiciatis saepe, iusto totam aperiam
            excepturi, deleniti repellat architecto quae?
          </p>
          <p className={cls(s.bpDescTab)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            distinctio minus architecto reiciendis eaque maxime, non rem. Id
            numquam labore, perspiciatis saepe, iusto totam aperiam excepturi,
            deleniti repellat architecto quae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam distinctio minus architecto
            reiciendis eaque maxime, non rem. Id numquam labore, perspiciatis
            saepe, iusto totam aperiam excepturi, deleniti repellat architecto
            quae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam distinctio minus architecto reiciendis eaque maxime, non
            rem. Id numquam labore, perspiciatis saepe, iusto totam aperiam
            excepturi, deleniti repellat architecto quae?
          </p>

          <h4 className={cls(s.bpDescSubTitle)}>Here are someting Folling</h4>

          <p className={cls(s.bpDescTab)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            distinctio minus architecto reiciendis eaque maxime, non rem. Id
            numquam labore, perspiciatis saepe, iusto totam aperiam excepturi,
            deleniti repellat architecto quae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam distinctio minus architecto
          </p>

          <p className={cls(s.bpDescTab)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            distinctio minus architecto reiciendis eaque maxime, non rem. Id
            numquam labore, perspiciatis saepe, iusto totam aperiam excepturi,
            deleniti repellat architecto quae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam distinctio minus architecto
            reiciendis eaque maxime, non rem. Id numquam labore, perspiciatis
            saepe, iusto totam aperiam excepturi, deleniti repellat architecto
            quae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <h4 className={cls(s.bpDescSubTitle)}>
            Here are someting following something
          </h4>

          <ul className={cls("ps-5 mb-5", s.bpDescList)}>
            <li>Here is something</li>
            <li>There are somebody with something</li>
            <li>More often we do lots of thing</li>
            <li>It is good for the human beings</li>
            <li>There are somebody with something</li>
          </ul>

          <p className={cls(s.bpDescTab)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            distinctio minus architecto reiciendis eaque maxime, non rem. Id
            numquam labore, perspiciatis saepe, iusto totam aperiam excepturi,
            deleniti repellat architecto quae? Lorem ipsum dolor sit amet asdf
            consectetur adipisicing elit. Aperiam distinctio minus architecto
            reiciendis eaque maxime, non rem. Id numquam labore, perspiciatis
            saepe, iusto totam aperiam excepturi, deleniti repellat architecto
            quae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
