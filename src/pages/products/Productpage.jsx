import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import './Productpage.css'
import MobxStore from './MobxStore';

function Productpage(){

  const [product, setProduct] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then((res) => {
      setProduct([res.data])
      console.log(res.data);
    })
    .catch((error) => {
      console.error('Ошибка при загрузке товаров:', error);
    });
  }, [id])

    return(
      <>
        {product.map((product) => (
            <div className='product-div'>
              <Link to='/products'>
                <div className='back-mainpage-btn-div'>
                  <button className='back-mainpage-btn'><span class="icon-arrow-left2"></span></button>
                </div>
              </Link>
              
              <div className='product-indo-main-div'>
              <div className='product-img-div'>
                  <img className='product-img' src={product.images[0]}/>
                </div>
                <div className='product-info-div'>
                  <div className='product-title-div'>
                    <span className='product-title-span'>{product.title}</span>
                  </div>
                  <div className='product-category-rate-div'>
                    <span className='product-category-span'>category: {product.category.name}</span>
                  </div>
                  <div className='product-description-div'>
                    <span className='product-description-title-span'>Description:</span>
                    <span className='product-description-span'>{product.description}</span>
                  </div>
                  <div className='product-price-div'>
                    <div className='product-price-discount-div'>
                      <span className='product-price-span'>${product.price}</span>
                    </div>
                    <button className='product-add-to-bag-btn' onClick={() => {MobxStore.addToBag(product)}}>Add to Bag</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </>
          
    )
}

export {Productpage};