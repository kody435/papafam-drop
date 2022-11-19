import React from 'react'
import Link from "next/link";


function NFTDropPage() {
  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10  '>
        
        {/* LEFT */}
        <div className='bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4 lg:rounded-r-3xl '>
            <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                  <div className='bg-gradient-to-br from-yellow-400 to to-purple-600 p-2 rounded-2xl '>
                      <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72' src="https://cdn.sanity.io/images/9ep8u6nk/production/ee298e2fb78803f3226dcde22f1f2a8d69f56fad-600x600.png" alt='' />
                    </div>
                <div className='text-center p-5 space-y-2 '>
              <h1 className='text-4xl font-bold text-white '></h1>
              <h2 className='text-xl text-white '></h2>
                </div>
            </div>
        </div>

        {/* RIGHT */}
        <div className='flex flex-1 flex-col p-5 lg:col-span-6'>
                {/* Header */}
          <header className='flex items-center justify-between'>
            <Link href='/'>
              <h1 className='w-52 text-3xl font-extralight lg:w-max text-white' >The <span className='font-extrabold '>PAPAFAM</span> NFT Market Place</h1>
            </Link>
            <div className='text-white rounded-full bg-rose-400 px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>Sign In</div>
          </header>
          <br></br>

          {/* Content */}
          
          <div className='mt-4 flex flex-1 flex-col items-center space-y-2 text-center lg:space-y-0 lg:justify-center '>
            
          </div>

          {/* Mint Button */}
          <button className="mt-10 h-16 w-full rounded-full bg-red-600 font-bold text-white disabled:bg-gray-400 disabled:cursor-not-allowed">
            Mint NFT
          </button>
        </div>
    </div>
  )
}

export default NFTDropPage