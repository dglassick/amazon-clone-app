import React from 'react';
import { useStateValue } from '../../utils/StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({ id, image, title, price, rating }) {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    });
  };
  return (
    <div className='checkoutProduct'>
      <img src={image} alt={title} className='checkoutProduct__image' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          <p title={`${rating} out of 5 stars`}>
            {`⭐`.repeat(rating)}
            <span style={{ filter: `grayscale(100%)` }}>
              {`⭐`.repeat(5 - rating)}
            </span>
          </p>
        </div>
        <button className='checkoutProduct__button' onClick={removeFromBasket}>
          Remove from Checkout
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
