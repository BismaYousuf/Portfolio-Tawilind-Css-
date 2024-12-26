import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiSanity, SiTypescript } from 'react-icons/si';

const skillIcons = [
    { icon: <FaHtml5 size={140} />, label: "HTML" },
    { icon: <FaCss3Alt size={140} />, label: "CSS" },
    { icon: <FaJsSquare size={140} />, label: "JavaScript" },
    { icon: <FaReact size={110} />, label: "React" },
    { icon: <RiNextjsFill size={140} />, label: "Next Js" },
    { icon: <RiTailwindCssFill size={140} />, label: "Tailwind Css" },
    { icon: <SiTypescript size={140} />, label: "Typescript" },
    { icon: <SiSanity size={140} />, label: "Sanity" },
];

const Skills = () => {
  return (
    <>
    <div className='bg-[linear-gradient(to-top,#000,#381a5f_80%)] py-32'>
    <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
        <h2 className='text-6xl font-bold mb-4'>What I Do</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {skillIcons.map((skill, index) => (
                <div 
                    key={index} 
                    className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl transition-all duration-300 ease-in-out transform hover:bg-orange-400 hover:scale-105'
                >
                    {skill.icon}
                    <p className='mt-2'>{skill.label}</p>
                </div>
            ))}
        </div>
    </div>
</div>
    </>
  );
}

export default Skills;
