import './Cartpage.css'
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import MobxStore from './MobxStore';
import '../fonts/icomoon-v1.0/style.css'

const Cartpage = observer(() => {

    return(
        <div className='cart-div'>
            <div className="cart-window-div">
                {MobxStore.cartList.map((product) => (
                        <div className='cart-products-card-div'>
                          <div className='cart-products-image-div'>
                            <img className='cart-products-image-img' src={product.image}></img>
                          </div>
                          <div className='cart-products-info-div'>
                            <span className='cart-products-name-span'>{product.title}</span>
                            <div className='cart-products-quantity-plus-minus-div'>
                              <button className='cart-products-quantity-minus-button' onClick={() => {MobxStore.productMinus(product)}}><span class="icon-minus"></span></button>
                              <span className='cart-products-quantity-span'>{product.quantity}</span>
                              <button className='cart-products-quantity-plus-button' onClick={() => {MobxStore.productPlus(product)}}><span class="icon-plus"></span></button>
                            </div>
                            <span className='cart-products-price-span'>${product.price}</span>
                          </div>
                          <div className='cart-products-remove-button-div'>
                            <button className='cart-products-remove-button' onClick={() => {MobxStore.removeCart(product)}}><span class="icon-cross"></span></button>
                          </div>
                          
                        </div>
                ))}
            </div>
            <div className='cart-order-div'> 
                <span className='cart-total-price-span'>Total Price: ${MobxStore.totalPrice.toFixed(2)}</span>
                <Link to='/check-out'>
                  <button className='cart-order-button'>Order</button>
                </Link>
                
            </div>
        </div>
    )
})

export {Cartpage};