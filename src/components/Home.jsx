import React from 'react';
import Sunny from "../images/sunny.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <button className="group text-white py-2 px-4 my-2 flex items-center rounded-md bg-gradient-to-r to-cyan-400 from-blue-500 cursor-pointer hover:bg-gradient-to-l hover:from-cyan-500 hover:to-blue-600">
            Resume
            <span className="group-hover:rotate-90 duration-300 ml-2">
              <MdKeyboardArrowRight size={20} />
            </span>
          </button>
        </>
      ),
      href: 'https://drive.google.com/file/d/10U0UWdCkCeix1X7ZRjkYTkrWlx_vyJT7/view?usp=sharing',
      style: 'rounded-tr-md',
      download: false, // No download attribute needed
    },
  ];

  return (
    <div name="Home" className="h-screen md:flex w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center md:flex-row">
        <div className="flex flex-col justify-center h-full mt-11 py-3">
          <h2 className="text-2xl px-7 md:text-4xl sm:px-4 font-bold text-white mt-10">
            I'M a Full Stack Developer
          </h2>
          <p className="text-gray-500 px-8 py-6 md:text-xl max-w-md">
            Passionate about crafting high-quality web applications. Familiar with both &nbsp;
            <button className='text-blue-500 px-2'> front-end </button>
            and
            <button className='text-blue-500 px-2'> back-end </button>
            &nbsp; technologies. Dedicated to delivering seamless user experiences through clean and efficient code.
          </p>
          <ul className="px-5 py-1">
            {links.map(({ id, child, href, style, download }) => (
              <li key={id} className={style}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src={Sunny} alt="my profile" className=" mt:14 rounded-full mx-auto w-44 h-52" />
        </div>
      </div>
    </div>
  );
}

export default Home;
