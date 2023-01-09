import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Create, List } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/create-product' element={<Create />} />
    </Routes>
  )
}

export default App