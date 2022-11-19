/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import Link from "next/link";
import { useAddress, useDisconnect, useMetamask, useNFTDrop } from "@thirdweb-dev/react";
import { useState } from "react";
import { Collection } from "../../typings"

interface Props {
  collection: Collection
}

function NFTDropPage({collection}: Props) {

  const [claimedSupply, setClaimedSupply] = useState<number>(0);
  const [totalSupply, setTotalSupply] = useState<number>(0);
  const nftDrop = useNFTDrop(collection.address);
  const connectWithMetaMask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();


  useEffect(() => {
    if (!nftDrop) return;

    const fetchNFTDropData = async () => {
      const claimed = await nftDrop.getAllClaimed();
    }
    fetchNFTDropData();
  }, [nftDrop]);

  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10  '>
        
        {/* LEFT */}
        <div className='bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4 lg:rounded-r-3xl '>
            <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                  <div className='bg-gradient-to-br from-yellow-400 to to-purple-600 p-2 rounded-2xl '>
                      <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72' src="https://cdn.sanity.io/images/9ep8u6nk/production/ee298e2fb78803f3226dcde22f1f2a8d69f56fad-600x600.png" alt='' />
                    </div>
                <div className='text-center p-5 space-y-2 '>
              <h1 className='text-4xl font-bold text-white '>PAPAFAM Apes</h1>
              <h2 className='text-xl text-white '>The collection of PAPAFAM Apes who live and breathe REACT!</h2>
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
            <button className='text-white rounded-full bg-rose-400 px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base' onClick={() => { address ? disconnect() : connectWithMetaMask()}}>{address ? 'Sign Out' : 'Sign In'}</button>
          </header>
          <br></br>
          {address && (
            <p className="text-rose-400 text-sm text-center">Your logged in with wallet {address.substring(0,5)}...{address.substring(address.length-5)}</p>
          )}

          {/* Content */}
          
              <div className='mt-4 flex flex-1 flex-col items-center space-y-2 text-center lg:space-y-0 lg:justify-center '>
                  <img className='w-80 object-cover pb-10 lg:h-40' src="https://cdn.sanity.io/images/9ep8u6nk/production/f72570921cab407c11a39c8e1717f5607718e14d-2951x2430.webp" alt='' />
                  <h1 className='text-3xl font-bold text-white lg:text-5xl lg:font-extrabold '>The PAPAFAM Ape Coding Club | NFT Drop</h1>
                  <p className='pt-2 text-xl text-green-500'>13 / 21 NFT's Claimed</p>
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