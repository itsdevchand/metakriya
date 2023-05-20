import React from 'react';
import cls from 'classnames';
import s from './Card.module.scss';

const Card = () => {
  return (
    <div className={cls('p-4 bs-light br-light', s.card)}>
      <h4 className={cls(s.cardTitle)}>3D Model Format</h4>
      <div className={s.cardList}>
        <ul>
          <li className={'d-flex-align br-bt-light js-between'}>
            <span>OBJ(.obj, .mtl)(2 files)</span>
            <span>123MB</span>
          </li>
          <li className={'d-flex-align br-bt-light js-between'}>
            <span>AutoDesk</span>
            <span>57MB</span>
          </li>
          <li className={'d-flex-align br-bt-light js-between'}>
            <span>Blender</span>
            <span>12MB</span>
          </li>
          <li className={'d-flex-align br-bt-light js-between'}>
            <span>OBJ(.obj, .mtl)(2 files)</span>
            <span>123MB</span>
          </li>
          <li className={'d-flex-align br-bt-light js-between'}>
            <span>AutoDesk</span>
            <span>57MB</span>
          </li>
          <li className={'d-flex-align br-bt-light js-between'}>
            <span>Blender</span>
            <span>12MB</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
