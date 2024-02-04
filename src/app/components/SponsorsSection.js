import React from 'react'
import { DiGithubFull } from "react-icons/di";
import { FaGooglePay } from "react-icons/fa";
import { SiFacebooklive } from "react-icons/si";
import { SiKinsta } from "react-icons/si";

const SponsorsSection = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#060918] my-4 py-4'>
      <h3 className='text-xl text-[#db825b] font-medium' style={{ fontFamily: "Ubuntu" }}>Trusted by Friends at:</h3>
      <div className='flex flex-wrap flex-col lg:flex-row justify-center items-center'>
        <DiGithubFull className='mx-8 opacity-40 text-[75px] lg:text-[150px]' />
        <FaGooglePay className='mx-8 opacity-40 text-[75px] lg:text-[150px]' />
        <SiFacebooklive className='mx-8 opacity-40 text-[75px] lg:text-[150px]' />
        <SiKinsta className='mx-8 opacity-40 text-[75px] lg:text-[150px]' />
      </div>
    </div>
  )
}

export default SponsorsSection