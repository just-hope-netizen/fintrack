import React from 'react'
import Image from "next/image";
import claretDown from '../public/claret down.png';
import dots from '../public/Union.png';
import profilePictures from '../public/Profile pictures.png';

const HomeHeader = () => {
  return (
    <>
      <section className="w-full gap-y-4 flex-wrap flex justify-between items-center ">

        <div className=" flex  gap-4 items-center">
          <h1 className=" flex   items-center   gap-x-2.5">
            <span className=" font-bold text-2xl md:text-4xl public-sans" >
              Wallet Ledger
            </span> <Image src={claretDown} alt="icon" /></h1>
          <div className=" bg-[#386776]/10 flex  max-h-7 rounded-2xl px-2 gap-2 items-center font-medium">
            <div className=" w-2 h-2 rounded-full bg-[#087A2E]"></div>
            <h6>Active</h6>
          </div>
        </div>

        <div className=" flex flex-wrap items-center gap-3">
          <button className=" bg-[#4B8B9F]  h-9   text-black rounded-2xl px-4.5   font-medium">
            Share
          </button>
          <button className=" border-[#386776]/10 border rounded-full  h-9  px-2   ">
            <Image src={dots} alt="" />
          </button>

        </div>
      </section>
      <div className=" flex flex-wrap items-center gap-2">
        <Image src={profilePictures} alt="" width={110} />
        <span className=" text-[#15272D]/60 ">Ava, Liam, Noah <span className=" ml-1">+12 others</span></span>

      </div>
    </>
  )
}

export default HomeHeader