import React from "react";
import Button from "../../ui/Button/Button";
import Cart from "../../icons/Cart";
import DropdownMenu from "./DropdownMenu";
import s from "./UserNav.module.scss";
import cls from "classnames";
import Link from "next/link";

const UserNav = () => {
  const itemsCount = 1;
  const isLoggedIn = true;

  return (
    <div className={cls("row js-between")}>
      {/* navbar menu section */}
      <div className={cls("col")}>
        <div className={cls("d-md-block d-none nav-menu")}>
          <ul className="d-flex">
            <li className="nav-item">
              <Link href="/">
                <a className={cls("nav-link")}>Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products">
                <a className={cls("nav-link")}>Shop</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blogs">
                <a className={cls("nav-link")}>Blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className={cls("nav-link")}>About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className={cls("nav-link")}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* navbar profile secton */}
      <div className={cls("col")}>
        <div className="user-section d-flex-align js-end">
          <div className={cls("position-relative", s.userProfile)}>
            {isLoggedIn ? (
              <div className={cls("me-4", s.profileWrapper)}>
                <DropdownMenu />
              </div>
            ) : (
              <Button onClick={() => {}}>Login</Button>
            )}
          </div>
          <div className={s.userCart}>
            <Button
              variant="naked"
              onClick={() => {
                // setSidebarView('CART_VIEW');
                // toggleSidebar();
              }}
              aria-label={`Cart items: ${itemsCount}`}
            >
              <Cart />
              {/* <Bag /> Cart Icon*/}
              {itemsCount > 0 && (
                <span className={s.cartCount}>{itemsCount}</span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
