import React from 'react';
import Product from '../Product/Product';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/Holiday/late/Holi_D_Hero2_GW_US_EN_v1_1500x600_20201125._CB415756510_.jpg'
          alt=''
        />
        <div className='home__row'>
          <Product
            title='Javascript and Jquery by Jon Duckett'
            price={22.26}
            image='https://images-na.ssl-images-amazon.com/images/I/41WznOEKmAL._SX396_BO1,204,203,200_.jpg'
            rating={5}
          />
          <Product
            title="Demon's Soul - PlayStation 5"
            price={69.09}
            image='https://images-na.ssl-images-amazon.com/images/I/81QoNRp5%2BWL._SL1353_.jpg'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            title='Led Zeppelin IV (Remastered Original Vinyl)'
            price={22.55}
            image='https://images-na.ssl-images-amazon.com/images/I/91-CMzLgOPL._SX425_.jpg'
            rating={4.5}
          />
          <Product
            title='Disney and Pixar Cars Mini Racers Derby Racers Series 10-Pack, Small Metal Movie Vehicles for Competition and Story Play, Wide Character Variety, Authentic Details​​'
            price={19.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81PCDjDSz7L._AC_SL1500_.jpg'
            rating={5}
          />
          <Product
            title='Funko Pop! Animation: My Hero Academia - 10 Inch All Might Vinyl Figure'
            price={29.96}
            image='https://images-na.ssl-images-amazon.com/images/I/61WwFeX2HuL._AC_SL1300_.jpg'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            title='SAMSUNG LC34J791WTNXZA 34-Inch CJ791 Ultrawide Curved Gaming Monitor, White'
            price={649.99}
            image='https://images-na.ssl-images-amazon.com/images/I/91-hWcNu2yL._AC_SL1500_.jpg'
            rating={4.5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
