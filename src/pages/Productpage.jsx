import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './Productpage.css'

function Productpage(){

  const [product, setProduct] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      setProduct([res.data]);
    })
    .catch((error) => {
      console.error('Ошибка при загрузке товаров:', error);
    });
  }, [id])

    return(
      <>
        {product.map((product) => (
            <div className='product-div'>
              <div className='product-img-div'>
                <img className='product-img' src={product.image}/>
              </div>
              <div className='product-info-div'>
                <div className='product-title-div'>
                  <span className='product-title-span'>{product.title}</span>
                  <div className='product-category-rate-div'>
                    <span className='product-category-span'>category: {product.category}</span>
                    <span className='product-rate-span'>rate: {product.rating.rate}</span>
                  </div>
                </div>
                <div className='product-description-div'>
                  <span className='product-description-title-span'>Description:</span>
                  <span className='product-description-span'>{product.description}</span>
                </div>
                <div className='product-price-div'>
                  <span className='product-price-span'>${product.price}</span>
                  <button className='product-add-to-bag-btn'>Add to Bag</button>
                </div>
              </div>
            </div>
          ))}
      </>
          
    )
}

export {Productpage};