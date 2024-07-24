import React from 'react'
import Html from '../images/html-5.png'
import css from '../images/css.png'
import bootstrap from '../images/bootstrap.png'
import c from '../images/c.png'
import canva from '../images/canva.png'
import express from '../images/express.png'
import java from '../images/java.png'
import javascript from '../images/javascript.png'
import light from '../images/light.png'
import mongo from '../images/mongo.png'
import mysql from '../images/mysql.png'
import node from '../images/node.png'
import photo from '../images/photo.png'
import react from '../images/react.png'
import tailwind from '../images/tailwind.png'
import ubuntu from '../images/ubuntu.png'
import vs from '../images/vs.png'
import window from '../images/windows.png'
import github from '../images/github.png'
import python from '../images/python.png'
import web from '../images/web.png'
import npm from '../images/npm.png'



const Expe = () => {
    const skill1 = [
        {
            id: 1,
            src: Html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-orange-500'
        },
        {
            id: 4,
            src: bootstrap,
            title: 'BOOTSTRAP',
            style: 'shadow-orange-500'
        },

        {
            id: 5,
            src: react,
            title: 'REACT JS',
            style: 'shadow-orange-500'
        },

        {
            id: 6,
            src: node,
            title: 'NODE JS',
            style: 'shadow-orange-500'
        },
        {
            id: 7,
            src: express,
            title: 'EXPRESS JS',
            style: 'shadow-orange-500'
        },
        {
            id: 8,
            src: mongo,
            title: 'MONGO DB',
            style: 'shadow-orange-500'
        },
        {
            id: 9,
            src: mysql,
            title: 'MY SQL',
            style: 'shadow-orange-500'
        },
        {
            id: 10,
            src: tailwind,
            title: 'TAILWIND CSS',
            style: 'shadow-orange-500'
        },

    ];

    const skill2 = [
        {
            id: 1,
            src: c,
            title: 'C LANGUAGE',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: java,
            title: 'JAVA',
            style: 'shadow-orange-500'
        },
        {
            id: 3,
            src: python,
            title: 'PYTHON',
            style: 'shadow-orange-500'
        },


    ];

    const skill3 = [
        {
            id: 1,
            src: vs,
            title: 'VS CODE',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: github,
            title: 'GITHUB',
            style: 'shadow-orange-500'
        },
        {
            id: 3,
            src: web,
            title: 'WebStorm',
            style: 'shadow-orange-500'
        },
        {
            id: 4,
            src: npm,
            title: 'NPM',
            style: 'shadow-orange-500'
        },


        {
            id: 5,
            src: window,
            title: 'WINDOWS',
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            src: ubuntu,
            title: 'UBUNTU',
            style: 'shadow-orange-500'
        },
        {
            id: 7,
            src: canva,
            title: 'CANVA',
            style: 'shadow-orange-500'
        },
        {
            id: 8,
            src: light,
            title: 'LIGHT ROOM',
            style: 'shadow-orange-500'
        },
        {
            id: 9,
            src: photo,
            title: 'Adobe PHOTOSHOP',
            style: 'shadow-orange-500'
        },


    ];


    return (
        <div name="Skills" className='bg-gradient-to-b  md:px-20 from-black to-gray-800  w-full'>
            <div className='max-w-scren-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-3xl font-bold border-b-4 border-gray-500 p-2 text-yellow-300 inline'>Skills</p>
                    <p className='py-2 font-light text-xl'>These are the technologies I,ve worked with.</p>
                </div>
                <h1 className='text-2xl font-bold py-8'>Web Development</h1>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-1 md:px-32 md:py-4  px-10 sm:px-2'>
                    {skill1.map(({ id, src, title, style }) => (
                        <div key={id} className={'shadow-md hover:scale-110 duration-500 py-0 rounded-lg shadow-blue-500'}>
                            <img src={src} alt="" className='w-14 mx-auto' />
                            <p className='mt-2'>{title}</p>
                        </div>

                    ))}
                </div>

                <h1 className='text-2xl font-bold py-8'>Languages</h1>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center md:px-32 md:py-4  py-1 px-10 sm:px-2 '>
                    {skill2.map(({ id, src, title, style }) => (
                        <div key={id} className={'shadow-md hover:scale-105 duration-500 py-0 rounded-lg shadow-blue-500'}>
                            <img src={src} alt="" className='w-14 mx-auto' />
                            <p className='mt-2'>{title}</p>
                        </div>

                    ))}
                </div>

                <h1 className='text-2xl font-bold py-8'>Tools/platforms</h1>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center md:px-32 md:py-4  py-1 px-10 sm:px-2'>
                    {skill3.map(({ id, src, title, style }) => (
                        <div key={id} className={'shadow-md hover:scale-105 duration-500 py-0 rounded-lg shadow-blue-500'}>
                            <img src={src} alt="" className='w-14 mx-auto' />
                            <p className='mt-2'>{title}</p>
                        </div>

                    ))}
                </div>

            </div>


        </div>
    )
}

export default Expe;
