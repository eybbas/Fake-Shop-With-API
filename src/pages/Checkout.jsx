import { Link } from 'react-router-dom';
import './Checkout.css'

function Checkout(){
    return(
        <div className='order-div'>
            <div className="order-window-div">
                <div className='order-name-info-div'>
                    <div className='order-name-title-div'>
                        <span className='order-name-title-span'>Recipient of the order:</span>
                    </div>
                    <div className='order-name-info-input-div'>
                        <div className='order-username-div'>
                            <label className='order-username-label' htmlFor="username">Username:</label>
                            <input className='order-username-input' id='username' name='username' type='text' placeholder='sxtell'/>
                        </div>
                        <div className='order-email-div'>
                            <label className='order-email-label' htmlFor="email">Email:</label>
                            <input className='order-email-input' id='email' name='email' type='email' placeholder='eybbas@gmail.com'/>
                        </div>
                        <div className='order-number-div'>
                            <label className='order-number-label' htmlFor="number">Number:</label>
                            <input className='order-number-input' id='number' name='number' type='phone' placeholder='+998'/>
                        </div>
                    </div>
                    
                </div>
                <div className='order-adress-info-div'>
                    <div className='order-adress-title-div'>
                        <span className='order-adress-title-span'>Delivery address:</span>
                    </div>
                    <div className='order-adress-info-input-div'>
                        <div className='order-region-div'>
                            <label className='order-region-label' htmlFor="">Region:</label>
                            <select className='order-region-select' name="" id="">
                                <option className='order-region-option' value="">Tashkent</option>
                                <option className='order-region-option' value="">Andijan Region</option>
                                <option className='order-region-option' value="">Bukhara Region</option>
                                <option className='order-region-option' value="">Fergana Region</option>
                                <option className='order-region-option' value="">Jizzakh Region</option>
                                <option className='order-region-option' value="">Namangan Region</option>
                                <option className='order-region-option' value="">Navoiy Region</option>
                                <option className='order-region-option' value="">Qashqadaryo Region</option>
                                <option className='order-region-option' value="">Samarqand Region</option>
                                <option className='order-region-option' value="">Sirdaryo Region</option>
                                <option className='order-region-option' value="">Surxondaryo Region</option>
                                <option className='order-region-option' value="">Tashkent Region</option>
                                <option className='order-region-option' value="">Xorazm Region</option>
                                <option className='order-region-option' value="">Republic of Karakalpakstan</option>
                            </select>
                        </div>
                        <div className='order-city-div'>
                            <label className='order-city-label' htmlFor="">City:</label>
                            <input className='order-city-input' type='text'/>
                        </div>
                        <div className='order-adress-div'>
                            <label className='order-adress-label' htmlFor="">Adress:</label>
                            <input className='order-adress-input' type='text'/>
                        </div>
                    </div>
                </div>
                <div className='order-payment-div'>
                    <div className='order-payment-title-div'>
                        <span className='order-payment-title-span'>Payment method:</span>
                    </div>
                    <div className='order-payment-radio-div'>
                        <div className='order-payment-online-div'>
                            <input className='order-payment-online-radio' name='order-payment-method' type='radio' id='card-online'/>
                            <label className='order-payment-online-label' htmlFor="card-online">By card online</label>
                        </div>
                        <div className='order-payment-cash-div'>
                            <input className='order-payment-cash-radio' name='order-payment-method' type='radio' id='cash'/>
                            <label className='order-payment-cash-label' htmlFor="cash">Cash or card upon receipt</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='order-button-div'> 
                <Link to='/order-accept'>
                  <button className='cart-order-button'>Order</button>
                </Link>
            </div>
        </div>
    )
}

export {Checkout};