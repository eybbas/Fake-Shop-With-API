import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Mainpage.css'
import { observer } from 'mobx-react';
import MobxMainpage from './MobxMainpage';

const Mainpage = observer(() => {

  if(!localStorage.getItem('cartList')){
    localStorage.setItem('cartList', []);
  }
  if(!localStorage.getItem('totalPrice')){
    localStorage.setItem('totalPrice', 0);
  }
  if(!localStorage.getItem('totalQuantity')){
    localStorage.setItem('totalQuantity', 0);
  }

  const [productList, setProductList] = useState([]);


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((res) => {
      setProductList(res.data);
    })
    .catch((error) => {
      console.error('Ошибка при загрузке товаров:', error);
    });
  }, [])

  return(
        <div className='shop-window-div'>
          {productList.map((product) => {
            return(
                <div className='products-card-div'>
                  <div className='products-image-div'>
                    <img className='products-image-img' src={product.image}></img>
                  </div>
                  <div className='products-info-div'>
                    <Link to={`product/${product.id}`} className='products-name-span'>{product.title}</Link>
                    <span className='products-price-span'>${product.price}</span>
                    <button className='products-add-to-bag-button' onClick={() => {MobxMainpage.addToBag(product)}}>Add to Bag</button>
                  </div>
                </div>
            )
          })}  
        </div>
  )
})

export {Mainpage};