import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='text-white/70 py-8 border-t border-gray-700'>
      <div className='px-6 md:px-0 mt-12 max-w-[1000px] mx-auto flex justify-center items-center'>
        <h1 className='text-2xl font-bold'>Bisma Yousuf</h1>
      </div>
      <div className='flex justify-center space-x-6 mt-4'>
        <a href="https://www.linkedin.com/in/bisma-yousuf-52572b2b4/" className='hover:text-gray-300'>
          <FaLinkedin size={24} />
        </a>
        <a href="#" className='hover:text-gray-300'>
          <FaTwitter size={24} />
        </a>
        <a href="https://github.com/BismaYousuf" className='hover:text-gray-300'>
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  )
}

export default Footer
