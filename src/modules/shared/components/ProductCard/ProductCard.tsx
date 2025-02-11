import classNames from 'classnames';
import style from './ProductCard.module.scss';
import { Product } from '../../types/types';

interface Props {
  cardData: Product;
  withDiscount?: boolean;
}

export const ProductCard: React.FC<Props> = ({ cardData, withDiscount }) => {
  const { name, fullPrice, price, screen, capacity, ram, image } = cardData;

  return (
    <div className={style['product-card']}>
      <img src={image} alt={name} className={style['product-card__img']} />

      <div className={style['product-card__title-container']}>
        <a href="#" className={style['product-card__title']}>
          {name}
        </a>
      </div>

      <div className={style['product-card__prices']}>
        <p className={style['product-card__price']}>${price}</p>

        {withDiscount && (
          <p
            className={classNames(style['product-card__price'], {
              [style['is--discount']]: withDiscount,
            })}
          >
            ${fullPrice}
          </p>
        )}
      </div>

      <table className={style['product-card__description']}>
        <tbody>
          <tr>
            <td className={style['product-card__description-cell--left']}>
              Screen
            </td>
            <td className={style['product-card__description-cell--right']}>
              {screen}
            </td>
          </tr>
          <tr>
            <td className={style['product-card__description-cell--left']}>
              Capacity
            </td>
            <td className={style['product-card__description-cell--right']}>
              {capacity}
            </td>
          </tr>
          <tr>
            <td className={style['product-card__description-cell--left']}>
              RAM
            </td>
            <td className={style['product-card__description-cell--right']}>
              {ram}
            </td>
          </tr>
        </tbody>
      </table>

      <div className={style['product-card__buttons']}>
        <button type="button" className={style['product-card__add-to-cart']}>
          Add to cart
        </button>
        <button
          type="button"
          className={classNames(
            style['product-card__add-to-favorite'],
            // style['is--added'],
          )}
        ></button>
      </div>
    </div>
  );
};
