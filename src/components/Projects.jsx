import React from 'react'
import todolist from '../images/todolist.png';
import tools from '../images/tools.png'
import jobportal from '../images/jobportal.png'
import gym from '../images/gym.png'

const Projects = () => {
    const Project = [
        {
            id: 1,
            src: jobportal,
            Demo: (
                <>
                    <button className=' m-4   duration-200 hover:scale-105 group text-white  py-2 w-fit px-3 my-2 flex items-center rounded-md  bg-gradient-to-r to-orange-600 from-orange-300 cursor-pointer'>Demo</button>
                </>

            ),
            Code: (
                <>
                    <button className=' m-4   duration-200 hover:scale-105 group text-white  py-2 w-fit px-3 my-2 flex items-center rounded-md bg-gradient-to-r to-cyan-400 from-blue-500 cursor-pointer'>Code</button>
                </>
            ),
            name: 'JobQuest',
            href1: 'http://jobportalsunny.netlify.app',
            href2: 'https://github.com/sunny-star/jobQuest_FullStack',
            tech: (
                <>
                    <button className=' m-1  px-2      bg-yellow-400 text-black rounded-md'>React</button>
                    <button className=' m-1  py-0 px-3 bg-green-700 rounded-md'>MongoDB</button>
                    <button className=' m-1  py-0 px-3 bg-purple-500 rounded-md'>node.js</button>
                    <button className=' m-1  py-0 px-3 bg-pink-600 rounded-md'>express.js</button>
                    <button className=' m-1  py-0 px-3 bg-blue-700 rounded-md'>TailwindCSS</button>
                </>
            ),
        },
        {
            id: 2,
            src: tools,
            Demo: (
                <>
                    <button className=' m-4   duration-200 hover:scale-105 group text-white  py-2 w-fit px-3 my-4 flex items-center rounded-md  bg-gradient-to-r to-orange-600 from-orange-300 cursor-pointer'>Demo</button>
                </>

            ),
            Code: (
                <>
                    <button className=' m-4   duration-200 hover:scale-105 group text-white  py-2 w-fit px-3 my-2 flex items-center rounded-md bg-gradient-to-r to-cyan-400 from-blue-500 cursor-pointer'>Code</button>
                </>
            ),
            name: 'Tech-Tools',
            href1: 'https://tech-tools-sunny.vercel.app/',
            href2: 'https://github.com/sunny-star/Tech-tools-sunny ',
            tech: (
                <>
                    <button className=' m-1  py-0 px-3 bg-red-700 text-white rounded-md'>React</button>
                    <button className=' m-1  py-0 px-3 bg-green-700 rounded-md'>Material UI</button>
                    <button className=' m-1  py-0 px-3 bg-purple-500 rounded-md'>BootStrap</button>

                </>
            ),
        },
        {
            id: 3,
            src: gym,
            Demo: (
                <>
                    <button className=' m-4   duration-200 hover:scale-105 group text-white  py-2 w-fit px-3 my-3 flex items-center rounded-md  bg-gradient-to-r to-orange-600 from-orange-300 cursor-pointer'>Demo</button>
                </>

            ),
            Code: (
                <>
                    <button className=' m-4   duration-200 hover:scale-105 group text-white  py-2 w-fit px-3 my-3 flex items-center rounded-md bg-gradient-to-r to-cyan-400 from-blue-500 cursor-pointer'>Code</button>
                </>
            ),
            name: 'MyGYM',
            href1: 'https://gymsunny.vercel.app/',
            href2: 'https://github.com/sunny-star/gym',
            tech: (
                <>
                    <button className=' m-1 my- px-3   bg-white text-black rounded-md'>Html</button>
                    <button className=' m-1  py-0 px-3 bg-green-700 rounded-md'>CSS</button>
                    <button className=' m-1 py-0 px-3  bg-purple-500 rounded-md'>JavaScript</button>
                    <button className=' m-1  py-0 px-3 bg-pink-700 rounded-md'>MySql</button>
                    <button className=' m-1  py-0 px-3 bg-blue-700 rounded-md'>BootStrap</button>
                </>
            ),
        },
        {
            id: 4,
            src: todolist,
            Demo: (
                <>
                    <button className=' m-4   duration-200 hover:scale-105 group text-white  py-2 w-fit px-3 my-3 flex items-center rounded-md  bg-gradient-to-r to-orange-600 from-orange-300 cursor-pointer'>Demo</button>
                </>

            ),
            Code: (
                <>
                    <button className=' m-4   duration-200 hover:scale-105 group text-white  py-2 w-fit px-3 my-3 flex items-center rounded-md bg-gradient-to-r to-cyan-400 from-blue-500 cursor-pointer'>Code</button>
                </>
            ),
            name: 'Todo-List-App',
            href1: 'https://sunny-star.github.io/react-todoapp/',
            href2: 'https://github.com/sunny-star/react-todoapp',
            tech: (
                <>
                    <button className=' m-1 my- px-3   bg-yellow-500 text-black rounded-md'>React</button>
                    <button className=' m-1  py-0 px-3 bg-green-700 rounded-md'>CSS</button>
                    <button className=' m-1 py-0 px-3  bg-purple-500 rounded-md'>BootStrap</button>

                </>
            ),
        }

    ]


    return (
        <div name="Projects" className="bg-gradient-to-b md:px-16 from-gray-800 py-20 to-black w-full text-white ">
            <div className='max-w-screen-lg p-3 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-1 '>
                    <p className='text-3xl font-bold border-b-4 border-gray-500 p-2 text-yellow-300 inline'>Projects</p>
                    <p className='py-10 text-xl'><h1>Check out some of my work right here</h1></p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols3 gap-16 px-4 py-0  m-5 sm:px-0'>
                    {Project.map(({ id, src, name, href1, href2, Demo, Code, tech }) => (

                        <div key={id} className='shadow-md shadow-blue-500 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-x-105' />

                            <h1 className=" flex font-bold text-xl py-3 px-10 items-center justify-center ">{name}</h1>
                            <div>

                                <p className='m-2'>{tech}</p>
                            </div>

                            <div className='flex  px-2 py-1 items-center justify-center'>
                                <a href={href1}>{Demo}</a>
                                <a href={href2}>{Code}</a>

                            </div>

                        </div>
                    ))}

                </div>



            </div>

        </div>

    );
};

export default Projects
