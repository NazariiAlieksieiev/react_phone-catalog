// eslint-disable-next-line max-len
import { useLocation } from 'react-router-dom';
import cn from 'classnames';

import { FavoriteCartLinks } from '../FavoriteCartLinks/FavoriteCartLinks';
import { TopBar } from '../TopBar/TopBar';

import style from './MobileMenu.module.scss';

export const MobileMenu: React.FC = () => {
  const location = useLocation();
  const isOpen = location.hash === '#menu';

  return (
    <div
      className={cn(style['nav-menu'], { [style['nav-menu--isOpen']]: isOpen })}
    >
      <TopBar />

      <ul className={style['nav-menu__list-items']}>
        <li className={style['nav-menu__list-item']}>
          <a href="" className={style['nav-menu__list-link']}>
            Home
          </a>
        </li>
        <li className={style['nav-menu__list-item']}>
          <a href="" className={style['nav-menu__list-link']}>
            Phones
          </a>
        </li>
        <li className={style['nav-menu__list-item']}>
          <a href="" className={style['nav-menu__list-link']}>
            Tablets
          </a>
        </li>
        <li className={style['nav-menu__list-item']}>
          <a href="" className={style['nav-menu__list-link']}>
            Accessories
          </a>
        </li>
      </ul>

      <div className={style['nav-menu__container-for-links']}>
        <FavoriteCartLinks />
      </div>
    </div>
  );
};
