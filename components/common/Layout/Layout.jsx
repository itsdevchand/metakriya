import React from "react";
import { Header } from "../../common";
import { Footer } from "../../common";
import cls from "classnames";
import s from "./Layout.module.scss";
const Layout = ({ children }) => {
  return (
    <>
      <header className={cls(s.navBar)}>
        <Header />
      </header>
      <div className={cls(s.bodyWrapper)}>{children}</div>
      <div className={cls("pt-5 pb-4", s.footer)}>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
