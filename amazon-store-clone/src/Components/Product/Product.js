import React from 'react';
import './Product.css';

function Product({ title, price, image, rating }) {
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
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
