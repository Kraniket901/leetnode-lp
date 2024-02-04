import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import CustomVideoPlayer from './VideoSection';

const featuresData = ["Live Code Snippets", "Live Diagrams", "PR 2 Doc", "Doc Stucture suggestions", "CI Integration"];

const FeaturesSection2 = () => {
  return (
    <div className='flex flex-wrap-reverse p-4 lg:p-10'>
      <div className='w-full md:w-full lg:w-7/12 p-4 lg:p-10'>
        <CustomVideoPlayer />
      </div>
      <div className='w-full md:w-full lg:w-5/12 flex flex-col justify-center'>
        <h1 className='text-xl lg:text-4xl'>Create GitHub Gist</h1>
        <p className='text-gray-300 my-2 text-md lg:text-xl'>Create Gists by posting code files from your local VS Code environment to GitHub&apos;s Gist service.</p>
        <ul className='text-sm lg:text-xl flex flex-col'>
          {
            featuresData.map((item, id) => {
              return (
                <li key={id} className='bg-[#0e111e] border-[1px] border-[#808080] flex gap-4 items-center px-3 py-2 m-2 rounded-md'> <FaCheckCircle color='#e59071' />{item} </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default FeaturesSection2