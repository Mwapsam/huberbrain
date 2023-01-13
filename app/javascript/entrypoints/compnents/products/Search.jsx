import React from 'react';

const Search = ({handleSubmit, setQuery, message}) => {

  return (
    <>
    {/* <div className="text-center">
      <img src={logo} className='w-[10rem] h-[10rem]' alt="logo" />
    </div> */}
      
      <div className="flex h-screen items-center">
        <div className="group relative mx-auto lg:w-[50rem] overflow-hidden rounded-[8px] p-[1px] transition-all duration-300 ease-in-out">
          <div className=" via-white/90 to-transparent group-hover:visible" />
          <div className="relative rounded-[8px] bg-white p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800 text-center">Welcome to the brain of Andrew Huberman</h3>
              <p className="font-md text-slate-700 text-center">Search via keyword or phrase in the box below to find all references mentioned on the Huberman Lab Podcast.</p>
              <div className="relative mt-1">
                    <input type="text" id="password" className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Try searching 'Alpha-GPC dosage'" onKeyDownCapture={handleSubmit} onChange={(e) => setQuery(e.target.value)} />
                    {message && <p className='pt-4'>{message}</p>}
                    <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"><i className="mdi mdi-magnify" /></button>
              </div>
              <div className="div w-full text-center">
                <button type="button" className="border uppercase w-full border-blue-500 bg-blue-500 text-white text-sm font-semibold px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline" onClick={handleSubmit}>
                  search the huberbrain
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search