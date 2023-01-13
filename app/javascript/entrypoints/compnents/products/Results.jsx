import React, { useState } from 'react';
import { ReadFile } from '../../compnents';

const Results = ({products}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [file, setFile] = useState(null);

    const handleOpen = () => {
        setIsOpen((prev) => !prev);
    };

  return (
    <>
      <div className="flex h-screen items-center">
        <div className="relative mx-auto lg:w-[50rem] overflow-hidden rounded-[8px] p-[1px] transition-all duration-300 ease-in-out">
            <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible" />
            <div className="relative rounded-[8px] bg-white p-6">
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800 text-center">Here Are The Results</h3>
                    <p className="font-md text-slate-700 text-center">Tap Any Box To Expand and Read</p>
                    {products && products.map((product) => (
                        <div onClick={() => setFile(product)} key={product.id} className="div w-full text-center">
                            <button onClick={handleOpen} className="border w-full border-gray-300 bg-gray-100 text-black text-xs font-semibold px-4 py-2 transition duration-500 ease select-none hover:bg-gray-200 focus:outline-none focus:shadow-outline">
                                {product.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
      <ReadFile isOpen={isOpen} handleOpen={handleOpen} file={file} />
    </>
  )
}

export default Results