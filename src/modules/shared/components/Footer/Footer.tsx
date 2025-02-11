/* eslint-disable @typescript-eslint/dot-notation */
import { Link } from 'react-router-dom';
import style from './Footer.module.scss';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <footer className={style['footer']}>
      <Link to="/home" className={style['footer__logo-link']}>
        <img
          src="/icons/Logo.png"
          alt="footer logo"
          className={style['footer__logo']}
        />
      </Link>

      <ul className={style['footer__list']}>
        <li className={style['footer__list-item']}>
          <a href="#" className={style['footer__link']}>
            Github
          </a>
        </li>
        <li className={style['footer__list-item']}>
          <a href="#" className={style['footer__link']}>
            Contacts
          </a>
        </li>
        <li className={style['footer__list-item']}>
          <a href="#" className={style['footer__link']}>
            Rights
          </a>
        </li>
      </ul>

      <div className={style['footer__back-to-top']}>
        <p className={style['footer__back-to-top-text']}>Back to top</p>
        <button
          className={style['footer__back-to-top-button']}
          onClick={scrollToTop}
        ></button>
      </div>
    </footer>
  );
};
