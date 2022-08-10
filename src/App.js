import React from 'react';
import './app.css';
import Header from './components/Header';
import Main from './components/Main';
import {Route , Routes} from  'react-router-dom';
import Cart from './components/Cart';

function App() {
  return (
      <div className='btn'>
       <Header/>
       <Routes>
        <Route path='/' element={<Main/>}  />
        <Route path='/cart' element={<Cart/>}  />
       </Routes>
      </div>
    
  )
}

export default App;