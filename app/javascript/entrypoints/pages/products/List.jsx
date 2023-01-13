import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search, Results } from '../../compnents';
import { getProducts } from '../../services/products.service';

const List = () => {
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');

  const {products, status} = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if(query !== "") {
      dispatch(getProducts({query}))
      .then(item => {
        if (item.payload !== 0) {
          setMessage("Not found!");
        }
      })
    }
  }

  return (
    <>
      {products.length === 0 ? <Search handleSubmit={handleSubmit} getProducts={getProducts} setQuery={setQuery} products={products} message={message} status={status} /> :
        <Results products={products} />
      }
    </>
  )
}

export default List