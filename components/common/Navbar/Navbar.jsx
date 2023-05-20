import React from "react";
import Logo from "../../ui/Logo/Logo";
import Menu from "../../icons/Menu";
import UserNav from "../UserNav/UserNav";
import s from "./Navbar.module.scss";
import cls from "classnames";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={cls(s.pxNavbar)}>
      <div className={cls("row")}>
        {/* left section */}
        <div className={cls("col-4")}>
          <div className={cls("d-flex al-center logo-wrapper")}>
            <div className={cls("d-md-none d-sm-block hamburder-menu")}>
              <button
                className={cls("navbar-toggler d-flex-align")}
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mbNavMenu"
                aria-controls="mbNavMenu"
              >
                <span className="navbar-toggler-icon">
                  <Menu />
                </span>
              </button>

              {/* mobile menu */}
              <div
                className={cls("offcanvas offcanvas-start")}
                tabIndex="-1"
                id="mbNavMenu"
                aria-labelledby="mbNavMenuLabel"
              >
                <div className={cls("offcanvas-header")}>
                  <h1
                    className={cls("offcanvas-title text-primary")}
                    id="mbNavMenuLabel"
                  >
                    Metakriya
                  </h1>
                  <button
                    type="button"
                    className={cls("btn-close text-reset")}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className={cls("offcanvas-body")}>
                  <div className={cls(s.mobileMenu)}>
                    <ul>
                      <li className={cls("py-1")}>
                        <Link href="/">
                          <a
                            className={cls(
                              "px-3 py-1",
                              s.mbMenuLink,
                              s.linkActive
                            )}
                          >
                            Home
                          </a>
                        </Link>
                      </li>
                      <li className={cls("py-1")}>
                        <Link href="/products">
                          <a className={cls("px-3 py-1", s.mbMenuLink)}>Shop</a>
                        </Link>
                      </li>
                      <li className={cls("py-1")}>
                        <a className={cls("px-3 py-1", s.mbMenuLink)} href="#">
                          Blog
                        </a>
                      </li>
                      <li className={cls("py-1")}>
                        <a className={cls("px-3 py-1", s.mbMenuLink)} href="#">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="logo-box">
              <Logo />
            </div>
          </div>
        </div>
        {/* second row */}
        <div className={cls("col-8")}>
          {/*right section */}
          <div className={cls(s.navBox)}>
            <UserNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
