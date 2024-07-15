import { observer } from 'mobx-react'
import MobxStore from '../products/MobxStore'
import './cartpage.css'

const Cartpage = observer(() => {

    return(
      <>
        <div className='cart-div'>
            <div className='cart-products-div'>
              <div className='cart-title-div'>
                <span className='cart-title-span'>My Shoping Bag</span>
                <div className='cart-sort-div'>
                  <span className='cart-sort-span-1'>Product</span>
                  <div className='cart-second-sort-div'>
                    <span className='cart-sort-span-2'>Price</span>
                    <span className='cart-sort-span-3'>Total</span>
                  </div>
                </div>
              </div>
              <div className='cart-product-list-div'>
              {MobxStore.cartList.map((product) => (
                        <div className='cart-products-card-div'>
                          <div className='cart-products-image-div'>
                            <img className='cart-products-image-img' src={product.images[0]}></img>
                          </div>
                          <div className='cart-products-info-div'>
                            <span className='cart-products-name-span'>{product.title}</span>
                            <span className='cart-products-category-span'>{product.category.name}</span>
                            <div className='cart-products-quantity-plus-minus-div'>
                              <button className='cart-products-quantity-minus-button' onClick={() => {MobxStore.productMinus(product)}}>-</button>
                              <span className='cart-products-quantity-span'>{product.quantity}</span>
                              <button className='cart-products-quantity-plus-button' onClick={() => {MobxStore.productPlus(product)}}>+</button>
                            </div>
                            <div className='cart-products-remove-button-div'>
                              <button className='cart-products-remove-button' onClick={() => {MobxStore.removeCart(product)}}>Remove</button>
                            </div>
                          </div>
                          <div className='cart-product-prices-div'>
                            <div className='cart-product-price-div'>
                              <span className='cart-product-price-span'>${product.price/product.quantity}</span>
                            </div>
                            <div className='cart-product-total-price-div'>
                            <span className='cart-product-total-price-span'>${product.price}</span>
                            </div>
                          </div>
                          
                        </div>
                ))}
              </div>
            </div>
            <div className='cart-bill-div'>
              <div className='cart-bill-title-div'>
                <span className='cart-bill-title-span'>Summary</span>
              </div>
              <div className='cart-bill-info-div'>
                <div className='cart-bill-subtotal-div'>
                 <span className='cart-bill-subtotal-label'>Subtotal</span>
                 <span className='cart-bill-subtotal-span'>${MobxStore.totalPrice}</span>
                </div>
                <div className='cart-bill-ttquantity-div'>
                  <span className='cart-bill-ttquantity-label'>Total Quantity</span>
                  <span className='cart-bill-ttquantity-span'>{MobxStore.totalQuantity}</span>
                </div>
                <div className='cart-bill-shiping-div'>
                  <span className='cart-bill-shiping-label'>Shipping</span>
                  <span className='cart-bill-shiping-span'>FREE</span>
                </div>
              </div>
              <div className='cart-promocode-div'>
                <input type="text" className='cart-promocode-input' placeholder='Do you have a promo code?'/>
                <button className='cart-promocode-btn'>Apply</button>
              </div>
              <div className='cart-bill-checkout-div'>
                <button className='cart-bill-checkout-button'>Checkout</button>
              </div>
              <div className='cart-bill-support-div'>
                <span className='cart-bill-support-span'>Need Help? Call us at 1-777-77-77</span>
              </div>
            </div>
        </div>
      </>
          
    )
})

export {Cartpage};