import {Routes, Route, Link} from 'react-router-dom';
import './App.css'

import { Mainpage } from './pages/Mainpage';
import { Productpage } from './pages/Productpage';
import { Cartpage } from './pages/Cartpage';
import { Checkout } from './pages/Checkout';
import { OrderAccept } from './pages/OrderAccept';
import { observer } from 'mobx-react';
import MobxStore from './pages/MobxStore';

const App = observer(() =>  {
  return (
    <>
      <header className="App-header">
        <div>
          <Link className='menu-link' to='/'>Home</Link>
        </div>
        <div className='menu-cart-div'>
          <Link className='menu-link' to='/cart'>Cart</Link>
          <div className='menu-total-quantity-div'>
            <span className='menu-total-quantity-label'>{MobxStore.totalQuantity}</span>
          </div>
        </div>
        <div>
          <Link className='menu-link' to='/about'>About Us</Link>
        </div>
        <div>
          <Link className='menu-link' to='/contact'>Contact</Link>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Mainpage/>} />
        <Route path='/cart' element={<Cartpage/>} />
        <Route path={`/product/:id`} element={<Productpage/>} />
        <Route path={`/check-out`} element={<Checkout/>} />
        <Route path={`/order-accept`} element={<OrderAccept/>} />
      </Routes>
    </>
  );
})

export default App;
