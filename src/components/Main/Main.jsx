import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { left, randomuser, reviewsimg, right } from '../../assets'
import { FirebaseDB } from '../../db/db';
import Card from '../Card/Card';
import './Main.scss'

const Main = () => {
  const { getProducts } = FirebaseDB();
  const { products } = useSelector(state => state.products)
  
  useEffect(() => {
  getProducts();
  }, []);
  
  useEffect(() => {
  if (products) {
  console.log(products);
  }
  }, [products]);

  return (

    <div className='main'>
      <div className='main_1'>

        <div className='zagolovok'>
            <span>Offer products to make your <br /> interior <span>Minimalist.</span></span>
            <p>we have helped more than 1000+ people to give <br /> perfect comfort to the interior of their home</p>
            <button>Find Product</button>
        </div>
        <div>
        {products?.map((item, idx) => (
          <Card {...item} key={idx} />
          ))}
      </div>
      </div>


      <div className='reviews'>
        <div className="reviews__left">
          <span>What are they saying ?</span>
          <div>
            <img src={randomuser} />
          </div>
          <p>the services and products offered are very good, <br /> 
          matched what I was looking for. now my room is <br /> 
          more beautiful and aesthetic.</p>
          <div className='movebtn'>
            <img src={left} />
            <img src={right} />
          </div>
        </div>
        <div className="reviews__right">
          <img src={reviewsimg} />
        </div>
      </div>
      <div className="contactus">
        <h3>Contact us if you need anything, <br />
         we are ready to serve you</h3>
        <button>Contact us</button>
      </div>
    </div>
  )
}

export default Main