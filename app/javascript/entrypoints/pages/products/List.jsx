import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search, Results } from '../../compnents';
import { getProducts } from '../../services/products.service';

const List = () => {
  const [query, setQuery] = useState('');
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(getProducts({query}))
  }

  return (
    <>
      {products.length === 0 ? <Search handleSubmit={handleSubmit} setQuery={setQuery} /> :
        <Results products={products} />
      }
    </>
  )
}

export default List