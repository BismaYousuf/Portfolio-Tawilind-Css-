"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='py-24 relative overflow-clip bg-[linear-gradient(to bottom,#000,#291942_35%,#8F5C55_60%,#DBAF6E_80%)]'>
    <div className='absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side, rgba(0,0,0,0.8), #2B1942)]'></div>


      <div className='relative'>
        <div className='text-7xl font-bold text-center'>
          <h1 className='text-[#9884CE]'>Hey! I am</h1>
          <h1 className='text-[#E48A57]'>BISMA YOUSUF</h1>
        </div>

        <motion.div className='hidden md:block absolute left-[250px] top-[170px]' drag>
          <Image src="/pics/icon1.png" alt="cursor" width={170} height={170} draggable="false" />
        </motion.div>

        <motion.div className='hidden md:block absolute right-[220px] top-[20px]' drag>
          <Image src="/pics/icon2.png" alt="message" width={120} height={120} draggable="false" />
        </motion.div>

        <p className='text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80'>
          I am a front-end developer focused on creating websites that provide the best experience for users.
        </p>

        <Image
          src="/pics/profilepic.png"
          alt="picture"
          width={400}
          height={400}
          className="h-auto w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
