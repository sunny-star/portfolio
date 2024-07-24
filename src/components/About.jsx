import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full bg-gradient-to-b from-gray-800 to-black md:px-20 text-white '>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-3 py-1'>
          <p className='text-3xl  text-yellow-300  font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-SMSS md:text-2xl bg-gradient-to-b marker: mt-4'>Iam &nbsp;<button className="text-blue-500">Chiluka SUNNY</button> &nbsp; currently pursuing a 6-years-Integrated B.Tech program in Computer Science Engineering at IIIT RGIKT RK-VALLEY . Here , I have been excelling academically with CGPA of 8.1 , and In my PUC(Pre-University-Course) with 9.1 , and In SSC with 9.8 . Iam Passionate developer , and currently iam honing my skills in <button className='text-blue-500'>MERN Stack</button> by building projects . I have experience with <button className='text-blue-500'>MySQL , MongoDB</button>databases . Iam eager to leverage my skills in the world of technology and contribute to its advancement .  </p>
        <br />

      </div>
    </div>
  )
}

export default About
