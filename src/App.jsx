import React from 'react';
import Header from './components/Header/Header';
import Pizzas from './components/Pizzas/Pizzas';
import './index.scss'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <Pizzas/>
      </div>
    </div>
  );
}

export default App;
