// eslint-disable-next-line max-len
import { useLocation } from 'react-router-dom';
import cn from 'classnames';

import { FavoriteCartLinks } from '../FavoriteCartLinks/FavoriteCartLinks';
import { TopBar } from '../TopBar/TopBar';

import style from './MobileMenu.module.scss';
import { NavMenu } from '../NavMenu/NavMenu';

export const MobileMenu: React.FC = () => {
  const location = useLocation();
  const isOpen = location.hash === '#menu';

  return (
    <div
      className={cn(style['nav-menu'], { [style['nav-menu--isOpen']]: isOpen })}
    >
      <TopBar />

      <NavMenu />

      <div className={style['nav-menu__container-for-links']}>
        <FavoriteCartLinks />
      </div>
    </div>
  );
};
