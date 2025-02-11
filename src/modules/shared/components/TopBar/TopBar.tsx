import { useLocation, useNavigate } from 'react-router-dom';
import style from './TopBar.module.scss';
import React from 'react';
import { FavoriteCartLinks } from '../FavoriteCartLinks/FavoriteCartLinks';

export const TopBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isOpen = location.hash === '#menu';

  const toggleMenu = () => {
    if (isOpen) {
      navigate(location.pathname);
    } else {
      navigate(`${location.pathname}#menu`);
    }
  };

  return (
    <div className={style['top-bar']}>
      <a href="#" className={style['top-bar__logo-link']}>
        <img
          src="/icons/Logo.png"
          alt="NiceGadgets"
          className={style['top-bar__logo-img']}
        />
      </a>

      <nav className={style['top-bar__nav']}>
        <ul className={style['top-bar__list-items']}>
          <li className={style['top-bar__list-item']}>
            <a href="" className={style['top-bar__list-link']}>
              Home
            </a>
          </li>
          <li className={style['top-bar__list-item']}>
            <a href="" className={style['top-bar__list-link']}>
              Phones
            </a>
          </li>
          <li className={style['top-bar__list-item']}>
            <a href="" className={style['top-bar__list-link']}>
              Tablets
            </a>
          </li>
          <li className={style['top-bar__list-item']}>
            <a href="" className={style['top-bar__list-link']}>
              Accessories
            </a>
          </li>
        </ul>
      </nav>

      <div className={style['top-bar__button']}>
        <button
          type="button"
          className={`${style['top-bar__burger-menu']} ${isOpen ? style['top-bar__burger-menu--close'] : style['top-bar__burger-menu--open']}`}
          onClick={() => toggleMenu()}
        ></button>
      </div>

      <div className={style['top-bar__favorite-cart-links']}>
        <FavoriteCartLinks />
      </div>
    </div>
  );
};
