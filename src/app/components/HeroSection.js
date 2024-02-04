import React from 'react'
import { FaCode, FaPlayCircle } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center my-8 lg:my-[150px]'>
      <h1 className='text-2xl lg:text-8xl item-center text-gray-200 px-0 lg:px-10 text-center font-semibold'> <span className='text-[#c46641]'>Create&nbsp;</span>Gist from the Comfort of your <span className='text-[#c46641]'>&lt;/&gt;</span> Editor</h1>
      <p className='text-md lg:text-xl my-2 lg:my-10 text-gray-200 opacity-90'>Conveniently create and share GitHub Gists from your codes files directly within the editor</p>
      <div className='flex flex-wrap justify-center'>
        <button className=' m-1 lg:m-3 py-2 lg:py-3 px-5 bg-[#c46641] rounded-lg text-md lg:text-xl'>Get Started</button>
        <button className=' m-1 lg:m-3 flex items-center py-2 lg:py-3 px-5 bg-[#0e1325] text-md lg:text-xl text-[#ea9776] rounded-lg'><FaPlayCircle className='mr-2' />Watch Demo</button>
      </div>
    </div>
  )
}

export default HeroSection