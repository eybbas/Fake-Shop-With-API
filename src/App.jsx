import {Routes, Route, Link} from 'react-router-dom';
import './App.css'

import { Mainpage } from './pages/Mainpage';
import { Productpage } from './pages/Productpage';
import { Cartpage } from './pages/Cartpage';
import { Checkout } from './pages/Checkout';
import { OrderAccept } from './pages/OrderAccept';

function App() {
  return (
    <>
      <header className="App-header">
        <div>
          <Link className='menu-link' to='/'>Home</Link>
        </div>
        <div>
          <Link className='menu-link' to='/cart'>Cart</Link>
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
}

export default App;
