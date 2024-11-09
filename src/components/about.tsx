import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <>
    <div className='mx-w-[1200px] mx-auto' id='about'>

      <h1 className='text-white text-6xl w-[320px] mx-auto font-semibold p-4 mb-4'>About <span className='text-orange-400'>Me</span></h1>
        <div className='px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center'>

          <div className=' w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={'/pics/book.png'}
             alt={'book'}
             width={130}
             height={130}
             />
             <div className='flex flex-col mt-4'>
              <h2 className='text-2xl font-bold text-white/80'>Education</h2>
              <p className='text-lg text-white/70 mt-2'>I have completed my Intermediate education with an F.Sc. background, focusing on foundational sciences that support her analytical and problem-solving skills.</p>
             </div>
          </div>
          </div>

          
          <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={'/pics/finance.png'}
             alt={'finance'}
             width={130}
             height={130}
             />
             <div className='flex flex-col mt-4'>
              <h2 className='text-2xl font-bold text-white/80'>Finace</h2>
              <p className='text-lg text-white/70 mt-2'>I approach challenges with a logical and systematic  mindset. </p>
             </div>
          </div>
          </div>

          
          <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={'/pics/card.png'}
             alt={'card'}
             width={130}
             height={130}
             />
             <div className='flex flex-col mt-4'>
              <h2 className='text-2xl font-bold text-white/80'>Experience</h2>
              <p className='text-lg text-white/70 mt-2'>I have a diversed portfolio of projects I specialize in building responsive and visually engaging web applications that prioritize user experience and performance.</p>
             </div>
          </div>
          </div>

          
          <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={'/pics/pc.png'}
             alt={'pc'}
             width={130}
             height={130}
             />
             <div className='flex flex-col mt-4'>
              <h2 className='text-2xl font-bold text-white/80'>Technical Skills</h2>
              <p className='text-lg text-white/70 mt-2'>With expertise in HTML, CSS, Next.js, Tailwind CSS, and TypeScript, I create responsive, high-performance web applications with user-friendly interfaces.</p>
             </div>
          </div>
          </div>


        </div>
    </div>
    
    </>
  )
}

export default About
