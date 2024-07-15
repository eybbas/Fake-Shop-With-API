import './App.css'
import { observer } from 'mobx-react';
import './fonts/icomoon-v1.0/style.css'
import Header from './pages/header/header';
import { Link } from 'react-router-dom';

const App = observer(() =>  {

  return (
    <>
    <Header/>
    </>
  );
})

export default App;
