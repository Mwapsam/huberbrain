import React from 'react'

const Form = ({handleSubmit, name, text, setText, setName}) => {
  return (
    <>
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                <form className="py-6 px-9" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                        Enter file name:
                        </label>
                        <input type="text" value={name} name="name" id="name" placeholder="Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-6 pt-4">
                        <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                        Upload File
                        </label>
                        <div className="mb-8">
                        <input type="file" name="text" id="file" className="sr-only" onChange={(e) => setText(e.target.files[0])} />
                        <label htmlFor="file" className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                            <div>
                            <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] cursor-pointer">
                                Browse
                            </span>
                            </div>
                        </label>
                        </div>
                        {text && (<div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                            <div className="flex items-center justify-between">
                                <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                                    {text && text.name}
                                </span>
                                <button className="text-[#07074D]" onClick={() => setText(null)}>
                                    <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z" fill="currentColor" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </div>
                        </div>)}
                    </div>
                    <div>
                        <button type='submit' className="hover:shadow-form w-full rounded-md bg-[#0279f8fd] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Send File
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Form