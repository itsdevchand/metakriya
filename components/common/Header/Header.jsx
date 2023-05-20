import React from "react";
import { Navbar } from "../../common";
import cls from "classnames";

const Header = () => {
  return (
    <div className={cls("container")}>
      {/* navbar section */}
      <Navbar />

      {/* hero section */}
    </div>
  );
};

export default Header;
