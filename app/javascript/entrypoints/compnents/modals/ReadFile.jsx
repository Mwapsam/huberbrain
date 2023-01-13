import React, {useState} from 'react';

const ReadFile = ({isOpen, handleOpen, file}) => {
    const [text, setText] = useState('');
    if(file !== null) {
        fetch(file && file.text).then((response) => response.text())
        .then((data) => {
            setText(data);
        })
    }
    
      
  return (
    <>
        {isOpen && (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
            <div className="w-3/4  h-4/5 overflow-scroll bg-white px-6 py-4 rounded-md">
                <h1 className="text-xl mb-4 font-bold text-slate-500">{file.name}</h1>
                <p className='break-words py-5'>{text}</p> 
                <button className="bg-red-500 px-4 py-2 rounded text-md text-white" onClick={handleOpen}>Close</button>
            </div>
        </div>
        )}
    </>
  )
}

export default ReadFile