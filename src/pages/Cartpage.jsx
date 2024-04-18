import './Cartpage.css'
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import MobxCartpage from './MobxCartpage';

const Cartpage = observer(() => {
    return(
        <div className='cart-div'>
            <div className="cart-window-div">
                {MobxCartpage.cartList.map((product) => (
                        <div className='cart-products-card-div'>
                          <div className='cart-products-image-div'>
                            <img className='cart-products-image-img' src={product.image}></img>
                          </div>
                          <div className='cart-products-info-div'>
                            <span className='cart-products-name-span'>{product.title}</span>
                            <span className='cart-products-quantity-span'>{product.quantity}</span>
                            <span className='cart-products-price-span'>${product.price}</span>
                            <button className='cart-products-remove-button' onClick={() => {MobxCartpage.removeCart(product)}}>Remove</button>
                          </div>
                        </div>
                ))}
            </div>
            <div className='cart-order-div'> 
                <span className='cart-total-price-span'>Total Price: ${MobxCartpage.totalPrice}</span>
                <Link to='/check-out'>
                  <button className='cart-order-button'>Order</button>
                </Link>
                
            </div>
        </div>
    )
})

export {Cartpage};