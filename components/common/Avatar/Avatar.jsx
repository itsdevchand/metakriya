import React from 'react';
import Image from 'next/image';
import UserImg from '../../../public/images/prasanna/user-one.jpg';
import styles from './Avatar.module.scss';

const Avatar = () => {
  return (
    <div className={styles.userAvatar}>
      <Image layout="fill" src={UserImg} alt="Picture of the User" />
    </div>
  );
};

export default Avatar;
