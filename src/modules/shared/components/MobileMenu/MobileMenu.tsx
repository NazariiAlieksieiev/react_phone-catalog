import { useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { FavoriteCartLinks } from '../FavoriteCartLinks/FavoriteCartLinks';
import { TopBar } from '../TopBar/TopBar';

import style from './MobileMenu.module.scss';
import { NavMenu } from '../NavMenu/NavMenu';
import { useEffect } from 'react';

export const MobileMenu: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isOpen = location.hash === '#menu';

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640 && isOpen) {
        navigate('/');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, navigate]);

  return (
    <div
      className={cn(style['mobile-menu'], {
        [style['mobile-menu--isOpen']]: isOpen,
      })}
    >
      <TopBar />
      <NavMenu />
      <div className={style['mobile-menu__container-for-links']}>
        <FavoriteCartLinks />
      </div>
    </div>
  );
};
