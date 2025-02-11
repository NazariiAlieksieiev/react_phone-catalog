import style from './FavoriteCartLinks.module.scss';

export const FavoriteCartLinks: React.FC = () => {
  return (
    <div className={style['favorite-cart-links__container']}>
      <a
        className={`${style['favorite-cart-links__go-to-favorite']} ${style['favorite-cart-links__link']}`}
      ></a>
      <a
        className={`${style['favorite-cart-links__go-to-cart']} ${style['favorite-cart-links__link']}`}
      ></a>
    </div>
  );
};
