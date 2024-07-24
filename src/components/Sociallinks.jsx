import React from 'react';
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';

const Sociallinks = () => {

    const links =[
        {
            id:1,
            child:(
                <>
                    LinkedIn <FaLinkedin size={15}/>
                </>
            ),
            href:'https://www.linkedin.com/in/sunnychiluka/',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                    Github <FaGithub size={15}/>
                </>
            ),
            href:'https://github.com/sunny-star',
            style:'rounded-tr-md'
        },
        {
            id:3,
            child:(
                <>
                    Gmail <HiOutlineMail size={15}/>
                </>
            ),
            href:'mailto:sunnysunny968667@gmail.com',
            style:'rounded-tr-md',
        },
    ];

  return (

    <div className="flex flex-col top-[36%] left-0 fixed">

       
         <ul>
            {links.map(({ id, child, href,style}) =>(
                 <li key={id} className={"flex justify-between items-center w-28 h-8 px-1  ml-[-88px] hover:ml-[4px] hover:rounded-md duration-300 bg-gray-500" }>
                    <a href={href} className="flex justify-between w-full text-white">
                        {child}
                    </a>
                 </li>
            ))}
           
        </ul>

    </div>

  );
};

export default Sociallinks
