import React from 'react';
import Home from './pages/Home/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './index.scss'
import Cart from './pages/Cart/Cart';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import Header from './components/Header/Header';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <div className="App">
            <div className='container'>
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
            </div>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
