import Link from 'next/link';
import React, { useState } from 'react';
import Avatar from '../Avatar/Avatar';
import cls from 'classnames';
import Styles from './DropdownMenu.module.scss';

const LINKS = [
  {
    name: 'My Orders',
    href: '/orders',
  },
  {
    name: 'My Profile',
    href: '/profile',
  },
  {
    name: 'My Cart',
    href: '/cart',
  },
];

const DropdownMenu = () => {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <div onClick={() => setDisplay(!display)}>
        <Avatar />
      </div>
      {display && (
        <ul className={cls('dropdown-menu', Styles.dropdown)}>
          {LINKS.map(({ name, href }) => (
            <li key={href} className="dropdown-item">
              <div>
                <Link href={href}>
                  <a className="dropdown-link">{name}</a>
                </Link>
              </div>
            </li>
          ))}

          <li className="dropdown-item">
            <a className="dropdown-link" onClick={() => {}}>
              Logout
            </a>
          </li>
        </ul>
      )}
    </>
  );
};

export default DropdownMenu;
