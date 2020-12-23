import React from 'react';
import { useStateValue } from '../../utils/StateProvider';
import './Product.css';

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket, 'this is basket');

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          <p title={`${rating} out of 5 stars`}>
            {`⭐`.repeat(rating)}
            <span style={{ filter: `grayscale(100%)` }}>
              {`⭐`.repeat(5 - rating)}
            </span>
          </p>
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
