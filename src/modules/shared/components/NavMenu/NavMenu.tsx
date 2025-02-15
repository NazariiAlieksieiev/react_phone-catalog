import { NavLink } from 'react-router-dom';
import style from './NavMenu.module.scss';

const navBarLinks = [
  { name: 'Home', path: '/home' },
  { name: 'Phones', path: '/catalog/phones' },
  { name: 'Tablets', path: '/catalog/tablets' },
  { name: 'Accessories', path: '/catalog/accessories' },
];

export const NavMenu: React.FC = () => {
  return (
    <nav className={style['nav-menu']}>
      <ul className={style['nav-menu__list-items']}>
        {navBarLinks.map(({ name, path }) => (
          <li className={style['nav-menu__list-item']} key={name}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `${style['nav-menu__list-link']} ${isActive ? style.active : ''}`
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
