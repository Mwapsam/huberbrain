import React from 'react'

const App = () => {
  return (
    <>
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div class="relative mx-32 bg-white px-6 pt-10 pb-8 shadow-xl sm:rounded-lg sm:px-10">
                <div class="mx-auto">
                <img src="https://vite-ruby.netlify.app/logo.svg" class="h-32" />
                <h1 class="mt-6 mb-12 text-center font-sans text-5xl">Vite Rails</h1>
                <section class="justify-center-center my-0 mx-auto flex flex-wrap justify-between px-8 pt-0 pb-16 leading-6 tracking-normal">
                    <a class="max-h-32 max-w-[23rem] flex-shrink flex-grow-0 cursor-pointer rounded-lg bg-gray-200 py-6 px-8 text-sm font-medium leading-6 tracking-normal shadow-xl" href="/">
                    <h2 class="mx-0 mt-0 mb-3 cursor-pointer text-xl font-semibold leading-6 tracking-tight">🔥 Fast Server Start</h2>
                    <p class="m-0 cursor-pointer text-sm font-medium leading-6 tracking-normal">Unlike Webpacker, files are processed on demand!</p>
                    </a>

                    <a class="my-6 max-h-32 max-w-[23rem] flex-shrink flex-grow-0 cursor-pointer rounded-lg bg-gray-100 bg-transparent py-6 px-8 text-sm font-medium leading-6 tracking-normal shadow-xl" href="/">
                    <h2 class="mx-0 mt-0 mb-3 cursor-pointer text-xl font-semibold leading-6 tracking-tight">⚡️ Instant Changes</h2>
                    <p class="m-0 cursor-pointer text-sm font-medium leading-6 tracking-normal">Fast updates thanks to HMR. Goodbye full-page reloads!</p>
                    </a>

                    <a class="max-h-32 max-w-[23rem] flex-shrink flex-grow-0 cursor-pointer rounded-lg bg-gray-200 bg-transparent py-6 px-8 text-sm font-medium leading-6 tracking-normal shadow-xl" href="/">
                    <h2 class="mx-0 mt-0 mb-3 cursor-pointer text-xl font-semibold leading-6 tracking-tight">🚀 Zero-Config Deploys</h2>
                    <p class="m-0 cursor-pointer text-sm font-medium leading-6 tracking-normal">Integrates with Rake asset management tasks.</p>
                    </a>
                </section>
                </div>
            </div>
            </div>
    </>
  )
}

export default App