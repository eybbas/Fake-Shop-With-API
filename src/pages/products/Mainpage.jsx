import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Mainpage.css'
import { observer } from 'mobx-react';
import addtobag from '../../img/addtobag.png'
import MobxStore from './MobxStore'

const Mainpage = observer(() => {

  if(!localStorage.getItem('cartList')){
    localStorage.setItem('cartList', []);
  }
  if(!localStorage.getItem('totalPrice')){
    localStorage.setItem('totalPrice', 0.00);
  }
  if(!localStorage.getItem('totalQuantity')){
    localStorage.setItem('totalQuantity', 0);
  }

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
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
                  <Link to={`/products/${product.id}`} className='link-to-product-page' >
                    <div className='products-image-div'>
                      <img className='products-image-img' src={product.images[0]}></img>
                    </div>
                    <div className='products-info-div'>
                      <span className='products-name-span'>{product.title}</span>
                    </div>
                  </Link>
                    <div className='add-to-bag-div'>
                      <span className='products-price-span'>${product.price}</span>
                      <button className='add-to-bag-btn' onClick={() => {MobxStore.addToBag(product)}}><img className='add-to-bag-img' src={addtobag} alt="" /></button>
                    </div>
                  </div>
            )
          })}  
        </div>
  )
})

export {Mainpage};