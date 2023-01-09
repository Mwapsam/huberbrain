import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '../../compnents';
import { createProduct } from '../../services/products.service';

const Create = () => {
    const [name, setName] = useState('');
    const [text, setText] = useState(null);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append('product[name]', name);
        data.append('product[text]', text);

        dispatch(createProduct(data));
        setName('');
        setText(null);
    } 

  return (
    <>
       <Form 
            handleSubmit={handleSubmit} 
            name={name}
            text={text}
            setText={setText}
            setName={setName} 
        />
    </>
  )
}

export default Create