import {Routes, Route, Link} from 'react-router-dom';
import { observer } from 'mobx-react';
import './firstpage.css';
import '../../fonts/icomoon-v1.0/style.css'

const Firstpage = observer(() =>  {

  return (
    <>
      <div className='main-page-div'>
      <span className='main-page-span1'>Welcome!</span>
      <span className='main-page-span2'>to</span>
      <span className='main-page-span3'>Fake Store Example</span>
      <Link className='go-to-home-btn' to='/products'>
        <div className='go-to-home-div'>Go to Home</div>
      </Link>
    </div>
    </>
  );
})

export default Firstpage;