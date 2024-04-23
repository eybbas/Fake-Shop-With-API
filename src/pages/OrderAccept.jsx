import { Link } from 'react-router-dom'
import './OrderAccept.css'

function OrderAccept(){
    return(
        <div className='order-accept-div'>
            <div className='order-accept-span-div'>
                <div className='order-accept-img-div'>
                    <img className='order-accept-img' src="https://i.pinimg.com/originals/ba/9a/b4/ba9ab42593e487b4e349973e1d43b11d.gif" alt="" />
                </div>
                <span className='order-accept-span'>Your Order Is Accepted!</span>
            </div>
            <div className='order-accept-button-div'>
                <Link to='/'>
                  <button className='order-accept-button'>Back To Mainpage</button>
                </Link>
            </div>
        </div>
    )
}

export {OrderAccept};