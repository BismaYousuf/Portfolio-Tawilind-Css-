"use client"
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

const project = [
  {
    title: "Beauty Bar Saloon",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam labore veritatis laboriosam similique. Ullam iste quia dolor rem laborum.",
    devStack: "HTML, CSS, REACT, NEXTJS",
    link: "https://class-assisgnment-4-and-5-d9hj.vercel.app/",
    git: "https://github.com/BismaYousuf/class_Assisgnment-4-and-5",
    src: "/pics/project2.png"
  },
  {
    title: "Panacloud Website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam labore veritatis laboriosam similique. Ullam iste quia dolor rem laborum.",
    devStack: "Core HTML, CSS",
    link: "https://panacloudwebsite.vercel.app/",
    git: "https://github.com/BismaYousuf/Panacloudwebsite",
    src: "/pics/project1.png"
  },
  {
    title: "Resume Builder",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam labore veritatis laboriosam similique. Ullam iste quia dolor rem laborum.",
    devStack: "HTML, CSS, Typescript",
    link: "https://interactive-resume-builder-2b9g.vercel.app/",
    git: "https://github.com/BismaYousuf/Interactive-Resume-Builder",
    src: "/pics/project3.png"
  }
];

const Portfolio = () => {
  return (
    <>
      <div className='text-white bg-gradient-to-b from-black mt-52 to-[#381a5f] py-18' id="portfolio">
        <h1 className="text-white text-6xl font-bold -mt-10 my-12 mx-auto w-[320px] text-center gap-y-4">
          SELECTED <span className="text-orange-400">PROJECTS</span>
        </h1>

        <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24'>
          {project.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`mt-12 flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse gap-12' : 'md:flex-row'}`}
            >
              <div className='space-y-4 max-w-[550px]'>
                <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
                <h2 className='text-4xl'>{project.title}</h2>
                <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                <p className='text-xl text-orange-400 font-semibold'>{project.devStack}</p>
                
                {/* Adjusted link styling and container */}
                <div className='flex space-x-6 mt-4'>
                  <a href={project.link} className='text-orange-400 underline text-lg'>See live site</a>
                  <a href={project.git} className='text-orange-400 underline text-lg'>Github</a>
                </div>
              </div>
              <div className='flex justify-center items-center mt-6 md:mt-0'>
                <Image
                  src={project.src}
                  alt={project.title}
                  width={350}
                  height={500}
                  layout="responsive"
                  objectFit="cover"
                  quality={90}  
                  className="w-auto h-[400px] object-cover border rounded border-gray-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
