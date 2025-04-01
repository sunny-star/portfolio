import React from 'react';

const About = () => {
  return (
    <div name="About" className='w-full bg-gradient-to-b mb-32 from-gray-800 to-black md:px-20 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pt-12 py-3'>
          <p className='text-3xl text-yellow-300 font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='md:text-2xl mt-4'>
          I am <span className='text-blue-500'>Chiluka SUNNY</span>, currently pursuing a 6-year Integrated B.Tech program in Computer Science Engineering at IIIT RGUKT RK Valley. I have been excelling academically with a CGPA of 8.1, a PUC (Pre-University Course) CGPA of 9.1, and an SSC CGPA of 9.8.
        </p>
        <p className='md:text-2xl mt-4'>
          I am a passionate developer, currently honing my skills in <span className='text-blue-500'>MERN Stack</span> by building projects. I have experience with <span className='text-blue-500'>MySQL</span> and <span className='text-blue-500'>MongoDB</span> databases. I am eager to leverage my skills in the world of technology and contribute to its advancement.
        </p>
        <br /><br /><br /><br />
      </div>
    </div>
  );
};

export default About;
