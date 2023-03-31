import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './index.scss'
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
