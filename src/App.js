import {Routes, Route, Link} from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <>
      <header className="App-header">
        <Link href='/'>Home</Link>
        <Link href='/about'>About Us</Link>
      </header>
      <Routes>
        <Route path='/' element={Home} />
        <Route path='/about' element={About} />
      </Routes>
    </>
  );
}

export default App;
