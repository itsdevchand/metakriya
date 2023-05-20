import React from "react";
import s from "./Hero.module.scss";
import cls from "classnames";

const Hero = () => {
  return (
    <div className={cls("container")}>
      <div className={s.hero}>
        <div className={cls(s.heroTextbox)}>
          <h2 className={cls("fw-bold")}>
            Building Digital <br /> Products, brands
            <br />
            <div className={s.heroTextStyle}>
              <span className={s.heroTextColor}>experience</span>
            </div>
          </h2>
          <div className={cls("py-3", s.heroDesc)}>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <form className={cls("d-md-flex d-sm-block", s.heroEmail)} action="">
            <div className={cls("form-input", s.formInput)}>
              <input
                className={cls(
                  "form-control w-100 py-3 mb-md-0 mb-2 px-4 rounded-0 rounded-start"
                )}
                type="text"
                placeholder="Email Address"
              />
            </div>
            <button
              type="submit"
              className={cls(
                "px-4 py-md-0 py-3 btn btn-primary text-white border-0 rounded-0 rounded-end"
              )}
            >
              Connect With Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
