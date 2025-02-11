/* eslint-disable @typescript-eslint/dot-notation */
import React from 'react';
import style from './Header.module.scss';
import { TopBar } from '../TopBar/TopBar';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Header: React.FC = () => {
  return (
    <header className={style['header']}>
      <MobileMenu />
      <TopBar />
    </header>
  );
};
