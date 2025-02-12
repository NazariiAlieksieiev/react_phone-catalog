import { Link } from 'react-router-dom';
import style from './NavMenu.module.scss';

const navBarLinks = [
  { name: 'home', path: '/home' },
  { name: 'phones', path: '/catalog/phones' },
  { name: 'tablets', path: '/catalog/tablets' },
  { name: 'accessories', path: '/catalog/accessories' },
];

export const NavMenu: React.FC = () => {
  return (
    <nav className={style['nav-menu']}>
      <ul className={style['nav-menu__list-items']}>
        {navBarLinks.map(({ name, path }) => (
          <li className={style['nav-menu__list-item']} key={name}>
            <Link to={path} className={style['nav-menu__list-link']}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
