import {Routes, Route, Link} from 'react-router-dom';
import { Mainpage } from '../products/Mainpage'
import { Productpage } from '../products/Productpage';
import { observer } from 'mobx-react';
import Logo from '../../img/logo.png';
import User from '../../img/user.png';
import './headerStyle.css';
import '../../fonts/icomoon-v1.0/style.css'
import Firstpage from '../Firstpage/firstpage';
import { Cartpage } from '../cart/cartpage';
import { createRef, useEffect } from 'react';
import MobxSearch from './MobxSearch';
import axios from 'axios';
import SearchBar from './searchbar';

const Header = observer(() =>  {

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
    .then((res) => {
      MobxSearch.productList = (res.data)
    })
    .catch((error) => {
      console.error('Ошибка при загрузке товаров:', error);
    });
  }, [])

  let inputRef = createRef()

  return (
    <>
      <header className="App-header">
        <div className='logo-div'>
          <Link to='/'>
            <img className='logo-img' src={Logo} alt="" />
          </Link>
        </div>
        <div className='menu-btns'>
          <div className='menu-link-div'>
            <Link className='menu-link' to='/products'>Home</Link>
          </div>
          <div className='menu-link-div'>
            <Link className='menu-link' to='/edit-products'>Edit</Link>
          </div>
          <div className='menu-link-div'>
            <Link className='menu-link' to='/cart'>Cart</Link>
          </div>
          <div className='menu-link-div'>
            <Link className='menu-link' to='/about-us'>About Us</Link>
          </div>
        </div>
        <div className='search-div'>
            <div className='search-header-div'>
                <input type="text" className='search-input' placeholder='search?' ref={inputRef} onChange={() => {MobxSearch.filteredState(inputRef.current.value)}}/>
                <button className='search-btn'><span class="icon-search"></span></button>
            </div>
            <SearchBar/>
        </div>    
        <div className='login-div'>
            <Link><img className='login-link-img' src={User} alt="" /></Link>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Firstpage/>} />
        <Route path='/products' element={<Mainpage/>} />
        <Route path={`/products/:id`} element={<Productpage/>} />
        <Route path={`/cart`} element={<Cartpage/>} />
      </Routes>
    </>
  );
})

export default Header;
